from Address import*
from Date import*

class Student:

    def __init__(self, info):  
        self.info = info     
        self.firstName = info[0]
        self.lastName = info[1]
        self.address = Address(info[2], info[3], info[4], info[5], info[6])
        self.gpa = info[7]
        self.hours = info[8]
        self.bDate = Date(info[9])
        self.cDate = Date(info[10])

    def getInfo(self):
        return self.info

    def getLastName(self):
        return self.lastName

    def getFirstName(self):
        return self.firstName

    def getAddress(self):
        return self.address

    def getGpa(self):
        return self.gpa

    def getHours(self):
        return self.hours

    def getbDate(self):
        return self.bDate

    def getcDate(self):
        return self.cDate

    def getAscii(self, type):
        if type == "last":
            lastName = self.getLastName()
            c = lastName[0]
            a = ord(c)
            return a
        elif type == "first":
            firstName = self.getFirstName()
            c = firstName[0]
            a = ord(c)
            return a
        elif type == "city":
            newAddress = self.getAddress()
            city  = newAddress.getCity()
            c = city[0]
            a = ord(c)
            return a

