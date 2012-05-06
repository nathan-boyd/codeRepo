#include <string>
#include <iostream>
#include "Date.h"
#include <sstream>
#include <cstdio>
#include <cstring>

using namespace std;

Date::Date(){
}//end constructor

Date::Date(string sUnformatted){

  string month;
  string day;
  string year;

  istringstream ss(sUnformatted);

  Date::sCompleteDate = sUnformatted;

  getline(ss, month, '/');
  getline(ss, day, '/');
  getline(ss, year, '/');

  setMonth(month);
  setDay(day);
  setYear(year);

}//end constructor

ostream& operator<<(ostream& os, Date& date){                                   // operator overloading
  os << "\n" << date.getMonth() << "/" << date.getDay() << "/" << 
     date.getYear() << "\n" << endl;
}// end overload

void Date::setMonth(string sMonth){                                             //setter
  Date::sMonth = sMonth;
}//end setter
string Date::getMonth(){                                                        //getter
  return(Date::sMonth);
}//end getter

void Date::setDay(string sDay){                                                 //setter
  Date::sDay = sDay;
}//end setter
string Date::getDay(){                                                          //getter
  return(Date::sDay);
}//end getter

void Date::setYear(string sYear){                                               //setter
  Date::sYear = sYear;
}//end setter
string Date::getYear(){                                                         //getter
  return(Date::sYear);
}//end getter

string Date::getCompleteDate(){                                                 //setter
  return(Date::sCompleteDate);
}//end getter
