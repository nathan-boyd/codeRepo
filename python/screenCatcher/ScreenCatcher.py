from PIL import ImageGrab
import time, logging, os, sys, socket, win32file, win32api, win32gui, win32con

class ScreenCatcher():
        
    def saveImage(self, image, name):
        
        saveDirectory = str(name) + "ScreenShot"
        
        if not os.path.exists(saveDirectory):
            os.mkdir(saveDirectory)    
        
        count = 0
        for f in os.listdir(saveDirectory):
            if os.path.isfile(os.path.join(saveDirectory, f)):
                count += 1
                
        fileName = saveDirectory + '/' + saveDirectory + str(count) + '.png'
        
        image.save(fileName)
        
        try:
            with open(fileName): 
                message = 'screen shot saved as: ' + fileName
                self.logger.info(message)
                return True
        except IOError:
            message = 'saveImage: failed'
            self.logger.info(message)
            return False
    
    def screenShotWindow(self, name):
        
        message = 'taking screen shot of ' + str(name)
        self.logger.info(message)
        
        toplist, winlist = [], []
        def enum_cb(hwnd, results):
            winlist.append((hwnd, win32gui.GetWindowText(hwnd)))
        win32gui.EnumWindows(enum_cb, toplist)

        window = [(hwnd, title) for hwnd, title in winlist if name in title.lower()]
        
        
        print window
        
#         print winlist
        
        try:
            window = window[0]
            hwnd = window[0]  
            
#             # works for word
#             window = window[1]
#             hwnd = window[0]  
            
        except IndexError:
            message = 'screenShotWindow failed: ' + str(name) + ' application window not found'
            self.logger.info(message)
            return False

        win32gui.ShowWindow(hwnd, win32con.SW_RESTORE)
        
        time.sleep(1) 
        
        win32gui.MoveWindow(hwnd, 100, 100, 1000, 600, True)
        
        time.sleep(.5) 
        
        # take and save screen shot  
        bbox = win32gui.GetWindowRect(hwnd)
        img = ImageGrab.grab(bbox) 
        
        self.saveImage(img, name)
        
        win32gui.ShowWindow(hwnd, win32con.SW_MINIMIZE)
  
    def initLogging(self):
        
        print "if there is a window with firefox in the tiel then it will take focus, so .. if you are looking at an explorer window it will steal focus"
    
        # create logger
        self.logger = logging.getLogger('Screen Catcher')
        self.logger.setLevel(logging.DEBUG)
        
        # create console handler and set level to debug
        ch = logging.StreamHandler()
        ch.setLevel(logging.DEBUG)
        
        # create formatter
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        
        # add formatter to ch
        ch.setFormatter(formatter)
        
        # add ch to logger
        self.logger.addHandler(ch)
        
        # 'application' code
        #         self.logger.debug('debug message TEST')
        #         self.logger.info('info message TEST')
        #         self.logger.warn('warn message TEST')
        #         self.logger.error('error message TEST')
        #         self.logger.critical('critical message TEST')
        
    
    def startListening(self):
                
        s = socket.socket()         # Create a socket object
        host = socket.gethostname() # Get local machine name
        port = 12345                # Reserve a port for your service.
        
        s.connect((host, port))
        
        while True:
            print s.recv(1024)
        
        s.close                     # Close the socket when done
        
    def __init__(self):

#         self.initLogging()
#         self.screenShotWindow("firefox")
        
        time.sleep(10)

        self.startListening()

        pass

if __name__ == '__main__':
    screenCatcher = ScreenCatcher()


    
    
    
    
    
    
    