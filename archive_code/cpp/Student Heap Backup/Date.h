#ifndef DATE_H
#define DATE_H
#include <string>

class Date{

 private:
  std::string sDate;
  std::string sMonth;
  std::string sDay;
  std::string sYear;

 public:

  Date(){
  }//end method

  Date(std::string sDate){

    Date::sDate = sDate;
  }//end method

  Date(std::string sMonth, std::string sDay, std::string sYear){
    
    Date::sMonth = sMonth;
    Date::sDay = sDay;
    Date::sYear = sYear;
  }//end method

  std::string GetDate(){
    return sDate;
  }//end method

  std::string GetMonth(){ 
    return sMonth;
  }//end method

  std::string GetDay(){ 
    return sDay;
  }//end method

  std::string GetYear(){ 
    return sYear; 
  }//end method

};//end class
#endif
