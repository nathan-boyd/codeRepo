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
* DESCRIPTION: Create a file containing n random numbers in the range
* range with the file name file_name. 
*
* @param int n				number of random numbers to be generated
* @param int range			range of numbers to be generated
* @param bool truly_random	true random versus pseudo random
* @param string file_name	name of the saved file name
*
*********************************************************************/

void filer::makefile(int n, int range, bool truly_random, string file_name)
{

	int int_randInt;									//holds the value of the random num generator
	string str_randType = "pseudo random";				//used in the summary / complete statement
	const char * char_file_name = file_name.c_str();	//convert the file name to const char
	ofstream outStream;									//file output stream used to generate random file

	outStream.open(char_file_name);						

	if(truly_random)									//seed random number generator based on user preference
	{
		srand(int(time(NULL)));
		str_randType = "truly random";

	}//end if

	else
	{
		srand(011235);									//seed random number generator with static seed

	}//end else

	for(int i = 0; i < n; i++)							//calls the rand num function, saves result to file stream
	{
		int_randInt = next_number(range);
		outStream << int_randInt << endl;

	}//end for

	outStream.close();
	cout << "Your file named " << file_name << " with " << n << " " << str_randType << " numbers " << "in the range 0-" << range << " is complete." << endl;

}//end function

/**********************************************************************
* FUNCTION TITLE: makefile
* DESCRIPTION: Generate and return a random number in the range 0 - range
*
* @param int range the range of random numbers to be generated
*
* @return int_randNum returns a randomly generated number
*
*********************************************************************/

int filer::next_number(int range)
{
	int int_randNum = rand();
	int_randNum = int_randNum % range +1;
	return int_randNum;

}//end function
