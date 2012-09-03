/********************************************************************************************************
* PROJECT TITLE: Project 8 Hash Table
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 7 November 2011
*
* This assignment conducts an experimental test on the work involved in searching a hash table that uses
* chaining for collision resolution.
*
********************************************************************************************************/

#include "hashTable.h"

using namespace std;

struct dataStruct
{

	vector<int> targets;

};

/********************************************************************************************************
* FUNCTION TITLE: loadData
*
* DESCRIPTION: Loads test values into a dataStruct.
*
********************************************************************************************************/

template <class Entry>
void loadData (dataStruct * & myData, string fileName)
{
	myData->targets.clear();

	int tempInt;

	const char * char_fileName = fileName.c_str();									//convert the file name to const char
	string tempString;																//used in conversion of string to int
	ifstream myfile(char_fileName);													//used in file input

	if (myfile.is_open())
	{
		while (myfile.good())
		{
			getline(myfile,tempString);
			stringstream convertString(tempString);
			convertString >> tempInt;												//convert string to int

			myData->targets.push_back(tempInt);

		}//end while

		myfile.close();

	}//end if
	else
	{
		cout << "File does not exist" << endl;
	}

}//end function

/********************************************************************************************************
* FUNCTION TITLE: addVals
*
* DESCRIPTION: Push values from dataStruct into hash table
*
********************************************************************************************************/

void addVals(hashTable<Key> * & newMap, dataStruct * & myData, int a, int b)
{
	for(int i = a; i < b; i++)
	{
		stringstream newStream;
		newStream << myData->targets[i];
		string newString;
		newStream >> newString;
		int hash = newMap->hashVal(newString);
		newMap->put(myData->targets[i], hash);
	}

}

/********************************************************************************************************
* FUNCTION TITLE: runTests
*
* DESCRIPTION: Run search tests, uses the key class to count comparisons.
*
********************************************************************************************************/

void runTests(hashTable<Key> * & newMap, dataStruct * & myData, double a, double b, double c, double d)
{
	Key newKey(0);
	double comparisons = 0;

	for(int i = a; i < b; i++)
	{
		newMap->search(myData->targets[i]);
		comparisons += newKey.comparisons;
	}

	cout << b-a << " unsuccessful searches:     " << comparisons / (b-a) << endl;;

	comparisons = 0;

	for(int i = c; i < d; i++)
	{
		newMap->search(myData->targets[i]);
		comparisons += newKey.comparisons;
	}

	if(d < 51 )
		cout << d << " successful searches:        " << comparisons / d << endl;
	else
		cout << d << " successful searches:       " << comparisons / d << endl;

	cout << endl;

}

/********************************************************************************************************
* FUNCTION TITLE: outputData
*
* DESCRIPTION: Prints the test results to screen in psuedo-tabular form
*
********************************************************************************************************/

void outputData()
{
	dataStruct * myData = new dataStruct();								//Load File A
	hashTable<Key> * newMap = new hashTable<Key>(97);
	loadData<Key>(myData, "Lab8a.txt");

	cout << "Test A (hash size 97) " << endl;
	cout << "\n20 items " << endl;
	addVals(newMap, myData, 0, 20);
	runTests(newMap, myData, 200, 300, 0, 20);
	addVals(newMap, myData, 20, 50);
	cout << "50 items " << endl;
	runTests(newMap, myData, 200, 300, 0, 50);
	addVals(newMap, myData, 50, 100);
	cout << "100 items " << endl;
	runTests(newMap, myData, 200, 300, 0, 100);
	addVals(newMap, myData, 100, 200);
	cout << "200 items " << endl;
	runTests(newMap, myData, 200, 300, 0, 200);

	cout << "------------------------------------\n" << endl;

	dataStruct * myData1 = new dataStruct();							//Load File B
	hashTable<Key> * newMap1 = new hashTable<Key>(241);
	loadData<Key>(myData1, "Lab8b.txt");

	cout << "Test B (hash size 241) " << endl;
	cout << "\n20 items " << endl;
	addVals(newMap1, myData1, 0, 20);
	runTests(newMap1, myData1, 200, 300, 0, 20);
	addVals(newMap1, myData1, 20, 50);
	cout << "50 items " << endl;
	runTests(newMap1, myData1, 200, 300, 0, 50);
	addVals(newMap1, myData1, 50, 100);
	cout << "100 items " << endl;
	runTests(newMap1, myData1, 200, 300, 0, 100);
	addVals(newMap1, myData1, 100, 200);
	cout << "200 items " << endl;
	runTests(newMap1, myData1, 200, 300, 0, 200);

}

int main()
{
	outputData();

	return 0;

}
