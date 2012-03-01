#ifndef DATABASE_H_EXISTS
#define DATABASE_H_EXISTS

#include <string>
#include <vector>
#include "Student.h"
#include "Database.h"

class Database{

  private:
    
    Student* aStudent;                                         //Array of students on the heap
    int iNumberofStudents;                                     //Number of students that have been added to the heap so far
    string FileName;                                           //File Name 
    int iTotalStudents;

  public:

    Database();                                                //Default
    Database(string sFileName);                        
    ~Database();                                               //destructor

    void addStudentToArray(Student lStudent);                  //Adds a student to the array
    Student getStudentOffArray(int i);                         //Returns a single Student off the Array

    friend ostream& operator<<(ostream& os, Database& c);      //Overload the << operator 

    void ImportFile();                                         //Imports a .CSV file
    void QuickSort(string type, int iLeft, int iRight, int index);        //Utilizes the quicksort algorithim to sort the database array via the "type"
    void AddStudent();                                         //Adds a student to the Array
    void Search(string sType, string sValue);                  //Searches the database for the string
    bool CheckSort(string type, int index);

    void SetFileName(string Filename);                         //setter 
    string GetFileName();                                      //getter
    int getTotal();

};//end class def

#endif
