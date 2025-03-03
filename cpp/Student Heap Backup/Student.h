#ifndef STUDENT_H
#define STUDENT_H

#include <string>
#include <iostream>
#include "Date.h"
#include "Address.h"

class Student{

 private:

  int iLoc;
  std::string sFirstName;
  std::string sLastName;
  std::string sGpa;
  std::string iCreditHours;
  Address aAddress;
  Date dCompletion;
  Date dBirth;

 public:

  Student(){}

  Student(std::string lFirstName, std::string lLastName, std::string address1, std::string address2, std::string city, std::string state, 
          std::string zip, std::string country, std::string bDate, std::string cDate, std::string gpa, std::string credits){

    sFirstName = lFirstName; 
    sLastName = lLastName;
    sGpa = gpa;
    iCreditHours = credits;
    
    Address newAddress(address1, address2, city, state, zip, country);
    aAddress = newAddress;
    Date newDate(bDate);
    dBirth = newDate;
    Date newDate2(cDate);
    dCompletion = newDate2;
  }//end method

  int GetAnsci(std::string type, int iLoc){/// return the ANSCI value of a character, at location i, of the 
                 
    if(type=="last"){
      char c = sLastName.at(iLoc);
      int Ansci= c;
      return(Ansci);
    } else if(type=="first"){
      char c = sFirstName.at(iLoc);
      int Ansci= c;
      return(Ansci);
    } else if(type=="city"){
      std::string city = aAddress.GetCity();
      char c = city.at(iLoc);
      int Ansci= c;
      return(Ansci);
    } else if(type=="state"){
      std::string state = aAddress.GetState();
      char c = state.at(iLoc);
      int Ansci= c;
      return(Ansci);
    } 
    else return 0;

  }//end method

  std::string GetFirstName(){
    return sFirstName;
  }//end method

  std::string GetLastName(){
    return sLastName;
  }//end method

  std::string GetGpa(){
    return sGpa;
  }//end method

  std::string GetCreditHours(){
    return iCreditHours;
  }//end method

  Address GetAddress(){
    return aAddress;
  }//end method

  Date GetBirthDate(){
    return dBirth;
  }//end method

  Date GetCompletion(){
    return dCompletion;
  }//end method

};//end class

#endif
