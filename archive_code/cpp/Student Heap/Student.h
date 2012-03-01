#ifndef STUDENT_H_EXISTS
#define STUDENT_H_EXISTS

#include <string>
#include <iostream>

#include "Date.h"
#include "Address.h"

using namespace std;

class Student{

  private:

    Address HomeAddress;
    Date BirthDate;
    Date GradDate; 

    string sFirstName;                                                       //First Name of the Student                                                  
    string sLastName;                                                        //Last Name of the Student
    string sGPA;                                                             //GPA of the Student
    string sCredits;                                                         //Total credit hours that the student is taking

  public:
    
    Student(string s1,string s2,string s3,string s4,string s5,string s6,     //Constructor that can take 11 items of input string, like from a CSV file
            string s7,string s8,string s9,string s10,string s11);            

    Student();                                                               //Empty constructor

    friend ostream& operator<<(ostream& os, Student& c);                     //<< Operator overloader

    int getAnsci(string sType, int index);                                   //returns the ansci value of whatever type is passed to it

    void setAddress(Address HomeAddress);                                    //Setters and getters.
    Address getAddress();

    void setBirthDate(Date BirthDate);
    Date getBirthDate();

    void setGradDate(Date GradDate);
    Date getGradDate();

    void setFirstName(string sFirstName);
    string getFirstName();

    void setLastName(string sLastName);
    string getLastName();

    void setGPA(string sGPA);
    string getGPA();  
 
    void setCredits(string sCredits);
    string getCredits();   

};//end class def

#endif
