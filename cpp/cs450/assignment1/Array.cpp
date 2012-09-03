// $Id: Array.cpp 820 2011-01-17 15:30:41Z hillj $

// Honor Pledge:
//
// I pledge that I have neither given nor receieved any help
// on this assignment.

#include "Array.h"
#include "Array.inl"
#include <stdexcept>

using namespace std;

//
// Array
//
Array::Array (void)
{
	int length		= 32;
	Array::data_	= new char[length];

	set_size(length);
	set_max_size(length);

}

//
// Array (size_t)
//
Array::Array (size_t length)
{
	set_size(length);
	set_max_size(length);
	Array::data_ = new char[length];
}

//
// Array (size_t, char)
//
Array::Array (size_t length, char fill)
{
	set_size(length);
	set_max_size(length);
	Array::data_ = new char[length];

	Array::fill(fill);
}

//
// Array (const Array &)
//
Array::Array (const Array & array)
{
	set_size(array.size());
	set_max_size(array.max_size());

	data_ = new char [max_size()];

	for (int i = 0; i < max_size(); i++)
	{
		set(i, array.data_[i]);
	}
}

//
// ~Array
//
Array::~Array (void)
{
	delete [] data_;
}

//
// operator =
//
const Array & Array::operator = (const Array & rhs)
{
	if (this == &rhs)
	{
		return *this;
	}

	set_size(rhs.size());
	set_max_size(rhs.max_size());
	data_ = rhs.data_;

	return *this;

}

//
// operator []
//
char & Array::operator [] (size_t index)
{
	if ( ! indexInRange(index))
	{
		throw std::out_of_range("index out of range in " __FUNCTION__);
	} 

	return data_[index];
}

//
// operator [] 
//
const char & Array::operator [] (size_t index) const
{
	if ( ! indexInRange(index))
	{
		throw std::out_of_range("index out of range in " __FUNCTION__);
	} 

	return data_[index];
}

//
// get
//
char Array::get (size_t index) const
{
	if ( ! indexInRange(index))
	{
		throw std::out_of_range("index out of range in " __FUNCTION__);
	} 
	
	return data_[index];
}

//
// set
//
void Array::set (size_t index, char value)
{
	if ( ! indexInRange(index))
	{
		throw std::out_of_range("index out of range in " __FUNCTION__);
	} 

	data_[index] = value;
}

//
// resize
//
void Array::resize (size_t new_size)
{
	if ( size() == new_size )
	{
		return;
	} 
	else if ( max_size() > new_size ) 
	{
		set_size(new_size);
	}
	else if ( max_size() < new_size ) 
	{
		char * tempArray = new char [new_size];
		tempArray = data_;
		
		for (int i = 0; i < max_size(); i++)
		{
			tempArray[i] = get(i);
		}

		data_ = tempArray;

		set_size(new_size);
		set_max_size(new_size);
	} 
}

//
// find (char)
//
int Array::find (char ch) const
{
	for (int i = 0; i < size(); i++)
	{
		if (data_[i] == ch)
		{
			return i;
		}
	}

	return -1;
}

//
// find (char, size_t) 
//
int Array::find (char ch, size_t start) const
{
	if ( ! indexInRange(start) )
	{
		throw std::out_of_range("index out of range in " __FUNCTION__);
	} 
	
	for (int i = start; i < Array::cur_size_; i++)
	{
		if (data_[i] == ch)
		{
			return i;
		}
	}

	return -1;
}

//
// operator ==
//
bool Array::operator == (const Array & rhs) const
{
	if  (size() != rhs.size() || max_size() != rhs.max_size() )
	{
		return false;
	} 

	for (int i = 0; i < size(); i++)
	{
		if (data_[i] != rhs.data_[i])
		{
			return false;
		}
	}

	return true;

}

//
// operator !=
//
bool Array::operator != (const Array & rhs) const
{
	if (* this == rhs)
	{
		return false;
	}
	else 
	{
		return true;
	}
}

//
// fill
//
void Array::fill (char ch)
{
	for (int i = 0; i < size(); i++)
	{
		Array::set(i, ch);
	}
}

//
// indexInRange
//
const bool Array::indexInRange(const size_t index) const
{
	if (index < 0 || index >= max_size() || index >= size() )
	{
		return false;
	} 
	else 
	{
		return true;
	}
}

