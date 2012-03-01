#ifndef ADDRESS_H_EXISTS
#define ADDRESS_H_EXISTS

#include <string>

using namespace std;

class Address{

  protected:

  string sAddress1;                                                   //Self Explanitory
  string sAddress2;
  string sCity;
  string sState;
  string sZip;
  string sCountry;

  public:

  Address();                                                         //empty constructor

  friend ostream& operator<<(ostream& os, Address& c);               //operator overload

  void setAddress1(string lString);                                  //Setters and getters
  string getAddress1();

  void setAddress2(string lString);
  string getAddress2();  
  
  void setCity(string lString);
  string getCity();   
 
  void setState(string lString);
  string getState();  
  
  void setZip(string lString);
  string getZip();   
 
  void setCountry(string lString);
  string getCountry();

};//end class def

#endif
