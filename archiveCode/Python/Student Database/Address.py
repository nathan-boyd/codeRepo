class Address:

    def __init__(self, street, city, state, zipc, country):
        self.street = street
        self.city = city
        self.state = state
        self.zip = zipc
        self.country = country

    def printAddress(self):
        print "Address: " + self.street
        print "         " +  self.city + ", " + self.state + " " + self.zip + " " + self.country 

    def getCity(self):
        return self.city
        
        
        
