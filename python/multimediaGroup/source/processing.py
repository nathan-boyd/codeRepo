"""
__name__            = "processing.py"
__author__          = "Robert Nathan Boyd"
__email_            = "nathan@nathan-boyd.org, robboyd@iupui.edu"
__version__         = "0.1"
__repository__      = "https://github.com/nathanboyd46/MultimediaGroup"
__description__     = "creates condensed image frame"

"""

import cv2, cv2.cv as cv
import Image, threading, numpy as np, time, math, os

class Processing(threading.Thread):
    
    def __init__(self, fileName, callBacks):
        
        threading.Thread.__init__(self)
        
        self.fileName           = fileName
        self.shortFileName      = os.path.splitext(os.path.basename(self.fileName))[0]
        self.progressCallBack   = callBacks[0]
        self.video              = cv2.VideoCapture(self.fileName)
        
        self.width          = self.video.get(cv.CV_CAP_PROP_FRAME_WIDTH )
        self.width          = int(self.width)
        
        self.height         = self.video.get(cv.CV_CAP_PROP_FRAME_HEIGHT )
        self.height         = int(self.height)
        
        self.FPS            = self.video.get(cv.CV_CAP_PROP_FPS )
        self.frameCount     = self.video.get(cv.CV_CAP_PROP_FRAME_COUNT )
        self.frameCount     = int(self.frameCount)
        
        self.condensedHorizontalImage   = Image.new("RGB", (self.frameCount,self.height), "white")
        self.condensedVerticalImage     = Image.new("RGB", (self.frameCount,self.width), "white")
        self.arrFrames      = []
        
        self.exit = False
        
    def onExit(self):
        self.exit = True
            
    #create condensed row from each frame, append to array          
    def processFrames(self):
        
        frameCount = 0
        
        (readSuccessful, frame) = self.video.read()
        
        while (readSuccessful):
            
            if(self.exit):
                return
            
            start_time = time.time()
            image = cv2.cvtColor(frame, cv2.COLOR_BGRA2RGB)
            image = Image.fromarray(image)
            image.convert("RGB")   
            frameData   = np.array(image)
            
            ####################################################################
            #                        horizontal processing
            ####################################################################
            
            sliceFrame  = Image.new("RGB", (1,self.height), "black")
            sliceData   = np.array(sliceFrame)   
            
            for row in range(self.height):       
                
                red     = 0                                                            
                green   = 0                                                            
                blue    = 0                                                            
                                                                                       
                for col in range(self.width):                                          
                    pixel   =  frameData[row,col]                                      
                    red     += pixel[0]                                                
                    green   += pixel[1]                                                
                    blue    += pixel[2]                                                
                                                                                       
                sliceData[row, 0] = [red/self.width, green/self.width, blue/self.width]
                                                                                       
            self.condensedHorizontalImage.paste(Image.fromarray(sliceData), (frameCount, 0)) 
            
            ####################################################################
            #                        vertical processing
            ####################################################################
            
            sliceFrame  = Image.new("RGB", (self.width, 1), "black")
            sliceData   = np.array(sliceFrame) 
            
            for col in range(self.width):       
                
                red     = 0                                                            
                green   = 0                                                            
                blue    = 0                                                            
                                                                                       
                for row in range(self.height):                                          
                    pixel   =  frameData[row,col]                                      
                    red     += pixel[0]                                                
                    green   += pixel[1]                                                
                    blue    += pixel[2]                                                
                                                                                       
                sliceData[0,col] = [red/self.width, green/self.width, blue/self.width]
                                                                              
            image = Image.fromarray(sliceData)  
            self.condensedVerticalImage.paste(image.rotate(90), (frameCount,0)) 

            timePassed = math.ceil((time.time() - start_time)*100)/100
            self.progressCallBack(frameCount, timePassed, False)
            
            (readSuccessful, frame) = self.video.read()
            frameCount += 1
            
    def save(self):
        name = "images/processed/" + self.shortFileName + "Vertical.jpg"
        self.condensedVerticalImage.save(name, "JPEG")
        
        name = "images/processed/" + self.shortFileName + "Horizontal.jpg"
        self.condensedHorizontalImage.save(name, "JPEG")
    
    def getFrameCount(self):
        return self.frameCount
            
    def run(self):
        self.processFrames()
        
        if(not self.exit):
            self.save()
            self.progressCallBack(0, 0, True)
        
def main():
       
    start_time = time.time()
    processing1 = Processing("videos/bunny.avi")
    processing1.start()
    processing1.join()
    curTime = time.time() - start_time
    print "processing complete" , curTime/60, "minutes"

if __name__ == "__main__":
    main() 