#include "utility.h"

#ifndef DATA_WRAPPER
#define DATA_WRAPPER

template <class T>
class data_wrapper {

	private:

		static const int rows = 500;
		static const int cols = 200;

		vector<T> vec_data;
		T arr_data[rows][cols];

	public:

		data_wrapper();
		void buildMatrix();

		bool isSorted();
		void printAll ();
		void makeFile();
		void loadData (string fileName);

		void quickSort();
		void quickSort_rec(vector<T> & vec, int left, int right);

		void columnSort();

};

#endif

/********************************************************************************************************
* PROGRAM TITLE: data_wrapper
*
* DESCRIPTION: 	This class is used to wrap up a vector, used internally, and a multidimensional array (matrix)
* 				Columnsort is generally used to to sort the data while the quicksort algorithim is used to sort
* 				the individual columns.
*
********************************************************************************************************/

/********************************************************************************************************
* TITLE: data_wrapper
*
* DESCRIPTION: Constructor
*
********************************************************************************************************/

template <class T>
data_wrapper<T>::data_wrapper()
{

}//end constructor

/********************************************************************************************************
* TITLE: isSorted
*
* DESCRIPTION: Function determines if the arr_data array is sorted. Returns true if sorted
*
********************************************************************************************************/

template <class T>
bool data_wrapper<T>::isSorted()
{
	int counter = 0;
	vector<T> temp_vec;

	for(short int i = 0; i < cols; i++)
	{
		for(short int j = 0; j < rows; j++)
		{
			temp_vec.push_back(arr_data[j][i]);
		}//end for

	}//end for

	while(counter < int(temp_vec.size()-1))
	{
		if(temp_vec[counter] > temp_vec[counter+1])
		{
			cout << "Sort failed at item " << counter << endl;
			return false;
		}//end if

		counter ++;
	}//end while

	return true;
}//end function

/********************************************************************************************************
* TITLE: buildMatrix
*
* DESCRIPTION: Copies data from member vector into multidimensional array (matrix)
*
********************************************************************************************************/

template <class T>
void data_wrapper<T>::buildMatrix()
{
	long int counter = 0;

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			data_wrapper<T>::arr_data[j][i] = vec_data[counter];
			counter++;
		}//end for

	}//end for

}//end function

/********************************************************************************************************
* TITLE: printAll
*
* DESCRIPTION: Troubleshooting function used to print contents of member vector or member matrix to screen
*
********************************************************************************************************/

template <class T>
void data_wrapper<T>::printAll ()
{

//	typename vector<T>::iterator it;
//	it = data_wrapper<T>::vec_data.begin();
//
//	while(it != data_wrapper<T>::vec_data.end())
//	{
//		cout << *it << endl;
//
//		it++;
//
//	}

//	typename vector<T>::iterator it;
//	it = data_wrapper<T>::temp_vec.begin();
//
//	while(it != data_wrapper<T>::temp_vec.end())
//	{
//		cout << *it << endl;
//
//		it++;
//
//	}

//	COLUMN Major

	for(short int i = 0; i < cols; i++)
	{
		for(short int j = 0; j < rows; j++)
		{
			cout << arr_data[j][i] << endl;
		}

	}

//	ROW MAJOR

//	for(int i = 0; i < rows; i++)
//	{
//		for(int j = 0; j < cols; j++)
//		{
//			cout << arr_data[i][j] << endl;
//		}
//	}


}//end function

/********************************************************************************************************
* TITLE: makeFile
*
* DESCRIPTION: Prints contents of matrix to file
*
********************************************************************************************************/

template <class T>
void data_wrapper<T>::makeFile()
{
	string fileName = "Results.txt";
	const char * char_file_name = fileName.c_str();		//convert the file name to const char
	ofstream outStream;									//file output stream used to generate random file
	outStream.open(char_file_name);

	for(short int i = 0; i < cols; i++)
	{
		for(short int j = 0; j < rows; j++)
		{
			outStream << arr_data[j][i] << endl;
		}//end for

	}//end for

	outStream.close();

}//end function

/********************************************************************************************************
* TITLE: loadData
*
* DESCRIPTION: Copies external data from file into internal vector
*
********************************************************************************************************/

template <class T>
void data_wrapper<T>::loadData (string fileName)
{
	short int tempInt;

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

			data_wrapper<T>::vec_data.push_back(tempInt);

		}//end while

		myfile.close();

	}//end if

	else
	{
		cout << "File does not exist" << endl;
	}//end else

}//end function

/********************************************************************************************************
* TITLE: quickSort
*
* DESCRIPTION: Calls recursive quicksort
*
********************************************************************************************************/

template <class T>
void data_wrapper<T>::quickSort()
{
	quickSort_rec(vec_data, 0, vec_data.size());

}//end function

/********************************************************************************************************
* TITLE: quickSort_rec
*
* DESCRIPTION: Sorts the vector passed to it. Recursively calls quickSort_rec
*
********************************************************************************************************/

