 def QuickSort(self, iLeft, iRight, type):
        i = iLeft
        j = iRight
        size = len(self.aStudents)
        median = self.aStudents[(iLeft + iRight)/2].getAscii()                                      
        
        while (i <= j):
            while i < size and self.aStudents[i].getAscii() < median:
                i+=1
            while j < size and self.aStudents[j].getAscii() > median:
                j-=1
            if (i < size and j < size and i <= j):
                self.aStudents[i], self.aStudents[j] = self.aStudents[j], self.aStudents[i]
                i+=1
                j-=1
        if (iLeft < j):
            self.QuickSort(iLeft, j, type);
        if (i < iRight):
            self.QuickSort(i, iRight, type);
