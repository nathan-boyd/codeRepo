/********************************************************************************************************
* PROJECT TITLE: Project 7
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 26 October 2011
*
* PURPOSE:	Using Lab7a.txt, read the first 200 values and use them to build both a binary search tree
*  			(discarding duplicates and making no attempt to balance the tree) and an AVL tree. Then read the entire
*   		file of 500 values one at a time and search for each value in each tree. The first 200 will be successful
*			searches, the rest will primarily be unsuccessful (duplicate values in the file might cause a small number
*			of these later searches to actually be successful), but you will lump successful and unsuccessful searches
*			together anyway. Compute the number of comparisons for each of the 500 searches and use this to find the
*			average number of comparisons for each tree. Then repeat this process using the remaining two files.
*			(The files are small, so as an alternative - for simpler file processing - you could read each data file
*			into an internal array structure.)
*
********************************************************************************************************/

#include "AVL_tree.h"

using namespace std;

typedef int T;

/********************************************************************************************************
* STRUCT TITLE: dataStruct
*
* DESCRIPTION: Utility structure to facilitate easy passing of data
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template<class T>
struct dataStruct
{
	AVL_tree<Key<T> > avl;
	Search_tree<Key<T> > search;
	vector<Key<T> > targets;
	double results[3][3];
};//end struct

/********************************************************************************************************
* FUNCTION TITLE: loadTree
*
* DESCRIPTION: Adds a key to the search and avl tree
*
* @param dataStruct<Key>		Utility structure to facilitate easy passing of data
* @param &myData, Key x			Key Item to be inserted into the datastruct
*
* @return NA
*
********************************************************************************************************/

template<class Key>
void loadTree (dataStruct<Key> &myData, Key x)
{
	myData.avl.insert(x);
	myData.search.insert(x);

}//end function

/********************************************************************************************************
* FUNCTION TITLE: loadVector
*
* DESCRIPTION:	Pushes a Key into a vector
*
* @param dataStruct<Key>		Utility structure to facilitate easy passing of data
* @param &myData, Key x			Key Item to be inserted into the datastruct
*
* @return NA
*
********************************************************************************************************/

template<class Key>
void loadVector (dataStruct<Key> &myData, Key & x)
{
	myData.targets.push_back(x);

}//end function

/********************************************************************************************************
* FUNCTION TITLE: loadData
*
* DESCRIPTION:	Loads the contents of source files into an AVL and Search Tree
*
* @param dataStruct<Key>		Utility structure to facilitate easy passing of data
* @param string fileName		name of the file to be read into the data structure
*
* @return NA
*
********************************************************************************************************/

template<class Key>
void loadData (dataStruct<Key> &myData, string fileName)
{
	int tempInt;
	int counter = 0;
	const char * char_fileName = fileName.c_str();								//convert the file name to const char
	string tempString;															//used in conversion of string to int
	stringstream convertString();												//used in conversion of string to int
	ifstream myfile(char_fileName);												//used in file input

	if (myfile.is_open())
	{
	  while ( myfile.good() )
	  {
	    getline(myfile,tempString);
	    stringstream convertString(tempString);
	    convertString >> tempInt;												//convert string to int
	    Key tempKey(tempInt);

	    loadVector(myData, tempKey);

	    if(counter <= 200)
	    	loadTree<Key>(myData, tempKey);

	    counter++;

	  }//end while

	  myfile.close();

	}//end if
	else
	{
		cout << "File does not exist" << endl;
	}

}//end function

/********************************************************************************************************
* FUNCTION TITLE: runTests
*
* DESCRIPTION:	Runs test on Binary Search and AVL trees to determine the average number of comparisons
*
* @param string fileName		name of the file to be tested
*
* @return results				array containing the average number of comparisons for wach tree type
*
********************************************************************************************************/

//Loads the fule and Runs two tests on the file
double * runTests(string fileName)
{
	double * results = new double[2];

	typedef int T;
	dataStruct<T> myData;
	Key<T> tempKey(1);
	loadData(myData, fileName);

	tempKey.comparisons = 0;

	for(int i = 0; i < int(myData.targets.size()); i ++)
	{
		tempKey = myData.targets.at(i);
		myData.search.tree_search(tempKey);
	}

	results [0] = tempKey.comparisons/double(500.00);
	tempKey.comparisons = 0;

	for(int i = 0; i < int(myData.targets.size()); i ++)
	{
		tempKey = myData.targets.at(i);
		myData.avl.tree_search(tempKey);
	}

	results [1] = tempKey.comparisons/double(500.00);

	return results;
}

/********************************************************************************************************
* FUNCTION TITLE: runit
*
* DESCRIPTION:	Runs tests on Binary Search and AVL tree to determine the average number of comparisons
* 				each tree makes when searching for a target
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

void runit()
{

	double * results = new double[2];

	string fileName = "Lab7a.txt";
	results = runTests(fileName);

	cout << "             Search Tree       AVL Tree         Col 1 as" << endl;
	cout << "           Avg Comparisons  Avg Comparisons    % of Col 2" << endl;
	cout << "-------------------------------------------------------------" << endl;
	cout << "Test 1      \t" << results[0] << "     \t" << results[1] << "        \t" <<  results[0]/results[1] << endl;
	cout << "-------------------------------------------------------------" << endl;

	fileName = "Lab7b.txt";
	results = runTests(fileName);
	cout << "Test 2      \t" << results[0] << "     \t" << results[1] << "        \t" <<  results[0]/results[1] << endl;
	cout << "-------------------------------------------------------------" << endl;

	fileName = "Lab7c.txt";
	results = runTests(fileName);
	cout << "Test 3      \t" << results[0] << "     \t" << results[1] << "        \t" <<  results[0]/results[1] << endl;
}

int main()
{

	runit();

	return 0;

}
