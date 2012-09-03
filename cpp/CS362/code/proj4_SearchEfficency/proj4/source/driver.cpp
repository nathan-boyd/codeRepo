/********************************************************************************************************
* PROJECT TITLE: Project 4
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 21 September 2011
*
* PURPOSE: Run experimental tests against  theoretical values, which may reveal how good the model is or
* whether our assumptions were too sweeping.
*
********************************************************************************************************/

#include "utility.h"
#include "ordered_list.h"
#include "key.h"

using namespace std;

/********************************************************************************************************
* FUNCTION TITLE: loadTargets
*
* DESCRIPTION: Load key values from file into ordered list
*
* @param string fileName				name of the file to be opened, file must exist in project root
* @param Ordered_list<Key> &target		name of the ordered list to load the values into
*
* @return NA
*
********************************************************************************************************/

void loadTargets(string fileName, Ordered_list<Key> &target)
{
	int tempInt;                                                   //temporary integer
	const char * char_fileName = fileName.c_str();                 //convert the file name to const char
	string tempString;                                             //used in conversion of string to int
	stringstream convertString();                                  //used in conversion of string to int
	ifstream myfile(char_fileName);                                //used in file input

	if (myfile.is_open())
	{
	  while ( myfile.good() )
	  {
		getline(myfile,tempString);
		stringstream convertString(tempString);
		convertString >> tempInt;                                  //converts string to int
		Key newKey(tempInt);

		target.insert(newKey);

	  }//end while

	  myfile.close();
	  myfile.clear();

	}//end if

	if (myfile.fail())
	{
	  cout << "Error trying to load " << "\"" << fileName << "\"" << endl;
	} //end if

}//end function

/********************************************************************************************************
* FUNCTION TITLE: loadField
*
* DESCRIPTION: Load odd values from 1-n into a ordered list
*
* @param int n 							number of values to load into the field array
* @param Ordered_list<Key> &field		name of the ordered list to load the values into
*
* @return NA
*
********************************************************************************************************/

void loadField(int n, Ordered_list<Key> &field)
{
	for(int i = 1; i < (n*2); i += 2)
	{
		Key newKey(i);
		field.insert(newKey);
	}//end for

}// end function

/********************************************************************************************************
* FUNCTION TITLE: showResults
*
* DESCRIPTION: Write the test results to console and file
*
* @param double work_array[4][6] 		array containing total comparison counts for each of the 24 tests
*
* @return NA
*
********************************************************************************************************/

void showResults(double work_array[4][6])
{

	string str_fileName = "results.txt";

	const char * char_file_name = str_fileName.c_str();
	ofstream outStream;
	outStream.open(char_file_name);

	cout.setf(ios::fixed);
	cout.setf(ios::showpoint);
	cout.precision(3);

	cout << "\n               |    odd10    |    even10    |    odd100    |  even100    |    odd1000    |    even1000     |" <<  endl;
	cout << "-----------------------------------------------------------------------------------------------------------|"<< endl;
	cout << "    Binary 1   |    " << work_array[0][0] / (double)10 << "    |     " << work_array[0][1] /(double)10 << "    |     " << work_array[0][2] /(double)100 << "    |    " << work_array[0][3] /(double)100 << "    |     " << work_array[0][4] /(double)1000 << "    |      " << work_array[0][5] /(double)1000 << "     |" << endl;
	cout << "-----------------------------------------------------------------------------------------------------------|"<< endl;
	cout << "    Binary 2   |    " << work_array[1][0] / (double)10 << "    |     " << work_array[1][1] /(double)10 << "    |    " << work_array[1][2] /(double)100 << "    |   " << work_array[1][3] /(double)100 << "    |     " << work_array[1][4] /(double)1000 << "    |      " << work_array[1][5] /(double)1000 << "     |" <<   endl;
	cout << "-----------------------------------------------------------------------------------------------------------|"<< endl;
	cout << "  Sequential   |    " << work_array[2][0] / (double)10 << "    |    " << work_array[2][1] /(double)10 << "    |    " << work_array[2][2] /(double)100 << "    |  " << work_array[2][3] /(double)100 << "    |    " << work_array[2][4] /(double)1000 << "    |    "    << work_array[2][5] /(double)1000 << "     |" <<   endl;
	cout << "-----------------------------------------------------------------------------------------------------------|"<< endl;
	cout << "S-Sequential   |    " << work_array[3][0] / (double)10 << "    |     " << work_array[3][1] /(double)10 << "    |    " << work_array[3][2] /(double)100 << "    |   " << work_array[3][3] /(double)100 << "    |    " << work_array[3][4] /(double)1000 << "    |     "   << work_array[3][5] /(double)1000 << "     |" <<   endl;
	cout << "-----------------------------------------------------------------------------------------------------------"<< endl;

	outStream.setf(ios::fixed);
	outStream.setf(ios::showpoint);
	outStream.precision(3);

	outStream << "\n               |    odd10    |    even10    |    odd100    |  even100    |    odd1000    |    even1000     |" <<  endl;
	outStream << "-----------------------------------------------------------------------------------------------------------|"<< endl;
	outStream << "    Binary 1   |    " << work_array[0][0] / (double)10 << "    |     " << work_array[0][1] /(double)10 << "    |     " << work_array[0][2] /(double)100 << "    |    " << work_array[0][3] /(double)100 << "    |     " << work_array[0][4] /(double)1000 << "    |      " << work_array[0][5] /(double)1000 << "     |" << endl;
	outStream << "-----------------------------------------------------------------------------------------------------------|"<< endl;
	outStream << "    Binary 2   |    " << work_array[1][0] / (double)10 << "    |     " << work_array[1][1] /(double)10 << "    |    " << work_array[1][2] /(double)100 << "    |   " << work_array[1][3] /(double)100 << "    |     " << work_array[1][4] /(double)1000 << "    |      " << work_array[1][5] /(double)1000 << "     |" <<   endl;
	outStream << "-----------------------------------------------------------------------------------------------------------|"<< endl;
	outStream << "  Sequential   |    " << work_array[2][0] / (double)10 << "    |    " << work_array[2][1] /(double)10 << "    |    " << work_array[2][2] /(double)100 << "    |  " << work_array[2][3] /(double)100 << "    |    " << work_array[2][4] /(double)1000 << "    |    "    << work_array[2][5] /(double)1000 << "     |" <<   endl;
	outStream << "-----------------------------------------------------------------------------------------------------------|"<< endl;
	outStream << "S-Sequential   |    " << work_array[3][0] / (double)10 << "    |     " << work_array[3][1] /(double)10 << "    |    " << work_array[3][2] /(double)100 << "    |   " << work_array[3][3] /(double)100 << "    |    " << work_array[3][4] /(double)1000 << "    |     "   << work_array[3][5] /(double)1000 << "     |" <<   endl;
	outStream << "-----------------------------------------------------------------------------------------------------------"<< endl;
	outStream.close();

}// end function

