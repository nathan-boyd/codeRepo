
from player import Player
from processing import Processing
import ttk, ImageTk, Image, os, threading, decimal, sys, Tkinter as tk 

class mainApp():
    
    """
    @summary:  sets up the application
    """  
    def __init__(self, fileName):
        
        self.checkImports()
        
        self.fileName           = fileName
        self.shortFileName      = os.path.splitext(os.path.basename(self.fileName))[0]
        self.root               = tk.Tk()
        self.root.wm_title("Condensed Image Video Player")
        
        playerCallBacks = []
        playerCallBacks.append(lambda a: self.loadFileCallBack(a))
        playerCallBacks.append(lambda: self.quitCallBack()) 
        playerCallBacks.append(lambda a: self.moveSlider(a))
        
        self.player = Player(self.root, self.fileName,playerCallBacks)
        self.player.daemon = True
        self.playerThread = threading.Thread(target=self.player.start, args=())
        
        self.playerThread.start()
        
        self.updateImage()
        self.setupWidgets()
        
        self.root.mainloop()
        
    """
    @summary:  ensures that the Python interpreter is correctly configured
    """   
    def checkImports(self):
        IMPORT_FAILURES = []
        
        try:
            import numpy
        except ImportError:
            IMPORT_FAILURES.append(("numpy",
                                  "Numpy",
                                  "http://sourceforge.net/projects/numpy/files/NumPy/1.7.0/numpy-1.7.0-win32-superpack-python2.7.exe/download",
                                  "python-numpy",
                                  "Enables loading of images into array"))

        try:
            import cv2
        except ImportError:
            IMPORT_FAILURES.append(("opencv",
                                  "OpenCV",
                                  "http://opencv.org/downloads.html",
                                  "python-opencv",
                                  "OpenCV used for frame capture from video"))
            
        try:
            import Image
        except ImportError:
            IMPORT_FAILURES.append(("PIL",
                                  "Python Image Library",
                                  "http://www.pythonware.com/products/pil/",
                                  "python-imaging",
                                  "PIL Supports image processing"))
        

        if len(IMPORT_FAILURES) != 0:  
            print "Condensed Image: At least one import failed, You need to install some software."
            print "-------------------------------------------------------------------------------"
            for (module, name, www, ubuntu, msg) in IMPORT_FAILURES:
                print "'import %s' failed. (The %s module)" % (module, name)
                print " \tSee  <%s>, or try:" % www
                print " \tsudo apt-get install %s (Ubuntu Linux)" % ubuntu
                if msg != None:
                    print " \t", msg
                print ""
            sys.exit(1)
  
    """
    @summary:  sets up TK widgets
    """  
    def setupWidgets(self):
        
        try:
            self.horizontalPanel = tk.Label(master=self.root, image = self.horizontalImage)
            self.horizontalPanel.pack(side = "bottom", fill = "both", expand = "yes")
            self.playerScale = tk.Scale(self.root, from_=0, to=self.player.frameCount, orient=tk.HORIZONTAL, sliderrelief=tk.RIDGE, command= lambda a: self.sliderCallback())
            self.playerScale.pack(side = "bottom", fill = "both", expand = "yes")
            self.verticalPanel  = tk.Label( self.root, image = self.verticalImage)
            self.verticalPanel.pack(side = "bottom", fill = "both", expand = "yes")
        except:
            print "error: failed to setup widgets"


    """
    @summary:  callback updates progressbar
    """      
    def updateProgressBar(self, frame, timePassed, processingComplete):
        
            self.processingBar.step(1)
            
            percentComplete = (float(frame)/self.player.frameCount)*100
            percentComplete = decimal.Decimal(percentComplete)
            percentComplete = percentComplete.quantize(decimal.Decimal(10) ** -0).normalize()
            
            eta = ((self.player.frameCount - frame) * timePassed)/60
            eta = decimal.Decimal(eta)
            eta = eta.quantize(decimal.Decimal(10) ** -0).normalize()
            message = str(percentComplete) + "% completed, " + str(eta) + " minutes remaining"
            self.processingMessage.configure(text=message)
            

    """
    @summary:  called when video is not already processed
    """          
    def processVideo(self):
        
        print "processing video"
        
        self.processingFrame = tk.Toplevel()
        self.processingFrame.title("Processing Progress")
        
        self.processingBar = ttk.Progressbar(self.processingFrame,orient ="horizontal",maximum=self.player.frameCount, length = 400, mode ="determinate")
        self.processingBar.pack(side = "bottom", fill = "both", expand = "yes")
        self.processingMessage = tk.Message(self.processingFrame, text="This video has not been processed yet, processing now...", width=300)
        self.processingMessage.pack(side = "bottom", fill = "both", expand = "yes")
        
        self.processingFrame.update()
        self.processingFrame.deiconify()
        
        processingCallBacks = []
        processingCallBacks.append(lambda a, b, c : self.updateProgressBar(a, b, c))
        
        self.processing = Processing(self.fileName, processingCallBacks)
        self.processing.daemon = True
        self.processingThread = threading.Thread(target=self.processing.start, args=())
        self.processingThread.start()

    """
    @summary:  updates the condensed image
    """        
    def updateImage(self):
        
        horizontalName = "images/processed/" + self.shortFileName + "Horizontal.jpg"
        
        try:
            with open(horizontalName): pass
        except IOError:
            print "video not processed"
            self.processVideo()
            return
        
        height  = int(self.player.getHeight()/2)
        width   = int(self.player.getWidth())
        
        horizontalImage         = Image.open(horizontalName)
        self.horizontalImage    = ImageTk.PhotoImage(horizontalImage.resize((width,height), Image.ANTIALIAS))
        
        verticalName        = "images/processed/" + self.shortFileName + "Vertical.jpg"
        verticalImage       = Image.open(verticalName)
        self.verticalImage  = ImageTk.PhotoImage(verticalImage.resize((width,height), Image.ANTIALIAS))

    """
    @summary:  catches slider movement
    """         
    def sliderCallback(self):
        self.player.goToFrame(self.playerScale.get())

    """
    @summary:  moves slider every frame
    """   
    def moveSlider(self, frame):
        try:
            self.playerScale.set(frame)
        except:
            print "error: moveSlider failed"
    
    """
    @summary:  kills main TK window
    """      
    def quitCallBack(self):
        print "main: quit callback"
        self.root.destroy()
        
    """
    @summary:  called when new file is opened
    """  
    def loadFileCallBack(self, fileName):
        self.fileName = fileName
        self.shortFileName = os.path.splitext(os.path.basename(self.fileName))[0]
        self.verticalPanel.destroy()
        self.horizontalPanel.destroy()
        self.playerScale.destroy()
        self.updateImage()
        self.setupWidgets()

if __name__ == "__main__":
    app = mainApp("videos/interview.avi")