template <class T>
void data_wrapper<T>::quickSort_rec(vector<T> & vec, int left, int right)
{
	int i = left;
	int j = right;
	int tmp;
	int pivot = vec[(left + right) / 2];

	while (i <= j)
	{
		while (vec[i] < pivot)
			  i++;

		while (vec[j] > pivot)
			  j--;

		if (i <= j)
		{
			  tmp = vec[i];
			  vec[i] = vec[j];
			  vec[j] = tmp;
			  i++;
			  j--;
		}//end if

	}//end while

	if (left < j)
		quickSort_rec(vec, left, j);

	if (i < right)
		quickSort_rec(vec, i, right);

}//end function

template <class T>
void data_wrapper<T>::columnSort()
{
	vector<T> temp_vec;
	int counter = 0;
	short int neg_infinity = -1;
	short int pos_infinity = 50000;
	T temp_arr[rows][cols];

// STEP 1 sort the columns.

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			temp_vec.push_back(data_wrapper<T>::arr_data[j][i]);
		}//end for

		quickSort_rec(temp_vec, 0, temp_vec.size()-1);

		for(int j = 0; j < rows; j++)
		{
			temp_arr[j][i] = temp_vec[j];
		}//end for

		temp_vec.clear();

	}//end for

// STEP 2 Transpose the matrix

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			temp_vec.push_back(data_wrapper<T>::arr_data[j][i]);
		}//end for

	}//end for

	for(int i = 0; i < rows; i++)
	{
		for(int j = 0; j < cols; j++)
		{
			temp_arr[i][j] = temp_vec[counter];
			counter++;
		}//end for

	}//end for

	temp_vec.clear();
	counter = 0;

// STEP 3 sort the columns.

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			temp_vec.push_back(data_wrapper<T>::arr_data[j][i]);

		}//end for

		quickSort_rec(temp_vec, 0, temp_vec.size()-1);

		for(int j = 0; j < rows; j++)
		{
			temp_arr[j][i] = temp_vec[j];

		}//end for

		temp_vec.clear();

	}//end for

	temp_vec.clear();
	counter = 0;

// STEP 4 Transpose the matrix

	for(int i = 0; i < rows; i++)
	{
		for(int j = 0; j < cols; j++)
		{
			temp_vec.push_back(data_wrapper<T>::arr_data[i][j]);;
		}//end for

	}//end for

	for(short int i = 0; i < cols; i++)
	{
		for(short int j = 0; j < rows; j++)
		{
			temp_arr[j][i] = temp_vec[counter];
			counter++;
		}//end for

	}//end for

	temp_vec.clear();
	counter = 0;

//STEP 5 Sort the Columns

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			temp_vec.push_back(data_wrapper<T>::arr_data[j][i]);
		}//end for

		quickSort_rec(temp_vec, 0, temp_vec.size()-1);

		for(int j = 0; j < rows; j++)
		{
			temp_arr[j][i] = temp_vec[j];
		}//end for

		temp_vec.clear();
	}//end for

	temp_vec.clear();
	counter = 0;

//  STEP 6 Access the values in column-major order and shift the values down (and up to the top of the next column) by r/2
//	positions.  You will need to create one additional column to accommodate this shift.  Fill the first half of the
//	first column (now empty) with the value   and the bottom half of the new column with the value

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			temp_vec.push_back(data_wrapper<T>::arr_data[j][i]);
		}//end for

	}//end for

//	insert r/2 values at front and end of list delta here

	for(int i = 0; i < rows/2; i++)
	{
		temp_vec.insert(temp_vec.begin(), neg_infinity);
		temp_vec.push_back(pos_infinity);
	}//end for

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			temp_arr[j][i] = temp_vec[counter];
			counter++;
		}//end for

	}//end for

	temp_vec.clear();
	counter = 0;

//STEP 7 Sort the new columns.

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			temp_vec.push_back(temp_arr[j][i]);
		}//end for

		quickSort_rec(temp_vec, 0, temp_vec.size()-1);
		temp_vec.clear();
	}//end for

	temp_vec.clear();
	counter = 0;

//	STEP 8  Reverse the shift of step 6, that is, access the values in column-major order and shift them up by r/2
//	positions.  The extra column will go away and the result will be values that, in column-major order, are sorted.

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			temp_vec.push_back(temp_arr[j][i]);
		}//end for

	}//end for

	for(int i = 0; i < rows/2; i ++)
	{
		temp_vec.erase(temp_vec.begin());
		temp_vec.pop_back();
	}//end for

	quickSort_rec(vec_data, 0, vec_data.size()-1);

	for(int i = 0; i < cols; i++)
	{
		for(int j = 0; j < rows; j++)
		{
			arr_data[j][i] = vec_data[counter];
			counter++;
		}//end for

	}//end for

}//end function
