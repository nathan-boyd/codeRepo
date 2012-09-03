#include "Date.h"
#include "Student.h"
#include "Address.h"

#include <iostream>
#include <cctype>
#include <cstdlib>
#include <string>
#include <limits>
#include <ios> 
#include <fstream>
#include <sstream>
#include <list>
#include <vector>

using namespace std;

class StudentInfo{

  private:

  vector<Student> StudentVector;                    // declare a vector of Student objects

  public:

  StudentInfo(){
  }//end constructor

  void ImportFile(){

    ifstream inFile;                                    //Initialize File Stream

    inFile.open("Student_Info.csv");                    //open File

    if (!inFile) {
      cout << "Unable to open file";  
    }//end if
  
    int count = 0;
    while (inFile){                                    

      string temp;
      if (!getline( inFile, temp )){                    // get lines from the file, store them in temp
	break;
      }//end if

      istringstream ss(temp);                           //open a stringstream called ss with the temp string 
      string info[12];                                  //declare an array of 12 strings

      while (ss){                                       //while ss is open 
          
	for (int i = 0; i < 12; i++){

	  string s;      

	  if (!getline(ss, s, ',' )){                   // copy each line from string stream until we reach a , then start a new string
	    break;
	  }//end if

	  info[i] = s;       
	}//end for
      }//end while 
    
      Student newStudent =  Student(info[0],info[1],info[2],info[3],info[4],info[5],info[6],info[7],info[8],info[9],info[10],info[11]);
      StudentVector.push_back(newStudent);

      count++;
    }//end while
  
    inFile.close(); 

    cout << "\n***Import Completed\n";

  }//end method

  Student GetStudent(StudentInfo Heap, int i){
    Student vStudent = StudentVector.at(i);
    return(vStudent);
  }// end method

  void PrintSingle(StudentInfo Heap, int i){ //print the contents of a single student object

      Student lStudent = Heap.GetStudent(Heap, i);

      Date bDate = lStudent.GetBirthDate();
      Date cDate = lStudent.GetCompletion();
      Address address = lStudent.GetAddress();

      string street1 = address.GetStreet1();
      string street2 = address.GetStreet2();
      string city = address.GetCity();
      string state = address.GetState();
      string zip = address.GetZip();
      string country = address.GetCountry();
      string birth = bDate.GetDate();
      string completion = cDate.GetDate();

      
      cout << lStudent.GetFirstName() << " " << lStudent.GetLastName() << endl;
      cout << "DOB " << birth << " Graduation " << completion << endl;
      cout << street1 << "\n" << street2 << "\n" << city << ", " << state << " " << zip << " " << country << "\n" << endl;

  }//end method

  void Print(StudentInfo Heap, string type){ // doesnt need direct access to vector
    
    string* pType = &type;

    cout << "\n***Printing\n\n";
    for(int i = 0; i <50; i++){

      Student lStudent = Heap.GetStudent(Heap, i);

      Date bDate = lStudent.GetBirthDate();
      Date cDate = lStudent.GetCompletion();
      Address address = lStudent.GetAddress();

      string street1 = address.GetStreet1();
      string street2 = address.GetStreet2();
      string city = address.GetCity();
      string state = address.GetState();
      string zip = address.GetZip();
      string country = address.GetCountry();
      string birth = bDate.GetDate();
      string completion = cDate.GetDate();

      if(*pType == "all"){

	cout << lStudent.GetFirstName() << " " << lStudent.GetLastName() << endl;
	cout << "DOB " << birth << " Graduation " << completion << endl;
	cout << street1 << "\n" << street2 << "\n" << city << ", " << state << " " << zip << " " << country << "\n" << endl;

      } else if(*pType == "date"){
      cout << lStudent.GetFirstName() << " " << lStudent.GetLastName() << " DOB " << birth << " Graduation " << completion << " City " << city << " State " 
	   << state << endl;
      } else if(*pType == "last"){

      } //end else
    }//end for
  }//end method


  // needs direct access to vector
  void QuickSort(string type, int left, int right){                           //Left means the lowest index, Right means the highest, important when partitioning

    int iLoc = 0; // location of the Sort chan
    int i = left;                                                              //dont want to overwrite left and right
    int j = right;

    string* pType = &type;                                                    
    int median = StudentVector.at((left + right) / 2).GetAnsci(*pType, iLoc);             // need to pass the value of type parameter to GetAnsci parameter
 
    while (i <= j) {// partition

      while (StudentVector.at(i).GetAnsci(*pType, iLoc) < median){         //nearly identical to my minesweeper clear algorithm only 2 dimensional instead of 4
	i++;
      }//end while

      while (StudentVector.at(j).GetAnsci(*pType, iLoc) > median){
	j--;
      }//end while

      if (i <= j) {//swap                                                       need to work in the [0],[1] char in name 
	swap(StudentVector.at(i),StudentVector.at(j));
	i++;
	j--;
      }//end while
    }//end while
 
    if (left < j){                                                               //repeat via recursion
      QuickSort(type, left, j);
    }//end if

    if (i < right){
      QuickSort(type, i, right);
    }//end if
  }//end method

  void Search(StudentInfo Heap, string value){ // low high == left right

    int iFoundStudent;
    bool bFound = false;

    for (int i = 0; i < 50; i++){
  
      if(StudentVector.at(i).GetLastName() == value){

        cout << "\n******************************************Found " << value << "******************************************" << endl;
	iFoundStudent = i;
	bFound = true;
      }//end if
    }// end for
    
    if(bFound){

      PrintSingle(Heap, iFoundStudent);
    }else{

      cout << "\n******************************************Could not find " << value << "******************************************" << endl;
    }//end if
  }//end method

