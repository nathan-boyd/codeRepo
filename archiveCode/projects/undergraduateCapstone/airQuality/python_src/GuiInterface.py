import DatabaseInterface
from ArduinoInterface import *
from FillData import *
from DumpToRemote import *
from Tkinter import *
import tkMessageBox

from googlemaps import GoogleMaps

class guiInterface:
        
    def startSensor(self):
        dbInt = DatabaseInterface()
        testInterface = ArduinoInterface()
        testInterface.main(dbInt)
        
    def fillLocality(self):
        testClass = FillData()
        testClass.main()
        
    def dumpToRemote(self):
        testClass = DumpToRemote()
        testClass.main()
        
    def main(self):
        
        root = Tk()

        w = Label(root, text="Air Quality Interface")
        w.pack()
        
        btn_startSensor = Button(root, text="start sensor", command=lambda: self.startSensor())
        btn_startSensor.pack()
        
        btn_getLocal = Button(root, text="fill locality data", command=lambda: self.fillLocality())
        btn_getLocal.pack()
        
        btn_dump = Button(root, text="dump to remote", command=lambda: self.dumpToRemote())
        btn_dump.pack()
        
        btn_exit = Button(root, text="quit", command=lambda: root.destroy())
        btn_exit.pack()
        
        root.mainloop()
    
if __name__ == "__main__":
    testClass = guiInterface()
    testClass.main()