/********************************************************************************************************
* FUNCTION TITLE: testAll
*
* DESCRIPTION: Run binary1, binary2, sequential, short sequential searches on the field array with targets
* from the 6 key value files. Store the comparisons in a multi dimensional array.
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

void testAll()
{
	Key newKey = Key();
	int position = 0;
	double work_array [4][6] = {{0}};
	int col = 0;

	Ordered_list<Key> target_array [6];					// ordered list of keys to search
	Ordered_list<Key> field;							// field in which to search
	Ordered_list<Key> target;							// specific target list to bea utilized as keys

	Ordered_list<Key> even10_target;					// list of targets from the 6 input files
	Ordered_list<Key> even100_target;
	Ordered_list<Key> even1000_target;
	Ordered_list<Key> odd10_target;
	Ordered_list<Key> odd100_target;
	Ordered_list<Key> odd1000_target;

	loadTargets("even10.txt", even10_target);			// load targets from the input files
	loadTargets("even100.txt", even100_target);
	loadTargets("even1000.txt", even1000_target);
	loadTargets("odd10.txt", odd10_target);
	loadTargets("odd100.txt", odd100_target);
	loadTargets("odd1000.txt", odd1000_target);

	target_array [0] = odd10_target;					 // load the target array with orderd lists of targets
	target_array [1] = even10_target;
	target_array [2] = odd100_target;
	target_array [3] = even100_target;
	target_array [4] = odd1000_target;
	target_array [5] = even1000_target;

	for(int i=0; i < 6; i++)												// runs 6 times for the 6 result columns
	{
		target = target_array[i];											// load the next target list into the searched target list

		field.clear();

		if(i < 2)															//load a field size 10 for the first two columns
		{
			loadField(10, field);
		}// end if

		else if(i >= 2 && i < 4)
		{
			loadField(100, field);											//load a field size 100 for the middle two columns
		}//end else if

		else
		{
			loadField(1000, field);											//load a field size 1000 for the last two columns
		}//end else

		for(int j = 0; j < field.size(); j++)								// for the length of the field perform each test on each field value
		{
			target.retrieve(j, newKey);
			newKey.comparisons=0;
			position = 0;

			field.binary1(newKey, position);
			work_array [0][col] += newKey.comparisons;
			newKey.comparisons=0;
			position = 0;

			field.binary2(newKey, position);
			work_array [1][col] += newKey.comparisons;
			newKey.comparisons=0;
			position = 0;

			field.sequential_search(newKey, position);
			work_array [2][col] += newKey.comparisons;
			newKey.comparisons=0;
			position = 0;

			field.short_sequential_search(newKey, position);
			work_array [3][col] += newKey.comparisons;
			newKey.comparisons=0;
			position = 0;

		}// end for

		col++;

	}//end for

	showResults(work_array);

}// end function

int main ()
{

	testAll();	//run the tests!

	return 0;

}// end function