  void AddStudent(StudentInfo Heap){
    
    string first;
    string last;

    string address1;
    string address2;
    string city;
    string state;
    string zip;
    string country;

    string gpa;
    string credits;

    string dBdate = "12";
    string dCdate = "12";

    string answer;

    cout << "Please enter the first name of the Student you would like to add.\n";                  // need to implement getline
    getline(cin, first);
    cout << "Please enter the last name of the Student you would like to add.\n";
    getline(cin, last);
    cout << "Please enter the students street (apartment, po box etc.. will be entered in next prompt)\n";
    getline(cin, address1);
    cout << "Please enter the students street (apartment number, po box etc) leave blank if necessary\n";
    getline(cin, address2);
    cout << "Please enter the students city\n";
    getline(cin, city);
    cout << "Please enter the students state\n";
    getline(cin, state);
    cout << "Please enter the students zip code\n";
    getline(cin, zip);
    cout << "Please enter the students country\n";
    getline(cin,country);
    cout << "Please enter the students gpa\n";
    getline(cin, gpa);
    cout << "Please enter the students credit hours\n";
    getline(cin, credits);
    cout << "Please enter the students birth date in mm/dd/yyyy format\n";
    getline(cin, dBdate);
    cout << "Please enter the students graduation date in mm/dd/yyyy format\n";
    getline(cin, dCdate);
    cout << "\nAre you ready to save this student to file? Enter 'y' for yes.\n";

    cout << first  << " " << last << endl;
    cout << "DOB " << dBdate << " Graduation " << dCdate << endl;
    cout << address1 << "\n" << address2 << "\n" << city << ", " << state << " " << zip << " " << country << "\n" << endl;

    cin >> answer;

    if(answer == "y"){

      Student AddStudent =  Student(first,last,address1,address2,city,state,zip,country,gpa,credits,dBdate,dCdate);
      StudentVector.push_back(AddStudent);

      string temp;
      stringstream ss;  

      ss << "\n" << first << "," << last << "," << address1 << "," << address2 << "," << city << "," << state << "," << zip << "," << country << "," 
	 << gpa << "," << credits << "," << dBdate << "," << dCdate;

      ofstream myfile;
      myfile.open ("StudentInfo.csv",ios::app);
      myfile << ss.str();
      myfile.close();

      cout << "\n***************Student has been added to the StudentInfo.csv file.***************\n";

    } else {

      cout << "\n***************File has not been saved.***************\n";
 
    }//end if

    // need to implement string checking for some of the integer values

  }//end method

  void Menu(StudentInfo Heap){
    
    string choice;
    bool keepGoing = true;
    bool changes = false;

    while(keepGoing){

      cout << "\n";
      cout << "ooooooooooo.                 .              .o8                                   "<<endl;                               
      cout << "`888'   `Y8b              .o8              888                                    "<<endl;
      cout << " 888      888  .oooo.   .o888oo  .oooo.    888oooo.   .oooo.    .oooo.o  .ooooo.  "<<endl;
      cout << " 888      888 `P  )88b    888   `P  )88b   d88' `88b `P  )88b  d88(   8 d88' `88b "<<endl;
      cout << " 888      888  .oP 888    888    .oP 888   888   888  .oP 888  ` Y88b.  888ooo888 "<<endl;
      cout << " 888     d88' d8(  888    888 . d8(  888   888   888 d8(  888  o.  )88b 888    .o "<<endl;
      cout << "o888bood8P'   `Y888""8o      888  `Y888888o  `Y8bod8P'  8`Y888    8o 8""888P' `Y8bod8   "<<endl;
      cout << "\n";

      cout << "     1) Enter 1 to sort the Database by last name and display the results." << endl;
      cout << "     2) Enter 2 to sort the Datebase by first name and  display the results." << endl;
      cout << "     3) Enter 3 to sort the Database by the students by home city and display the results." << endl;
      cout << "     4) Enter 4 to display all information of all students. Will be sorted according to last sort.\n" << endl;
      cout << "     5) Enter 5 to search for a student." << endl;
      cout << "     6) Enter 6 to add a student to database.\n" << endl;
      cout << "     0) Enter 0 to quit" << endl;

      cout << "\n                      Please enter a number from 1-6.\n";

      getline(cin, choice);

      // determine appropriate input and act accordingly

      if(choice == "1"){//sort by last name and display

        Heap.QuickSort("last",0,49);
	Heap.Print(Heap, "all");                               // need to look at making the output more compact.
	
      } else if(choice == "2"){//sort by first name and display

        Heap.QuickSort("first",0,49);
        Heap.Print(Heap, "all");

      } else if(choice == "3"){// sort by city

        Heap.QuickSort("first",0,49);
        Heap.Print(Heap, "all");

      } else if(choice == "4"){// print student info

        Heap.Print(Heap, "all");

      } else if(choice == "5"){// search for a student

	string value;
	Heap.QuickSort("last", 0, 49);

        cout << "\n What is the last name of the Student you are searching for?\n";
        getline(cin, value);	
	string *pValue = & value;

	Heap.Search(Heap, *pValue );

      } else if(choice == "6"){// add a student

	Heap.AddStudent(Heap);

      } else if (choice == "0"){

	keepGoing = false;
	cout << "Exited successfully\n";

      } else{

	cout << "\n****************** " << choice << " is not valid. Please enter a number from 1-6.******************\n";

      }//end else

    }//end while

    cout << endl;

  }//end method

};//end class    

int main(){
  StudentInfo Heap;
  Heap.ImportFile();  
  Heap.Menu(Heap);

  //  Heap.QuickSort("last",0,49);  
  //  Heap.Search(Heap,"last","M",0,49,0);                      //StudentInfo, search parameter, search string, left, right, location of Search 
  //  Heap.Print(Heap, "all");  

 
  return 0;
}//end method




