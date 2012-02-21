import serial
import time
import Error
import databaseInterface

class arduinoInterface():
    
    def __init__(self):
        pass
    
    def sendData(self, dbInt):
        
        arduino = self.getConnection()
        
        while True:
            line = self.getData(arduino)
            
            #convert from binary to utf encoding
            line = line.decode("utf-8")
            
            #convert to string
            line = str(line)
            
            #get rid of newline chars
            line = line.strip()
            
            #get rid of whitespace
            line = line.replace(' ', '')
            
            print(line)
            
            #convert csv to list object
            line = line.split(",")
                  
            if(line[5] == "MEASUREMENT"):
                print ("inserting datapoint " , end="")
                dbInt.insertDataPoint(line[0], line[1], line[2], line[3], line[6])
                

            
    def getData(self, arduino):
        return arduino.readline()
        
    def printSerial(self):
        arduino = self.getConnection()
            
        while 1:
            print(arduino.readline())
            
    def getConnection(self):
        try:
            print("MSG: Connecting to arduino")
            arduino = serial.Serial('COM3', 9600)
            # wait for the arduino to reset
            time.sleep(1)
            return arduino
        except Error.arduinoError as e:
            print (e.value)
              
        
    def main(self, dbInt):
#        self.printSerial()
        self.sendData(dbInt)
        
            
if __name__ == "__main__":
    
    dbInt = databaseInterface.databaseInterface()
    
    testInterface = arduinoInterface()
    testInterface.main(dbInt)
    



