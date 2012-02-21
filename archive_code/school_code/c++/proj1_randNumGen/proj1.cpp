#include "utility.h"
#include "filer.h"

using namespace std;

/**********************************************************************
* PROJECT TITLE: filer.cpp
* AUTHOR: Robert Nathan Boyd
* CREATION DATE: 23 AUgust 2011
* PURPOSE: Project Description: creates a file which contains wither pseudo-
* 			random or *true random numbers based on the user's choices.
*
* Revision History:
* 23 August 2011 Inception
*
*********************************************************************/

/**********************************************************************
* FUNCTION TITLE: makefile
* DESCRIPTION: Prompt the user for the number of random numbers to be
* generated, the range, the type, pseudo versus random, the name of the
* savefile.
*
* @param NA
*
*********************************************************************/

void filer_interface(){

	string str_randType;										//type of random number the user wants generated
	string str_fileName;										//name the user would like to assign to the file

	int int_numbers;											//number of randoms to generate
	int int_range;												//upper limit of numbers to use 0 - int_range

	bool bool_trueRand = false;									//true if user requests true randoms
	bool keepGoing = true;										//gate keeper boolean

	filer newFiler = filer();									//local instance of the filer class

	while(keepGoing)
	{
		cout << "Enter \"p\" to generate pseudo random numbers or \"t\" for truly random numbers." << endl;
		cin >> str_randType;	

		if(str_randType != "p" && str_randType != "t")
		{
			cout << "\nPlease enter a \"p\" or a \"t\"\n" << endl;

		}//end if
		
		else 
		{
			if(str_randType == "t")
			{
				bool_trueRand = true;

			}//end if
			
			keepGoing = false;

		}//end if else

	}//end while

	keepGoing = true;
	while(keepGoing)
	{
		cout << "How many random numbers would you like to generate?" << endl;
		if (cin >> int_numbers)
		{
			if(int_numbers > 0){
				keepGoing = false;	

			}//end if
			else
			{
				cout << "\nYou must enter a non-negative integer."<< endl;

			}//end else
			
		}//end if
		else
		{
			cout << "\nYou must enter an integer."<< endl;

		}//end else

		int int_ignore = sizeof(int_numbers);
		cin.clear();
		cin.ignore(int_ignore,'\n');

	}//end while

	keepGoing = true;
	while(keepGoing)
	{
		cout << "What range of would you like to have generated?" << endl;
		if (cin >> int_range)
		{
			if(int_numbers > 0){
				keepGoing = false;

			}//end if

			else
			{
				cout << "You must enter a non-negative integer." << endl;

			}//end else

		}//end if

		else
		{
			cout << "You must enter an integer." << endl;

		}//end else

		int int_ignore = sizeof(int_range);									//clear the buffer input stream
		cin.clear();
		cin.ignore(int_ignore,'\n');										//get rid of the previous value AND the newline char

	}//end while

	cout << "What would you like the file to be named?" << endl;
	cin >> str_fileName;

	newFiler.makefile(int_numbers, int_range, bool_trueRand, str_fileName);
	
}//end method

int main ()
{
	filer_interface();
	return 0;

}//end main

