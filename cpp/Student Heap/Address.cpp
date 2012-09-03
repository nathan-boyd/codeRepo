#include <string>
#include <iostream>
#include "Address.h"

using namespace std;

Address::Address(){
}//end constructor

ostream& operator<<(ostream& os, Address& address){                               //overloading the << operatoro to print out a block of informatio
  os << "\n" << address.getAddress1() << "\n" << address.getAddress2() << "\n"    //and enable cout << Student
     << address.getCity() << ", " << address.getState() << " " << 
     address.getZip() << "\n" << address.getCountry() << "\n" << endl;
}//end overload

void Address::setAddress1(string lString){     //setter
  Address::sAddress1 = lString;
}//end setter
string Address::getAddress1(){                 //getter
  return(Address::sAddress1);
}//end getter

void Address::setAddress2(string lString){     //setter
  Address::sAddress2 = lString;
}//end setter
string Address::getAddress2(){                 //getter
  return(Address::sAddress2);
}//end getter
  
void Address::setCity(string lString){         //setter
  Address::sCity = lString;
}//end setter
string Address::getCity(){                     //getter
  return(Address::sCity);
}//end getter
 
void Address::setState(string lString){        //setter
  Address::sState = lString;
}//end setter
string Address::getState(){                    //getter
  return(Address::sState);
}//end getter
  
void Address::setZip(string lString){          //setter
  Address::sZip = lString;
}//end setter
string Address::getZip(){                      //getter
  return(Address::sZip);
}//end getter

void Address::setCountry(string lString){      //setter
  Address::sCountry = lString;
}//end setter
string Address::getCountry(){                  //getter
  return(Address::sCountry);
}//end getter
