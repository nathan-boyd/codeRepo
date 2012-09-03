#include <iostream>
#include "Array.h"
using namespace std;

void testFailed(int line)
{
	cout << "FAILED test on line " << line << endl;
}

void testPassed(char * test)
{
	cout << "\tpassed " << test << endl;
}

void printException(exception e)
{
	cout << "\t\texception: " << e.what() << endl;
}

void main()
{

	//need to check and see if we are accessing space that has not been allocated yet

	cout << "equality operator testing" << endl;
	{
		Array test1 = Array(200, 'f');
		Array test2 = Array(200, 'f');

		if (test1 == test2) 
		{
			testPassed("equality 1");
		}

		if (test1 != test2) 
		{
			testFailed(__LINE__);
		}

		Array test3 = Array(200, 'f');
		Array test4 = Array(200, 'b');

		if (test3 == test4) 
		{
			testFailed(__LINE__);
		}

		if (test3 != test4) 
		{
			testPassed("equality 2");
		}

		Array test5 = Array(20, 'b');
		Array test6 = Array(200, 'b');

		if (test5 == test6) 
		{
			testFailed(__LINE__);
		}

		if (test5 != test6) 
		{
			testPassed("equality 3");
		}
	}

	cout << "\nbracket operator testing" << endl;
	{
		Array test7 = Array(5, 'f');
		Array test8 = Array(500, 'b');

		bool failed = false;

		for ( int i = 0; i < test7.size(); i++)
		{
			if ( test7[i] != 'f')
			{
				failed = true;
			}
		}

		if (failed) testFailed(__LINE__);
		else testPassed("operator 1");

		failed = false;

		for ( int i = 0; i < test8.size(); i++)
		{
			if ( test8[i] != 'b')
			{
				failed = true;
			}
		}

		if (failed) testFailed(__LINE__);
		else testPassed("operator 2");
	}

	cout << "\nget function testing" << endl;
	{
		Array test9 = Array(5, 'f');
		Array test10 = Array(500, 'b');

		bool failed = false;

		for ( int i = 0; i < test9.size(); i++)
		{
			if ( test9.get(i) != 'f')
			{
				failed = true;
			}
		}

		if (failed) testFailed(__LINE__);
		else testPassed("get function test 1");

		failed = false;

		for ( int i = 0; i < test10.size(); i++)
		{
			if ( test10.get(i) != 'b')
			{
				failed = true;
			}
		}

		if (failed) testFailed(__LINE__);
		else testPassed("get function test 2");
	}

	cout << "\nset function testing" << endl;
	{
		Array test11 = Array(5, 'f');
		Array test12 = Array(500, 'b');

		test11.set(0, 'm');
		if ( test11[0] != 'm') testFailed(__LINE__);
		else testPassed("set function test 1");
		if ( test11[4] != 'f') testFailed(__LINE__);
		else testPassed("set function test 2");

		test12.set(499, 'm');
		if ( test12[499] != 'm') testFailed(__LINE__);
		else testPassed("set function test 3");
		if ( test12[498] != 'b') testFailed(__LINE__);
		else testPassed("set function test 4");

		try{
			test12.set(500, 'a');
			testFailed(__LINE__);
		} catch (exception &e) {
			testPassed("set function test 5");
		}
		
		try{
			test12.set(-1, 'a');
			testFailed(__LINE__);
		} catch (exception &e) {
			testPassed("set function test 6");
		}
		
	}

	cout << "\nfind function testing" << endl;
	{
		Array test1 = Array(5, 'f');
		Array test2 = Array(500, 'b');

		try{
			int findResult = test1.find('m', 3);
			if ( findResult != -1) testFailed(__LINE__);
			else testPassed("find function test 1");
		} catch (exception &e) {
			printException(e);
		}

		try{
			int findResult = test1.find('f', 0);
			if ( findResult == -1) testFailed(__LINE__);
			else testPassed("find function test 2");
		} catch (exception &e) {
			printException(e);
		}

		try{
			int findResult = test1.find('f');
			if ( findResult == -1) testFailed(__LINE__);
			else testPassed("find function test 3");
		} catch (exception &e) {
			printException(e);
		}

		try{
			int findResult = test2.find('b', 500);
			testFailed(__LINE__);
		} catch (exception &e) {
			testPassed("find function test 4");
		}

		try{
			int findResult = test2.find('b', 499);
			if ( findResult == -1) testFailed(__LINE__);
			else testPassed("find function test 5");
		} catch (exception &e) {
			printException(e);
		}
		
	}

	cout << "\nresize function testing" << endl;
	{
		Array test1 = Array(50, 'f');
		Array test2 = Array(1000, 'b');

		if (test1.size() == 50) { testPassed("resize function test 1"); } else testFailed(__LINE__);
		if (test2.size() == 1000) {testPassed("resize function test 2"); } else testFailed(__LINE__);

		test1.resize(25);
		test2.resize(2000);

		if (test1.size() == 25) { testPassed("resize function test 3"); } else testFailed(__LINE__);
		if (test2.size() == 2000) { testPassed("resize function test 4"); } else testFailed(__LINE__);

		test1.resize(25);
		test2.resize(2000);

		if (test1.size() == 25) { testPassed("resize function test 5"); } else testFailed(__LINE__);
		if (test2.size() == 2000) { testPassed("resize function test 6"); } else testFailed(__LINE__);

	}
	
	cout << endl;

	system("PAUSE");

}