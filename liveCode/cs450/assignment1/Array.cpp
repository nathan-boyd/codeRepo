// $Id: Array.cpp 820 2011-01-17 15:30:41Z hillj $

// Honor Pledge:
//
// I pledge that I have neither given nor receieved any help
// on this assignment.

#include "Array.h"
#include "Array.inl"
#include <stdexcept>

#include <iostream>
using namespace std;

//
// Array
//
Array::Array (void)
{
	data_ = new char();

}

//
// Array (size_t)
//
Array::Array (size_t length)
{
	data_ = new char(length);
	Array::resize(length);

}

//
// Array (size_t, char)
//
Array::Array (size_t length, char fill)
{
	data_ = new char(length);
	Array::resize(length);
}

//
// Array (const Array &)
//
Array::Array (const Array & array)
{

}

//
// ~Array
//
Array::~Array (void)
{

}

//
// operator =
//
const Array & Array::operator = (const Array & rhs)
{
	return *this;
}

//
// operator []
//
char & Array::operator [] (size_t index)
{
	if (indexInRange(index)){
		char c = get(index);
		char &referenceToChar = c;
		return referenceToChar;
	} else {
		throw std::out_of_range(index + " is out of range");
	}
}

//
// operator [] 
//
const char & Array::operator [] (size_t index) const
{
	if (indexInRange(index)){
		char c = get(index);
		char &referenceToChar = c;
		return referenceToChar;
	} else {
		throw std::out_of_range(index + " is out of range");
	}
}

//
// get
//
char Array::get (size_t index) const
{
	char * workingPointer = data_;
	workingPointer += index;
	return * workingPointer;
}

//
// set
//
void Array::set (size_t index, char value)
{
	data_ += index;
	* data_ = value;
	data_ -= index;
}

//
// resize
//
void Array::resize (size_t new_size)
{
	if(Array::size() == new_size){
		return;
	} else if (Array::size() < new_size){
		Array::cur_size_ = new_size;
	} else if (Array::size() > new_size){
		Array::cur_size_ = new_size;;
	}
}

//
// find (char)
//
int Array::find (char ch) const
{
	return -1;
}

//
// find (char, size_t) 
//
int Array::find (char ch, size_t start) const
{
	return -1;
}

//
// operator ==
//
bool Array::operator == (const Array & rhs) const
{
	return false;
}

//
// operator !=
//
bool Array::operator != (const Array & rhs) const
{
	return false;
}

//
// fill
//
void Array::fill (char ch)
{
	for (int i = 0; i < Array::size(); i++)
	{
		Array::set(i, ch);
	}
}

const bool Array::indexInRange(const size_t index) const
{
	if (index > size() || index < 0){
		return false;
	} else {
		return true;
	}
}

