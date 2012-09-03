//streamManipulators.cpp
#include <iostream>
//#include <iomanip>

using namespace std;

int main(){
  //change the the base of an integer
  //uses oct, hex, or dec
  int n = 15;
  cout << hex << n << endl;

  //managing precision
  double pi = 3.1415927;
  cout.precision(4);
  cout << pi << endl;

  //managing width;
  //used in loops to create tabular output
  cout.width(6);
  cout << "Bill";
  cout.width(10);
  cout << "Gates" << endl;

  //use flags to modify output
  cout.setf( ios::left );
  cout.width(6);
  cout << "Bill";
  cout.width(10);
  cout << "Gates" << endl;



  return 0;
} // end main
