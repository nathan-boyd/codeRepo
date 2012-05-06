import pyodbc;
import csv;
import random;
import DatabaseInterface;

def getCursor(dataBase):
    
    try:
        if dataBase == "working":      
            cnxn = pyodbc.connect('DSN=undergradODBC;PWD=@liga+or', autocommit=True)
        elif dataBase == "information":
            cnxn = pyodbc.connect('DSN=info_undergradODBC;PWD=@liga+or', autocommit=True)
        return cnxn.cursor()
    except:
        print("connection failed")

#@precondition: table doesntExist
#@postcondition: table exists
def createTable(dataBaseName, tableName):
    
    cursor = getCursor("working")

    if tableExists(dataBaseName, tableName) == False:
 
        createTable = "CREATE TABLE " + tableName
        createTable += """ (`idnew_table` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`idnew_table`)); """

        cursor.execute(createTable)
        
def insertDataPoint(gps_time, latitude, longitude, co_ppm):
    cursor = getCursor("working")
    SQL = "insert into datapoint (gps_time, string_latitude, string_longitude, int_coppm) values (" 
    SQL += gps_time + ", " + latitude + ", " + longitude + ", " + co_ppm + ");"    
#    cursor.execute(SQL)   
    print(SQL)
        
def insertRow(tableName, varName, inputString):
    cursor = getCursor("working")
    #THIS WORKS    SQL = "insert into datapoint (" + varName + ") values (" + inputString + ");"    
    SQL = "insert into " + tableName + " (" + varName + ") values (" + inputString + ");"    
    cursor.execute(SQL)   

#@precondition: table exists
#@postcondition: returns true
def tableExists(dataBaseName, tableName):
    
    cursor = getCursor("working")
    
    checkTable = """
                        SELECT table_name FROM 
                        information_schema.tables 
                        WHERE table_schema = (?) 
                        AND 
                        table_name = (?)
                    """
    
    #query the infformation schema to check if tableName exists
    cursor.execute(checkTable, dataBaseName, tableName);
    
    row = cursor.fetchone()
    
    try:
        if len(row) >= 1:
            return True
    except:
        return False

def main():
    print("test data main")
#    insertRow("datapoint", "int_coppm", "99")
    insertDataPoint("123", "123", "456", "99")


if __name__ == "__main__":
    main()
