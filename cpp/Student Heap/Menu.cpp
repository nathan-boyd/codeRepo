#include "Address.h"
#include "Date.h"
#include "Student.h"
#include "Database.h"
#include "Menu.h"

#include <string>

using namespace std;

Menu::Menu(){

  Database newDatabase = Database("Student_Info.csv");     
 
  int size; 
  string choice;
  bool keepGoing = true;
  bool changes = false;

  size = newDatabase.getTotal();

    while(keepGoing){

      cout << "\n";
      cout << "ooooooooooo.                 .              .o8                                         " <<endl;                               
      cout << "`888'   `Y8b              .o8              888                                          " <<endl;
      cout << " 888      888  .oooo.   .o888oo  .oooo.    888oooo.    .oooo.    .oooo.o  .ooooo.       " <<endl;
      cout << " 888      888 `P  )88b    888   `P  )88b   d88' `88b  `P  )88b  d88(   8 d88' `88b      " <<endl;
      cout << " 888      888  .oP 888    888    .oP 888   888   888   .oP 888  ` Y88b.  888ooo888      " <<endl;
      cout << " 888     d88' d8(  888    888 . d8(  888   888   888  d8(  888  o.  )88b 888    .o      " <<endl;
      cout << "o888bood8P'   `Y888""8o      888  `Y888888o  `Y8bod8P'   8`Y888   8o 8""888P '8`Y8bod8  " <<endl;
      cout << "\n";
      cout << "                               Robert Nathan Boyd\n\n";

      cout << "     1) Enter 1 to display the database." << endl;
      cout << "     2) Enter 2 to sort the Database by last name and display the results." << endl;
      cout << "     3) Enter 3 to sort the Datebase by first name and  display the results." << endl;
      cout << "     4) Enter 4 to sort the Database by the students by home city and display the results." << endl;

      cout << "\n     5) Enter 5 to search for a student." << endl;

      cout << "     0) Enter 0 to quit" << endl;

      cout << "\n                      Please enter a number from 1-6.\n";

      getline(cin, choice);

      // determine appropriate input and act accordingly

      if(choice == "1"){//sort by last name and display

	for(int i = 0; i < size; i++){
	  Student newStudent = newDatabase.getStudentOffArray(i);
	  cout << newStudent;
	}//end for	
	
      } else if(choice == "2"){//sort by first name and display
	int index = 0;
	int i = 0;
	newDatabase.QuickSort("last",0,size,0); 
	
	for(i = 0; i < size; i++){
	  Student newStudent = newDatabase.getStudentOffArray(i);
	  cout << newStudent;
	}//end for

      } else if(choice == "3"){// sort by city

	newDatabase.QuickSort("first",0,size,0); 
	for(int i = 0; i < size; i++){
	  Student newStudent = newDatabase.getStudentOffArray(i);
	  cout << newStudent;
	}//end for

      } else if(choice == "4"){// print student info

	newDatabase.QuickSort("city",0,size,0); 
	for(int i = 0; i < size; i++){
	  Student newStudent = newDatabase.getStudentOffArray(i);
	  cout << newStudent;
	}//end for

      } else if(choice == "5"){// search for a student

	string value;
	string type;
	bool keepGoing = true;

	while(keepGoing){
	  cout << "You may search by 'last' 'first' 'city' please enter your choice\n";
	  cin >> type;
	  cin.ignore(); 

	  //clears the getline buffer. I doubt this is best practice.
	  cout << "Capitalization counts!" << endl;

	  if(type == "last"){
	    cout << "\nWhat is the last name of the Student you are searching for?\n";
	    keepGoing = false;
	    getline(cin, value);		  
	    newDatabase.Search(type, value);
	  } else if (type == "first"){
	    cout << "\nWhat is the first name of the Student you are searching for?\n";
	    keepGoing = false;
	    getline(cin, value);	
            newDatabase.Search(type,value);
	  } else if (type == "city"){
	    cout << "\nWhat is the name of the Students city you are searching for?\n";
	    keepGoing = false;
	    getline(cin, value);	
            newDatabase.Search(type,value);
	  } else {
	    cout << "Your input was invalid. Would you like to try again? Enter 'y' for yes or 'n' for no.\n";
 
	    getline(cin, value);
	    if(value == "yes" || value == "y"){
	      keepGoing = true;
	    } else{
	      keepGoing = false;
	    }//end if
	  }//end if 
	}//end while

      } else if (choice == "0"){

	keepGoing = false;
	cout << "Exited successfully\n";
      } else{
	cout << "\n****************** " << choice << " is not valid. Please enter a number from 1-6.******************\n";
      } //end else
    } //end while
 
    cout << endl;

}//end method
