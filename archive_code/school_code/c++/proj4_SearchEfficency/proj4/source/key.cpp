/********************************************************************************************************
* PROJECT TITLE: Project 4
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 21 September 2011
*
* PURPOSE: class Key.  Keys are just integers with overloaded comparison operators to count compares.
* *
********************************************************************************************************/

#include "key.h"
#include "utility.h"

using namespace std;

double Key::comparisons = 0;

/********************************************************************************************************
* FUNCTION TITLE: Constructor
*
* DESCRIPTION:	Sets the Key value, sets comparisons to 0
*
* @param int x value of the member variable Key
*
* @return NA
*
********************************************************************************************************/

Key::Key(int x)
{
	Key::key=x;
	comparisons = 0;
}

/********************************************************************************************************
* FUNCTION TITLE: the_key
*
* DESCRIPTION: Accessor function - to inspect key value
*
* @param NA
*
* @return int Key::key the value of the Key classes member variable
*
********************************************************************************************************/

int Key::the_key() const
{
	return Key::key;
}

/********************************************************************************************************
* FUNCTION TITLE: Overloaded Operators
*
* DESCRIPTION: These operators have been overloaded to compare two Keys key values against each other and
* increment the comparisons variable
*
* @param const Key &x 	Left value to be compared
* @param const Key &y 	Right value to be compared
*
* @return true or false depending on the comparison of the two parameters
*
********************************************************************************************************/

bool operator ==(const Key &x, const Key &y)
{
	Key::comparisons++;
	if(x.the_key() == y.the_key())
	{
		return true;
	}
	return false;
}

bool operator > (const Key &x, const Key &y)
{
	Key::comparisons++;
	if(x.the_key() > y.the_key())
	{
		return true;
	}
	return false;
}

bool operator < (const Key &x, const Key &y)
{
	Key::comparisons++;
	if(x.the_key() < y.the_key())
	{
		return true;
	}
	return false;
}

bool operator >= (const Key &x, const Key &y)
{
	Key::comparisons++;
	if(x.the_key() >= y.the_key())
	{
		return true;
	}
	return false;
}

bool operator <= (const Key &x, const Key &y)
{
	Key::comparisons++;
	if(x.the_key() <= y.the_key())
	{
		return true;
	}
	return false;
}

bool operator != (const Key &x, const Key &y)
{
	Key::comparisons++;
	if(x.the_key() != y.the_key())
	{
		return true;
	}
	return false;
}

