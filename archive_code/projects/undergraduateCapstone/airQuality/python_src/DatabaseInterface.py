import pyodbc;
import random;

#database class
class DatabaseInterface(object):
    
    WORKING_DB = 'local'
    DEBUG = False
    
    def __init__(self):
        super(DatabaseInterface, self).__init__()
    
    #@precondition: database type passed
    #@postcondition: pointer to database returned
    def getCursor(self, dataBase):
          
        try:
            if dataBase == "remote":
                cnxn = pyodbc.connect('DSN=AirqualRemote;PWD=srhoakM4IuB5', autocommit=True)
            elif dataBase == "local":
                cnxn = pyodbc.connect('DSN=AirqualLocal;PWD=', autocommit=True)
            return cnxn.cursor()
        except:
            print("connection failed")
      
            
    #@precondition: table doesn't exist
    #@postcondition: table exists
    def createTable(self, dataBaseName, tableName):
        
        cursor = self.getCursor(self.WORKING_DB)
    
        if self.tableExists(dataBaseName, tableName) == False:
     
            createTable = "CREATE TABLE " + tableName
            createTable += """ (`idnew_table` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`idnew_table`)); """
    
            cursor.execute(createTable)
    
    #@precondition: table exists
    #@postcondition: returns true
    def tableExists(self, dataBaseName, tableName):
        
        cursor = self.getCursor(self.WORKING_DB)
        
        checkTable = """
                            SELECT table_name FROM 
                            information_schema.tables 
                            WHERE table_schema = (?) 
                            AND 
                            table_name = (?)
                        """
    
        #query the information schema to check if tableName exists
        cursor.execute(checkTable, dataBaseName, tableName);
        
        row = cursor.fetchone()
        
        try:
            if len(row) >= 1:
                return True
        except:
            return False

    #@precondition: row doesn't exist
    #@postcondition: row exists 
    def insertDataPoint(self, gps_time, gps_date, latitude, longitude, co_ppm):
            
        cursor = self.getCursor(self.WORKING_DB)
        SQL = "insert into datapoint (gps_time, gps_date, string_latitude, string_longitude, int_coppm) values (" 
        SQL += gps_time + ", " + gps_date + ", " + latitude + ", " + longitude + ", " + co_ppm + ");"  
        
        cursor.execute(SQL)   
    
    #@precondition: row doesn't exist
    #@postcondition: row exists      
    def insertRow(self, tableName, varName, inputString):
        if self.DEBUG:
            print("inserting row")       
        cursor = self.getCursor(self.WORKING_DB)
        SQL = "insert into " + tableName + "(" + varName + ")" + " values (?)"
        cursor.execute(SQL, inputString);
      
    def main(self):
        
        if self.DEBUG:
            print("database main")
            
        random.seed()

        lat = str(random.randint(-90,90))
        lon = str(random.randint(-180,180))  
        co = str(random.randint(0,500))  
        
        self.insertDataPoint("123", "2012-04-01", lat, lon, co)
        
if __name__ == "__main__":
    testClass = DatabaseInterface()
    for index in range(5):
        testClass.main()
    
    
    
