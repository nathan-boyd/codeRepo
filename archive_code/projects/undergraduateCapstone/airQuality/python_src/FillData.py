from DatabaseInterface import DatabaseInterface
from googlemaps import GoogleMaps;

#fill the database with useful information like rownship etc based upon lat lon
class FillData(DatabaseInterface):
    
    def __init__(self):
        super(FillData, self).__init__()
        pass
    
    def checkTownships(self, destination, gmaps, updateCursor, row_id):
        
        if self.DEBUG:
            print 'checking township'
        
#        cursor = self.getCursor(self.WORKING_DB)
#        updateCursor = self.getCursor(self.WORKING_DB)
#        
#        cursor.execute("select * from datapoint")
#        
#        gmaps = GoogleMaps('AIzaSyAS9UBIw7rIJ7XcpBrxQd0iYNEppzyWJ_Q&sensor=true')
#        
#        for row in cursor.execute("select id, string_latitude, string_longitude from datapoint WHERE string_township = \"NULL\""):
#            update township data if it exists

        local = gmaps.local_search('school district ' + destination)
    
        try:
            township = local['responseData']['results'][0]['titleNoFormatting']
            
            update = "UPDATE datapoint SET string_township = " + "\"" + township + "\"" + " WHERE id ="
            update += str(row_id) + ";"
            updateCursor.execute(update)
            
        except:
            update = "UPDATE datapoint SET string_township = \"NO DATA\""
            update += " WHERE id =" + str(row_id) + ";"
            updateCursor.execute(update) 
      
    def checkAddresses(self):  
               
        if self.DEBUG:
            print 'checking addresses'
            
        cursor = self.getCursor(self.WORKING_DB)
        updateCursor = self.getCursor(self.WORKING_DB)
        
        gmaps = GoogleMaps('AIzaSyAS9UBIw7rIJ7XcpBrxQd0iYNEppzyWJ_Q&sensor=true')
                  
        for row in cursor.execute("select id, string_latitude, string_longitude from datapoint WHERE string_address = \"NULL\""):
            
            row_id = row.id;
            lat = row.string_latitude;
            lon = row.string_longitude;
            
            destination = gmaps.latlng_to_address(lat, lon)
            
            
            if self.DEBUG:
                print(destination)
            
            if destination != "":
                update = "UPDATE datapoint SET string_address = " + "\"" + destination + "\""
                update += " WHERE id =" + str(row_id) + ";"
              
                if self.DEBUG:
                    print update;
                    
                updateCursor.execute(update)  
                
                self.checkTownships(destination, gmaps, updateCursor, row_id); 
                
            else:
                update = "UPDATE datapoint SET string_address = \"NO DATA\""
                update += " WHERE id =" + str(row_id) + ";"
                updateCursor.execute(update)  
                
                update = "UPDATE datapoint SET string_township = \"NO DATA\""
                update += " WHERE id =" + str(row_id) + ";"
                updateCursor.execute(update)  
                
                
                  
    def main(self):
        if self.DEBUG:
            print 'FillData main'
        self.checkAddresses();

    
if __name__ == "__main__":
    testClass = FillData()
    testClass.main()
    