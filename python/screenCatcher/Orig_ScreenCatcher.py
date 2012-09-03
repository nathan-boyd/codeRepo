import logging
import pyHook
import pythoncom
import win32file, win32api
import time
import os
import sys
from PIL import ImageGrab

from Tkinter import *
from ttk import *

import win32gui, win32con


class ScreenCatcher():
    
    root = Tk()
    setWindow = False
    CheckVar1 = IntVar()
        
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
        
#         print winlist
        
        try:
#             window = window[0]
#             hwnd = window[0]  
            
            # works for word
            window = window[1]
            hwnd = window[0]  
            
        except IndexError:
            message = 'screenShotWindow failed: ' + str(name) + ' application window not found'
            self.logger.info(message)
            return False

        win32gui.ShowWindow(hwnd, win32con.SW_RESTORE)
        
        time.sleep(.5) 
        
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
        
    def initInputHooks(self):
        
        hm = pyHook.HookManager()
        
        hm.MouseAll  = self.onMouseEvent
        hm.KeyDown = self.onKeyboardEvent
        
#         hm.HookMouse()
        hm.HookKeyboard()
        
        # note needed with TK mainloop
        #         pythoncom.PumpMessages() 

    def setWindowToWatch(self):
        self.setWindow = True
   
    def onMouseEvent(self, event):
        
#         if(event.Message == 513):
#             print 'MessageName:',event.MessageName
#             print 'Message:',event.Message
#             print 'Time:',event.Time
#             print 'Window:',event.Window
#         print 'WindowName:',event.WindowName
#         print 'Position:',event.Position
#             print 'Wheel:',event.Wheel
#             print 'Injected:',event.Injected
#             print '---'
#         
#             name = 'firefox'
#             self.screenShotWindow(name)
# 
#         if self.setWindow and event.Message == 513 and event.WindowName != None:
#             print 'WindowName:',event.WindowName
            
        
        # return True to pass the event to other handlers       
        # return False to stop the event from propagating
        return True
    
    def onKeyboardEvent(self, event):

        
#         print 'MessageName:',event.MessageName
#         print 'Message:',event.Message 
#         print 'Time:',event.Time
#         print 'Window:',event.Window
#         print 'WindowName:',event.WindowName2
#         print 'Ascii:', event.Ascii, chr(event.Ascii)`
#         print 'Key:', event.Key
#         print 'KeyID:', event.KeyID
#         print 'ScanCode:', event.ScanCode
#         print 'Extended:', event.Extended
#         print 'Injected:', event.Injected
#         print 'Alt', event.Alt
#         print 'Transition', event.Transition
#         print '---'
    
        if(event.Key == 'Rshift'):
            windowTitle = 'word'
            self.screenShotWindow(windowTitle)
    
        # return True to pass the event to other handlers
        # return False to stop the event from propagating
        return True

    def applyChanges(self, *args):
        
        
        value = self.CheckVar1.get()
        print value
        
        idxs = self.lbox.curselection()
        if len(idxs)==1:
            idx = int(idxs[0])
            self.lbox.see(idx)
            name = self.countrynames[idx]
            message = "Monitoring %s " % name
            if(self.CheckVar1):
                self.sentmsg.set("Monitoring %s " % (message))
            else:
                self.sentmsg.set("Monitoring off")

    def showPopulation(self, *args):
        idxs = self.lbox.curselection()
        if len(idxs)==1:
            self.statusmsg.set("foo")
        self.sentmsg.set('')
     
    def initWidgets(self):
        
        ignoreList = [line.strip() for line in open("IgnoreList.txt", 'r')]
#         print ignoreList
        
        toplist, winlist = [], []
        def enum_cb(hwnd, results):
            if (win32gui.GetWindowText(hwnd) != '' and win32gui.GetWindowText(hwnd) not in ignoreList):
                winlist.append(win32gui.GetWindowText(hwnd))
        win32gui.EnumWindows(enum_cb, toplist)
        
        winlist = tuple(winlist)
        
        #         self.countrycodes = ('ar', 'au', 'be', 'br', 'ca', 'cn', 'dk', 'fi', 'fr', 'gr', 'in', 'it', 'jp', 'mx', 'nl', 'no', 'es', 'se', 'ch')
        #         
        #         self.countrynames = ('Argentina', 'Australia', 'Belgium', 'Brazil', 'Canada', 'China', 'Denmark', \
        #                 'Finland', 'France', 'Greece', 'India', 'Italy', 'Japan', 'Mexico', 'Netherlands', 'Norway', 'Spain', \
        #                 'Sweden', 'Switzerland')
        #         
        #         self.populations = {'ar':41000000, 'au':21179211, 'be':10584534, 'br':185971537, \
        #                 'ca':33148682, 'cn':1323128240, 'dk':5457415, 'fi':5302000, 'fr':64102140, 'gr':11147000, \
        #                 'in':1131043000, 'it':59206382, 'jp':127718000, 'mx':106535000, 'nl':16402414, \
        #                 'no':4738085, 'es':45116894, 'se':9174082, 'ch':7508700}
        
        self.countrycodes = winlist
        self.countrynames = winlist
        self.populations = winlist
        
        
        self.cnames = StringVar(value=self.countrynames)
        
        # Names of the gifts we can send
        self.gifts = { 'card':'Greeting card', 'flowers':'Flowers', 'nastygram':'Nastygram'}

        # State variables
        self.gift = StringVar()
        self.sentmsg = StringVar()
        self.statusmsg = StringVar()
        
        # Create and grid the outer content frame
        c = Frame(self.root, padding=(5, 5, 12, 0))
        c.grid(column=0, row=0, sticky=(N,W,E,S))
        self.root.grid_columnconfigure(0, weight=1)
        self.root.grid_rowconfigure(0,weight=1)
        
        self.lbox = Listbox(c, listvariable=self.cnames, height=5)
        lbl = Label(c, text="Send to country's leader:")
        
        g1 = Checkbutton(c, text = "monitoring on", variable = self.CheckVar1, onvalue = 1, offvalue = 0,)
        send = Button(c, text='Apply', command=self.applyChanges, default='active')
        sentlbl = Label(c, textvariable=self.sentmsg, anchor='center');
        status = Label(c, textvariable=self.statusmsg, anchor=W);
        
        # Grid all the widgets
        self.lbox.grid(column=0, row=0, rowspan=6, sticky=(N,S,E,W))
        lbl.grid(column=1, row=0, padx=10, pady=5)
        g1.grid(column=1, row=1, sticky=W, padx=20)
        send.grid(column=2, row=4, sticky=E)
        sentlbl.grid(column=1, row=5, columnspan=2, sticky=N, pady=5, padx=5)
        status.grid(column=0, row=6, columnspan=2, sticky=(W,E))
        c.grid_columnconfigure(0, weight=1)
        c.grid_rowconfigure(5, weight=1)

        self.lbox.bind('<<ListboxSelect>>', self.showPopulation)
        self.lbox.bind('<Double-1>', self.applyChanges)
        self.root.bind('<Return>', self.applyChanges)
        
        # Colorize alternating lines of the listbox
        for i in range(0,len(self.countrynames),2):
            self.lbox.itemconfigure(i, background='#f0f0ff')
        
        self.gift.set('card')
        self.sentmsg.set('')
        self.statusmsg.set('')
        self.lbox.selection_set(0)
        self.showPopulation()
        
        self.root.mainloop()
        
    def __init__(self):
        
#         self.initLogging()
#         self.initInputHooks()
#         self.initWidgets()
        


if __name__ == '__main__':
    screenCatcher = ScreenCatcher()


    
    
    
    
    
    
    