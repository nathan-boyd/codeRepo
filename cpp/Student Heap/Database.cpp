#include <string>
#include <iostream>
#include <cstdio>
#include <cstring>
#include <fstream>
#include <sstream>

#include "Address.h"
#include "Date.h"
#include "Student.h"
#include "Database.h"

using namespace std;

Database::Database(){}

Database::Database(string sFileName){

  // accepts a string then opens a file, if the file exists, 
  // coresponding to the string's value. also counts the lines
  // in the file and initializes an array with that many
  // objects.

  Database::SetFileName(sFileName);

  string line;
  int c = 0;
  ifstream inFile;
  inFile.open(sFileName.c_str(), ios::in | ios::binary);   //opens the file "sFileName"

  while(!inFile.eof()) {                                   //counts the lines in the file
    getline (inFile, line);
    c++;
  }//end while
  
  inFile.close();
  
  Database::iTotalStudents = c-2;
  Database::iNumberofStudents = 0; 
  Database::aStudent = new Student[c];                     //makes the Heap array size equal to lines in file
  Database::ImportFile();     

}//end constructor

Database::~Database(){                                     //default constructor 
  //delete[] aStudent;
}//end destructor

void Database::SetFileName(string sFileName){              //setter
  Database::FileName = sFileName;
}//end setter

string Database::GetFileName(){                            //getter
  return Database::FileName;
}//end getter

void Database::addStudentToArray(Student lStudent){        //This method, when passed a student, will add that student to the heap array
  Database::aStudent[iNumberofStudents] = lStudent;
  Database::iNumberofStudents+=1;
}//end setter

Student Database::getStudentOffArray(int i){               //returns a copy of the student at the parameter index
  Student lStudent = Database::aStudent[i];
  return lStudent;
}//end getter

void Database::ImportFile(){                               //imports the file which was set by the constructor call

  string temp;
  string info[11];
  ifstream inFile;
  string sFileName = Database::GetFileName();

  inFile.open(sFileName.c_str(),ios::in | ios::binary);    //open a file stream

  if(!inFile){
    cout << "Unable to open " << sFileName;                //trivial error handling
    return;
  }//end if

  while(inFile){                                           //Boundary functionality to keep array in bounds of the file size
    if(!getline(inFile, temp)){                            //Important to note that this is a nested while loop
      break;
    }//end if

    stringstream ss(temp);                                 //copy the line "temp" into the string stream

    while(ss){                                             //inner loop
      for(int i = 0; i<11; i++){
	string s;
	if(!getline(ss, s, ',' )){                         //string parsing around the "," character
	  break;
	}//end if
	info[i]=s;                                         //copy the string into a temporary array
      }//end for
    }//end while
    Student newStudent(info[0],info[1],info[2],info[3],info[4],info[5],info[6],      // make a student object based on the temp varaibles
                       info[7],info[8],info[9],info[10]);                            // held in the temp array "info"
    Database::addStudentToArray(newStudent);
  }//end while

  inFile.close();                                                   //closing the file is critical with larger file to eliminate buffer loss
  cout << "\n***Successfully imported " << sFileName << endl;
}//end method

bool Database::CheckSort(string type, int index){

 cout << "\nChecking";
 
 try{
   if(aStudent[index].getAnsci(type, index) == aStudent[index++].getAnsci(type, index)){
     cout << "Match";
     return true;

   }//end if

 }//end try

 catch(exception e){
   cout << "I declare an exception\n";
 }//end catch
    
}//end method

void Database::QuickSort(string type, int iLeft, int iRight, int index){             //recursive quick sort depending on the type passed in parameter
                                                                                     //sorts the database and rearranges the array according to the type
  int i = iLeft;                                                                     //based on Gossling's quicksort algorithim     
  int j = iRight;
  
  int median = aStudent[(iLeft+iRight)/2].getAnsci(type, index);
                                                         
  while (i <= j) {                                                       //Partition

    while (aStudent[i].getAnsci(type, index) < median){         
      i++;
    }//end while

    while (aStudent[j].getAnsci(type, index) > median){
      j--;
    }//end while

    if (i <= j) {//swap 
      swap(aStudent[i],aStudent[j]);
      i++;
      j--;
    }//end while
  }//end while
                                                                               // Recursion
  if (iLeft < j){                                                             
    QuickSort(type, iLeft, j, index);
  }//end if

  if (i < iRight){
    QuickSort(type, i, iRight, index);
  }//end if  
   
}//end method

int Database::getTotal(){
  return(Database::iTotalStudents);
}//end method

void Database::Search(string sType, string sValue){
                                                                               // simple but horribly inefficent search function
  bool foundValue = false;
  int size = Database::iTotalStudents;

  for(int i = 0; i < size; i++){

    Student newStudent = Student();
    newStudent = Database::getStudentOffArray(i);

    if(sType == "last"){
      if(newStudent.getLastName() == sValue){
	foundValue = true;
	cout <<"\nFound a match for " << sValue << endl;
	cout << newStudent;
      }//end if

    } else if (sType == "first"){

      if(newStudent.getFirstName() == sValue){
	foundValue = true;
	cout <<"\nFound a match for " << sValue << endl;
	cout << newStudent;
      }//end if

    } else if (sType == "city"){

      Address newAddress = Address();
      newAddress = newStudent.getAddress();

      if(newAddress.getCity() == sValue){
	foundValue = true;
	cout <<"\nFound a match for " << sValue << endl;
	cout << newStudent;
      }//end if
    }//end if
  }//end for

    if(!foundValue){
      cout << "\n*****************************String not found." << endl;
    }//end if

}//end method
