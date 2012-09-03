from Student import*
from sys import*
import time
import csv

class Database():
    
    def __init__(self, fileName):
        self.aStudents = []
        self.fileName = fileName
        print "\n***Importing the file " + fileName
        self.progress()
        self.importFile()

    def importFile(self):       
        with open(self.fileName, 'rb') as f:
            reader = csv.reader(f)
            for row in reader:
                newStudent = Student(row)
                self.aStudents.append(newStudent)
        self.ArraySize = len(self.aStudents)

    def printDatabase(self):
        print "Print Database"
        for index in range(len(self.aStudents)):
            print ""
            newAddress = self.aStudents[index].getAddress()
            bDate =  self.aStudents[index].getbDate()
            cDate = self.aStudents[index].getcDate()
            print self.aStudents[index].getFirstName() + " " + self.aStudents[index].getLastName()
            print "Hours: " + self.aStudents[index].getHours() + " GPA: " + self.aStudents[index].getGpa()
            print "Date of Birth: " + bDate.getDate()
            print "Date of Grad: " + cDate.getDate()
            newAddress.printAddress() 
            time.sleep(.05)

    def Menu(self):

        keepGoing = True
        sortType = "unsorted"

        while keepGoing:

            print "\n"
            print "ooooooooooo.                 .              .o8                                         " 
            print "`888'   `Y8b              .o8              888                                          " 
            print " 888      888  .oooo.   .o888oo  .oooo.    888oooo.    .oooo.    .oooo.o  .ooooo.       " 
            print " 888      888 `P  )88b    888   `P  )88b   d88' `88b  `P  )88b  d88(   8 d88' `88b      " 
            print " 888      888  .oP 888    888    .oP 888   888   888   .oP 888  ` Y88b.  888ooo888      "
            print " 888     d88' d8(  888    888 . d8(  888   888   888  d8(  888  o.  )88b 888    .o      " 
            print "o888bood8P'   `Y888""8o      888  `Y888888o  `Y8bod8P'   8`Y888   8o 8""888P '8`Y8bod8  " 
            print "\n"
            print "                                    in Python "
            print "                               Robert Nathan Boyd\n\n"

            print "           1) Enter 1 to display the database." 
            print "           2) Enter 2 to sort the Database by last name." 
            print "           3) Enter 3 to sort the Datebase by first name."
            print "           4) Enter 4 to sort the Database by the students by home city."  
            print "\n           0) Enter 0 to quit" 

            print "\nPlease enter a number from 1-6.\n"

            choice = raw_input("Choice: ")

            if choice == "1":
                print "Displaying Database sorted by " + sortType
                time.sleep(1.5)
                self.printDatabase()
            elif choice == "2":
                sortType = "last name"
                print "Sorting Database by last name: " 
                self.progress()
                print " Database successfully sorted by last name"
                self.Sort(0, self.ArraySize-1, "last")
            elif choice == "3":
                sortType = "first name"
                print "Sorting Database by first name: " 
                self.progress()
                print " Database successfully sorted by first name"
                self.Sort(0, self.ArraySize-1, "first")
            elif choice == "4":
                sortType = "city"
                print "Sorting Database by home city: " 
                self.progress()
                print " Database successfully sorted by home city"
                self.Sort(0, self.ArraySize-1, "city")
            elif choice == "0":
                print "Exiting"
                self.progress()
                print ""
                quit()
                
    def progress(self):
        percent = 0
        while percent < 100:
            time.sleep(.2)
            percent += 10
            stdout.write("\r%2d%%" % percent)
            stdout.flush()
        
    def Sort(self, iLeft, iRight, type):
        i = iLeft
        j = iRight
        size = len(self.aStudents)
        median = self.aStudents[(iLeft + iRight)/2].getAscii(type)                                      
        
        while (i <= j):
            while i < size and self.aStudents[i].getAscii(type) < median:
                i+=1
            while j < size and self.aStudents[j].getAscii(type) > median:
                j-=1
            if (i < size and j < size and i <= j):
                self.aStudents[i], self.aStudents[j] = self.aStudents[j], self.aStudents[i]
                i+=1
                j-=1
        if (iLeft < j):
            self.Sort(iLeft, j, type);
        if (i < iRight):
            self.Sort(i, iRight, type);
