#ifndef DATE_H_EXISTS
#define DATE_H_EXISTS

#include <string>

using namespace std;

class Date{

  protected:

  string sMonth;                                        //Self explanitory
  string sDay;               
  string sYear;
  string sCompleteDate;                                 //Complete formatted date mm/dd/yyyy   

  public:

  Date();
  Date(string sUnformatted);                            //Accepts an unformatted string

  friend ostream& operator<<(ostream& os, Date& c);     //overload the << operator

  void setMonth(string Month);
  string getMonth();

  void setDay(string Day);
  string getDay();  
  
  void setYear(string Year);
  string getYear();   

  string getCompleteDate();

};//end class def

#endif
