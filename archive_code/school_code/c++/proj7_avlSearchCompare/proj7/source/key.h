#ifndef KEY_H
#define KEY_H

#include "utility.h"

//header file for class Key.  Keys are
//just integers with overloaded comparison
//operators to count compares.

template <class T>
class Key
{
	public:
		static double comparisons;

		Key<T>();
		Key<T>(T);

		T the_key() const;

//		friend bool operator == <T> (const Key<T> &x, const Key<T> &y);

		template<T>
		friend ostream& operator << (ostream& outs, const Key<T> &x);

		template<T>
		friend bool operator == (const Key<T> &x, const Key<T> &y);

		template<T>
		friend bool operator > (const Key<T> &x, const Key<T> &y);

		template<T>
		friend bool operator < (const Key<T> &x, const Key<T> &y);

		template<T>
		friend bool operator >= (const Key<T> &x, const Key<T> &y);

		template<T>
		friend bool operator <= (const Key<T> &x, const Key<T> &y);

		template<T>
		friend bool operator != (const Key<T> &x, const Key<T> &y);


	private:
		T key;
};

#endif //KEY_H

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

template <class T>
double Key<T>::comparisons = 0;

/********************************************************************************************************
* FUNCTION TITLE: Constructor
*
* DESCRIPTION:	Sets the Key value to NULL, sets comparisons to 0
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template <class T>
Key<T>::Key()
{
	Key<T>::key=0;
}

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
template <class T>
Key<T>::Key(T x)
{
	Key<T>::key=x;
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
template <class T>
T Key<T>::the_key() const
{
	return Key<T>::key;
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

template <class T>
ostream& operator << (ostream& outs, const Key<T> &x)
{
	outs << x.the_key();
	return outs;
}

template <class T>
bool operator == (const Key<T> &x, const Key<T> &y)
{
	Key<T>::comparisons++;
	if(x.the_key() == y.the_key())
	{
		return true;
	}
	return false;
}

template <class T>
bool operator > (const Key<T> &x, const Key<T> &y)
{
	Key<T>::comparisons++;
	if(x.the_key() > y.the_key())
	{
		return true;
	}
	return false;
}

template <class T>
bool operator < (const Key<T> &x, const Key<T> &y)
{
	Key<T>::comparisons++;
	if(x.the_key() < y.the_key())
	{
		return true;
	}
	return false;
}

template <class T>
bool operator >= (const Key<T> &x, const Key<T> &y)
{
	Key<T>::comparisons++;
	if(x.the_key() >= y.the_key())
	{
		return true;
	}
	return false;
}

template <class T>
bool operator <= (const Key<T> &x, const Key<T> &y)
{
	Key<T>::comparisons++;
	if(x.the_key() <= y.the_key())
	{
		return true;
	}
	return false;
}

template <class T>
bool operator != (const Key<T> &x, const Key<T> &y)
{
	Key<T>::comparisons++;
	if(x.the_key() != y.the_key())
	{
		return true;
	}
	return false;
}
