/********************************************************************************************************
* PROJECT TITLE: Project 2
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 29 AUgust 2011
*
* PURPOSE: Implement a list using an array, a linked list, and a vector
*
********************************************************************************************************/

#include "utility.h"
#include "lnklist.h"

using namespace std;

/********************************************************************************************************
* STRUCTURE TITLE: dataStruct
*
* DESCRIPTION: Wrapper for implementations of abstract data types
*
********************************************************************************************************/

struct dataStruct
{
	int dataArr[50];
	List<int> dataList;
	vector<int> dataVector;

};//end struct

/********************************************************************************************************
* FUNCTION TITLE: outputItem
*
* DESCRIPTION: Outputs a single location of the list, across the three implementations to console.
*
* @param dataStruct &myData		data structurep
* @param int intPos			item to output
*
* @return NA
*
********************************************************************************************************/

void outputItem(dataStruct &myData, int intPos)
{
	int tempVec;										//temporary value returned from vector
	int tempArr;										//temporary value returned from array

	myData.dataList.Head();
	for(int i=0; i<intPos; i++)
	{
		myData.dataList++;

	}//end for

	tempVec = myData.dataVector.at(intPos);
	tempArr = myData.dataArr[intPos];

	cout << "Array  " << tempArr << "\t Vector  " << tempVec << "\tLinked List  " <<
			myData.dataList.Retrieve() << endl;

}//end function

/********************************************************************************************************
* FUNCTION TITLE: deleteItem
*
* DESCRIPTION: Outputs item at position intPos then deletes the item from the list implementation of the
* linked list, array, vector
*
* @param dataStruct &myData		data structure
* @param int intPos				item to output
*
* @return NA
*
********************************************************************************************************/

void deleteItem(dataStruct &myData, int intPos)
{

	int tempInt;												//temporary integer
	int length = myData.dataList.Length();									//length of the list

	intPos--;												//Implement standard numbering

	cout << "\nItem at position " << intPos+1 << " is: " << endl;

	outputItem(myData, intPos);

	cout << "\nItem at position " << intPos+1 << " has now been removed.\n" << endl;

	myData.dataList.Head();

	for(int i=0; i<intPos; i++)
	{
		myData.dataList++;

	}//end for

	myData.dataList.Remove();
	myData.dataList.Head();

	myData.dataVector.erase(myData.dataVector.begin()+intPos);

	for(int i = intPos; i < length; i++)
	{
		tempInt = myData.dataArr[i+1];
		myData.dataArr[i] = tempInt;

	}//end for

}//end function

/********************************************************************************************************
* FUNCTION TITLE: copyData
*
* DESCRIPTION: Copies parameters to appropriate list implementation in the structure
*
* @param dataStruct &myData		data structure
* @param tempInt				item to be pushed into list implementation
* @param intLineNumber			location of the item in the list
*
* @return NA
*
********************************************************************************************************/

void copyData(dataStruct &myData, int tempInt, int intLineNumber)
{
	myData.dataList.InsertAfter(tempInt);
	myData.dataVector.push_back(tempInt);
	myData.dataArr[intLineNumber] = tempInt;

}//end function

/********************************************************************************************************
* FUNCTION TITLE: loadData
*
* DESCRIPTION: Loads integers from file and passes the value to copyData function.
*
* @param dataStruct &myData		data structure
* string fileName				name of file to be imported
*
* @return NA
*
********************************************************************************************************/

void loadData(dataStruct &myData, string fileName)
{

	int tempInt;											    	//temporary integer
	int intLineNumber=0;										        //position of the integer in the file
	const char * char_fileName = fileName.c_str();								//convert the file name to const char
	string tempString;											//used in conversion of string to int
	stringstream convertString();										//used in conversion of string to int
	ifstream myfile(char_fileName);										//used in file input

	if (myfile.is_open())
	{
	  while ( myfile.good() )
	  {
	    getline(myfile,tempString);
	    stringstream convertString(tempString);
	    convertString >> tempInt;										//converts string to int
	    copyData(myData, tempInt, intLineNumber);
	    intLineNumber++;

	  }//end while

	  myfile.close();

	}//end if

	myData.dataList.Head();											//reset current to head position

}//end function

/********************************************************************************************************
* FUNCTION TITLE: menu
*
* DESCRIPTION: Prompt the user for the number to remove from list implementations.
*
* @param dataStruct &myData		data structure
*
* @return NA
*
********************************************************************************************************/

void menu(dataStruct &myData)
{
	int tempInt;															   	//temporary integer
	bool keepGoing = true;															//gatekeeper bool

	while(keepGoing)
	{
		cout << "\nWhat location in the data (n) would you like to delete?" << endl;
		cin >> tempInt;

		if(tempInt > 0 && tempInt <= myData.dataList.Length())
		{
			keepGoing = false;

		}//end if

		else
		{
			int tempInt = myData.dataList.Length();

			cout << "\nPlease enter a value between 1 and 30." << endl;

			int int_ignore = sizeof(tempInt);
			cin.clear();
			cin.ignore(int_ignore,'\n');

		}//end else

	}//end while

	deleteItem(myData, tempInt);

}//end function

/********************************************************************************************************
* FUNCTION TITLE: printAll
*
* DESCRIPTION: Sends 'n' calls to the outputItem function to print all values of the list implementation
*
* @param dataStruct &myData		data structure
*
* @return NA
*
********************************************************************************************************/

void printAll(dataStruct &myData)
{

	for(int i = 0; i < myData.dataList.Length();  i++)
	{
		outputItem(myData, i);

	}//end for

}//end function

int main()
{
	dataStruct myData;
	string fileName;

	fileName = "data.txt";

	loadData(myData, fileName);
	printAll(myData);
	menu(myData);
	printAll(myData);

	return 0;

}//end main



