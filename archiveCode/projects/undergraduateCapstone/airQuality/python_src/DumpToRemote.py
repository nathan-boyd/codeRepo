from DatabaseInterface import DatabaseInterface

#fill the database with useful information like rownship etc based upon lat lon
class DumpToRemote(DatabaseInterface):
    
    def __init__(self):
        super(DumpToRemote, self).__init__()
        pass
    
    def main(self):
        if self.DEBUG:
            print 'DumpToRemote Main'
            
        remote = self.getCursor('remote')
        local = self.getCursor('local')
        
        for row in local.execute("select * from datapoint"):
#            print row
            gps_time    = str(row.id);
#            gps_date    = str(row.gps_date);
            gps_date    = "0000-00-00"
            latitude    = str(row.string_latitude);
            longitude   = str(row.string_longitude);
            co_ppm      = str(row.int_coppm);
            
            SQL = "insert into datapoint (gps_time, gps_date, string_latitude, string_longitude, int_coppm) values (" 
            SQL += gps_time + ", " + gps_date + ", " + latitude + ", " + longitude + ", " + co_ppm + ");"    
            
            print SQL;
            
            remote.execute(SQL) 
        
    
if __name__ == "__main__":
    testClass = DumpToRemote()
    testClass.main()