"""
__name__            = "player.py"
__author__          = "Robert Nathan Boyd"
__email_            = "nathan@nathan-boyd.org, robboyd@iupui.edu"
__version__         = "0.1"
__repository__      = "https://github.com/nathanboyd46/MultimediaGroup"
__description__     = "Plays an avi video, implements goto frame, get frame, and other common media
                        player functions"
"""

import cv2, cv2.cv as cv
from Tkinter import Tk, Frame, Menu
import tkFileDialog, Tkinter as tk, threading, Image, ImageTk
  
"""
@param root: root TK frame 
"""
class Player(threading.Thread):
    
    def __init__(self, root, fileName, callbacks):
        threading.Thread.__init__(self)
        
        self.root               = root
        self.fileName           = fileName
        self.loadFileCallBack   = callbacks[0]
        self.quitCallBack       = callbacks[1]
        self.sliderCallBack     = callbacks[2]
        self.pause              = False
        self.playBackFailed     = False
        
        self.loadFile()
        self.setupWidgets()
        
    """
    @summary: necessary for threading, called on "player.start()"
    """
    def run(self):
        # setup the update callback
        self.root.after(0, func=lambda: self.updateAll())
        self.root.after(1, func=lambda: self.togglePause())
        # self.gotoFrame(750)
#        self.root.mainloop()
        
    """
    @summary:  called every tick of the mainloop, elements that need updating should be called here
    @todo think about seperating widgets and video playback updates into seperate threads
    """
    def updateAll(self):
        
        if(not self.pause):
            self.drawFrame()
        
        # how long to wait between frames
        self.root.after(self.flWaitPerFrameInMillisec/8, func=lambda: self.updateAll())
#        self.root.after(0, func=lambda: self.updateAll())
            
        
    """
    @summary:  handles video playback
    """
    def drawFrame(self):
        (readSuccessful, frame) = self.video.read()
        
        if (readSuccessful):
            self.playBackFailed = False
            coloredImage = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            coloredImage = Image.fromarray(coloredImage)
            coloredImage = ImageTk.PhotoImage(image=coloredImage)
            
            self.videoLabel.configure(image=coloredImage)
            self.videoLabel._image_cache = coloredImage  # avoid garbage collection
            self.root.update()
            
            self.sliderCallBack(self.getFrame()) 
            
        else:
            self.playBackFailed = True
            self.togglePause()
            
           
    """
    @summary:   loads video file into memory
                sets frame size
                gets frames per second
                calculates time to wait in between frames
    """
    def loadFile(self):
        # video
        self.video       = cv2.VideoCapture(self.fileName)
        self.width       = self.video.get(cv.CV_CAP_PROP_FRAME_WIDTH )
        self.height      = self.video.get(cv.CV_CAP_PROP_FRAME_HEIGHT )
        
        self.flFPS                      = self.video.get(cv.CV_CAP_PROP_FPS )
        self.flWaitPerFrameInMillisec   = int( 1/self.flFPS * 1000 )
        self.frameCount                 = int(self.video.get(cv.CV_CAP_PROP_FRAME_COUNT))
        
        #set root height and width
        self.root.geometry(("%dx%d")%(self.width-20,(self.height + 24)*2))
        
        
    """
    @summary:  call back function for TK file chooser
    """    
    def chooseFile(self):
        if(not self.pause):
            self.togglePause()
            
        chooseFile = tkFileDialog.askopenfile(parent=self.root,mode='r',title='Choose a I420 formatted .avi file')
        
        if file != None:
            self.fileName = chooseFile.name
            self.loadFile()
            self.loadFileCallBack(chooseFile.name)
        
        if file == None:
            self.fileNotProcessedCallBack()
        
        if(self.pause):
            self.togglePause()      
        
    """
    @summary: creates TK menu objects, labels, label for video image
    """
    def setupWidgets(self):
        menubar = Menu(self.root)
        filemenu = Menu(menubar, tearoff=0)
        filemenu.add_command(label="New", command=lambda: self.donothing())
        filemenu.add_command(label="Open", command=lambda: self.chooseFile())
        filemenu.add_command(label="Save", command=lambda: self.donothing())
        filemenu.add_command(label="Save as...", command=lambda: self.donothing())
        filemenu.add_command(label="Close", command=lambda: self.donothing())
        
        filemenu.add_separator()
        
        filemenu.add_command(label="Exit", command=lambda: self.quitCallBack())
        menubar.add_cascade(label="File", menu=filemenu)
        editmenu = Menu(menubar, tearoff=0)
        editmenu.add_command(label="Undo", command=lambda: self.donothing())
        
        helpmenu = Menu(menubar, tearoff=0)
        helpmenu.add_command(label="Help Index", command=lambda: self.donothing())
        helpmenu.add_command(label="About...", command=lambda: self.donothing())
        menubar.add_cascade(label="Help", menu=helpmenu)
        
        self.root.config(menu=menubar)
        
        # label for the video frame
        self.videoLabel = tk.Label(master=self.root)
        self.videoLabel.bind("<Button-1>", lambda e: self.handleVideoClick())
        self.videoLabel.pack()
        
    """
    @summary:    sets the curent frame, allows for seeking in the video playback
    """        
    def goToFrame(self, frameNumber):
        self.video.set(cv.CV_CAP_PROP_POS_FRAMES, frameNumber)
    
        
    """
    @summary:  action handler for clicks to main video panel
    """
    def handleVideoClick(self):
        if(self.playBackFailed):
            self.goToFrame(0)
            self.togglePause()
            
        else:
            self.togglePause()
            
    
    """
    @summary:  toggle pause
    """
    def togglePause(self):
        self.pause = not self.pause
        
        
    """
    @summary:  get the current frame being output by the player
    """
    def getFrame(self):
        currentFrame = self.video.get(cv.CV_CAP_PROP_POS_FRAMES )
        return currentFrame      
        
    """
    @todo:     remove on release?
    @summary:  changes the text of the current frame Label
    """
    def updateCurrentFrameLabel(self):
        self.frameLabel.configure(text='Current Frame: {}'.format(self.getFrame()))
    
    def getWidth(self):
        return self.width
    
    def getHeight(self):
        return self.height
    
    """
    @todo:     remove on release
    @summary:  dummy function for testing, will be removed on release
    """
    def donothing(self):
        print "Do Nothing"
        pass
    
    
if __name__ == '__main__':
    root = tk.Tk()
    root.wm_title("Condensed Image Processing")
    player  = Player(root)
    player.start()
