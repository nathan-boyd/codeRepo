#include "data_wrapper.h"
#include "Timer.h"

using namespace std;

/********************************************************************************************************
* TITLE: performTests
*
* DESCRIPTION:	Uses the data_wrapper class to store a matrix of 100,000 integers and sorts that matrix using
* 				the column sort algorithm. Uses the timer class to determine time used to perform sorting operation.
*
********************************************************************************************************/

void performTests()
{
	double time = 0;
	Timer newTimer;
	typedef short int T;

	cout.setf(ios::fixed);
	cout.setf(ios::showpoint);
	cout.precision(3);

	data_wrapper<T> newWrapper;
	newWrapper.loadData("Lab9.txt");
	newWrapper.buildMatrix();

	newTimer.reset();
	newWrapper.columnSort();
	time = newTimer.elapsed_time();

	newWrapper.makeFile();

	if(newWrapper.isSorted())
		cout << "Items sorted successfully, ";

	cout <<"ColumnSort completed in " << time <<  " seconds." << endl;



}

int main()
{
	performTests();

}
