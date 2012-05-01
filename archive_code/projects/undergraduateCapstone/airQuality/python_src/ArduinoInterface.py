import serial
import time
import Error
import DatabaseInterface

class ArduinoInterface():
    
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
            
            #get rid of colon char
            line = line.replace(':', '')
            
            #convert csv to list object
            ar_line = line.split(",")  
           
            try:
                
                #adjust time for EST
                ar_line[3] = int(ar_line[3])
                ar_line[3] = ar_line[3] - 40000
                ar_line[3] = str(ar_line[3]) 
                
                #get rid of / char
                ar_line[3] = ar_line[3].replace('/', '')
                
                #zeroing
                
                
            except IndexError, e:
                pass
                  
            if(ar_line[1] == "MEASUREMENT"):
                
                print ("inserting datapoint " + str(ar_line) )
                
                dbInt.insertDataPoint(ar_line[3], ar_line[2], ar_line[4], ar_line[5], ar_line[7])
            else:
                print(ar_line)

            
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
    
    dbInt = DatabaseInterface.DatabaseInterface()
    
    testInterface = ArduinoInterface()
    testInterface.main(dbInt)
    



