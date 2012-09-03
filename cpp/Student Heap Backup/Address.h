#ifndef ADDRESS_H
#define ADDRESS_H
#include <string>

class Address{
 private:
  std::string iStreet1;
  std::string iStreet2;
  std::string iZip;
  std::string sCity;
  std::string sState;
  std::string sCountry; 

 public:

  Address(){} 

  Address(std::string lAddress){

  }//end method

  Address(std::string lStreet1, std::string lStreet2, std::string lCity, std::string lState,std::string lZip, std::string lCountry){
    SetAddress(lStreet1, lStreet2, lCity, lState, lZip, lCountry);
  }//end method

  void SetAddress(std::string lStreet1, std::string lStreet2, std::string lCity, std::string lState, std::string lZip, std::string lCountry){
    iStreet1 = lStreet1;
    iStreet2 = lStreet2;
    iZip = lZip;
    sCity = lCity;
    sState = lState;
    sCountry = lCountry;
  }//end method

  std::string GetStreet1(){
    return iStreet1;
  }//end method

  std::string GetStreet2(){
    return iStreet2;
  }//end method

  std::string GetZip(){
    return iZip;
  }//end method

  std::string GetCity(){
    return sCity;
  }//end method

  std::string GetState(){
    return sState;
  }//end method

  std::string GetCountry(){
    return sCountry;
  }//end method
};//end class

#endif
