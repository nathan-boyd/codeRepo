import pyodbc;

#database class
class databaseInterface():
    
    def __init__(self):
        pass
    
    #@precondition: database type passed
    #@postcondition: pointer to database returned
    def getCursor(self, dataBase):
        
#        cnxn = pyodbc.connect('DSN=undergradODBC;PWD=@liga+or', autocommit=True)
#        return cnxn.cursor()    
        try:
            if dataBase == "working":
                cnxn = pyodbc.connect('DSN=undergradODBC;PWD=@liga+or', autocommit=True)
            elif dataBase == "information":
                cnxn = pyodbc.connect('DSN=info_undergradODBC;PWD=@liga+or', autocommit=True)
            return cnxn.cursor()
        except:
            print("connection failed")
      
            
    #@precondition: table doesn't exist
    #@postcondition: table exists
    def createTable(self, dataBaseName, tableName):
        
        cursor = self.getCursor("working")
    
        if self.tableExists(dataBaseName, tableName) == False:
     
            createTable = "CREATE TABLE " + tableName
            createTable += """ (`idnew_table` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`idnew_table`)); """
    
            cursor.execute(createTable)
    
    #@precondition: table exists
    #@postcondition: returns true
    def tableExists(self, dataBaseName, tableName):
        
        cursor = self.getCursor("information")
        
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
        cursor = self.getCursor("working")
        SQL = "insert into datapoint (gps_time, gps_date, string_latitude, string_longitude, int_coppm) values (" 
        SQL += gps_time + ", " + gps_date + ", " + latitude + ", " + longitude + ", " + co_ppm + ");"    
        cursor.execute(SQL)   
    
    #@precondition: row doesn't exist
    #@postcondition: row exists      
    def insertRow(self, tableName, varName, inputString):
        print("inserting row")       
        cursor = self.getCursor("working")
#        cursor.execute("insert into 'datapoint' VALUES (?) (?)", varName, inputString);
        SQL = "insert into " + tableName + "(" + varName + ")" + " values (?)"
        cursor.execute(SQL, inputString);
      
    def main(self):
        print("database main")
        self.insertDataPoint("123", "0000-00-00", "123", "456", "99")
              
#        if self.tableExists("undergradresearch", "testtable"):
#            print("table exists")
#        else:
#            print("table does not exist")
#        
#        self.insertRow("testTable", "testValue", "999999")
        
if __name__ == "__main__":
    testClass = databaseInterface()
    testClass.main()
    
    
    
