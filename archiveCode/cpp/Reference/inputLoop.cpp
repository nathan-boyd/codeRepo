//input loop
#include <iostream>

using namespace std;

//cin returns 0 at end of file

main(){
  int count = 0;
  int total = 0;
  int grade = 0;
  double average = 0;

  cout << "enter a grade: (ctl-D to exit)";
  while (cin >> grade){
    count++;
    total += grade;
    cout << "enter a grade: ";
  } // end while

  average = total / count;
  cout << "average: "  << average;
} // end main

