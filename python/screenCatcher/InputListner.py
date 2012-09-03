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
