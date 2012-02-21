import pyodbc;
import csv;
import random;
import databaseInterface;

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
    
    cursor = getCursor("information")
    
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

    
#    print("test print")
#    
#    cursor = getCursor("working")   
#    
#    inputString = "GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47";
#    
#    insertRow("datapoint", "expedition_name", "expedition alpha")
#    
#    reader = csv.reader([inputString]);
#    
#    #load the input string into a list
#    for r in reader:
#        gpsData = r;
#        
#    #print(r);
#    
#    time = ""
#    lat = "";
#    lon = "";
#    direction = ["N", "S", "E", "W"];
#    
#    #append 6 random ints onto time
#    for x in range(0, 6):
#        time += str(random.randint(0, 9))
#    
#    #append 4 random ints a . then 4 more random ints
#    for x in range(0, 8):
#        if(len(lat) != 4):
#            lat += str(random.randint(0, 9));
#            lon += str(random.randint(0, 9));
#        elif(len(lat) == 4):
#            lat += ".";
#            lon += ".";
#            
#    rand = random.randint(0, 3);
#    lat += direction[rand];
#    rand = random.randint(0, 3);
#    lon += direction[rand];
#            
#    outputString = time + lat + lon;
            
#    createTable("undergradresearch", "new_table")
       

    
    ##Select * from 
    #cursor.execute("select * from actor")
    #row = cursor.fetchone()
    #if row:
    #    print(row)
        
    ##The fetchone function returns None when all rows have been retrieved. 
    #while True:
    #    
    #    row = cursor.fetchone()
    #    
    #    if row:
    #        print(row)
    #    else:
    #        break
    
    #T#he fetchall function returns all remaining rows in a list. If there are no rows, an empty list is returned.
    #cursor.execute("select * from actor")
    #rows = cursor.fetchall()
    #for row in rows:
    #    print (row)
    
    ##If you are going to process the rows one at a time, you can use the cursor itself as an interator: 
    #cursor.execute("select * from actor")
    #for row in cursor:
    #    print (row)   

if __name__ == "__main__":
    main()
