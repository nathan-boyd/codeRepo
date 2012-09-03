// $Id: Array.cpp 820 2011-01-17 15:30:41Z hillj $

// Honor Pledge:
//
// I pledge that I have neither given nor receieved any help
// on this assignment.

#include "Array.h"
#include "Array.inl"
#include <stdexcept>

// Robert, please do not import all the symbols from the std:: namespace
// into the global namespace. This is polluting the global namespace and 
// can result in symbol clashes. Instead, use std::out_of_range (), or 
// std::cout.

// RNB CHANGED to include just std::out_of_range
using std::out_of_range;

//
// Array
//
Array::Array (void)
// Robert, please initialize all member variables in the base member
// initialization section of the class.

// RNB CHANGED initialized member variables in the base member section
:   cur_size_ (10),
    max_size_ (10),
    data_ (new char[10])
{

    /* RNB CHANGED commented out old code
    //arbitrary length for array size
    int length		= 32;
    Array::data_	= new char[length];
    */

  // Robert, please just access cur_size_ and max_size_ directly since
  // set_size () and set_max_size () are really not adding any value
  // to your code. All it does is add more confusion and levels of 
  // indirection, which is a bad programming style and habit to have.

    /* RNB CHANGED no longer using set_size() or set_max_size()
	set_size(length);
	set_max_size(length);
    */
}

//
// Array (size_t)
//
Array::Array (size_t length)
// Robert, please initialize all member variables in the base member
// initialization section of the class.

// RNB CHANGED initialized member variables in the base member section
:   cur_size_ (length),
    max_size_ (length),
    data_ (new char[length])

{
  // Robert, please just access cur_size_ and max_size_ directly since
  // set_size () and set_max_size () are really not adding any value
  // to your code. All it does is add more confusion and levels of 
  // indirection, which is a bad programming style and habit to have.

    /* RNB CHANGED Commented out old code
	set_size(length);
	set_max_size(length);
	Array::data_ = new char[length];
    */
}

//
// Array (size_t, char)
//
Array::Array (size_t length, char fill)
// Robert, please initialize all member variables in the base member
// initialization section of the class.

// RNB CHANGED initialized member variables in the base member section
:   cur_size_ (length),
    max_size_ (length),
    data_ (new char[length])
{
  // Robert, please just access cur_size_ and max_size_ directly since
  // set_size () and set_max_size () are really not adding any value
  // to your code. All it does is add more confusion and levels of 
  // indirection, which is a bad programming style and habit to have.
    
    /* RNB CHANGED Commented out old code
	set_size(length);
	set_max_size(length);
	Array::data_ = new char[length];
    */

	Array::fill(fill);
}

//
// Array (const Array &)
//
Array::Array (const Array & array)
// Robert, please initialize all member variables in the base member
// initialization section of the class.

// RNB CHANGED initialized member variables in the base member section
:   cur_size_ (array.cur_size_),
    max_size_ (array.max_size_),
    data_ (new char[array.max_size_])

{
  // Robert, please just access cur_size_ and max_size_ directly since
  // set_size () and set_max_size () are really not adding any value
  // to your code. All it does is add more confusion and levels of 
  // indirection, which is a bad programming style and habit to have.

    /* RNB CHANGED Commented out old code
	set_size(array.size());
	set_max_size(array.max_size());
	data_ = new char [max_size()];
    */

	//fill this array with elements from the parameter array
	for (size_t i = 0; i < max_size(); i++)
	{
    // Robert, I would access data_ directly since right now you are doing
    // an extra bounds check for each index value, which is already going
    // to be in range because of the looping condition.

        //RNB CHANGED to access data_ directly
		data_[i] = array.data_[i];
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

  // Robert, please just access cur_size_ and max_size_ directly since
  // set_size () and set_max_size () are really not adding any value
  // to your code. All it does is add more confusion and levels of 
  // indirection, which is a bad programming style and habit to have.

    // RNB Changed accessing cur_size and max_size directly
    cur_size_ = rhs.cur_size_;
    max_size_ = rhs.max_size_;

    /* RNB CHanged commented out old code
	set_size(rhs.size());
	set_max_size(rhs.max_size());
    */

	// Robert, right now you have a memory leak because you are not
  // deleting the old array. You are just overwriting it with a new
  // memory location.

	//RNB Changed Deleting old array
	delete [] data_;
	data_ = new char [ max_size_];

	//fill this array with elements from the parameter array
    for (size_t i = 0; i < max_size(); i++)
	{
    // Robert, I would access data_ directly since right now you are doing
    // an extra bounds check for each index value, which is already going
    // to be in range because of the looping condition.
		set(i, rhs.data_[i]);
	}

	return *this;

}

//
// operator []
//
char & Array::operator [] (size_t index)
{
	if ( ! indexInRange(index))
	{
    // Robert, i would not recommend using the __FUNCTION__ macro in your
    // code because if it does not expand, then your message looks weird.
    // There are cases when it is warranted. In this situation, it does not
    // make much sense or add any real value to the code.

		//RNB stopped using __FUNCTION__ macro
		throw std::out_of_range("index out of range");
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
    // Robert, i would not recommend using the __FUNCTION__ macro in your
    // code because if it does not expand, then your message looks weird.
    // There are cases when it is warranted. In this situation, it does not
    // make much sense or add any real value to the code.

		//RNB stopped using __FUNCTION__ macro
		throw std::out_of_range("index out of range");
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
    // Robert, i would not recommend using the __FUNCTION__ macro in your
    // code because if it does not expand, then your message looks weird.
    // There are cases when it is warranted. In this situation, it does not
    // make much sense or add any real value to the code.

		//RNB stopped using __FUNCTION__macro
		throw std::out_of_range("index out of range");
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
    // Robert, i would not recommend using the __FUNCTION__ macro in your
    // code because if it does not expand, then your message looks weird.
    // There are cases when it is warranted. In this situation, it does not
    // make much sense or add any real value to the code.

		//RNB stopped using __FUNCTION__macro
		throw std::out_of_range("index out of range");
	} 

	data_[index] = value;
}

//
// resize
//
void Array::resize (size_t new_size)
{
  // Robert, I would recommend directly accessing cur_size_ and max_size_
  // directly since they are this classes member variables, and size ()
  // and max_size () are not really doing any computation.

	//RNB Changed to access cur_size_ directly

	if ( cur_size_ == new_size )
	{
		return;
	} 
	else if ( max_size_ > new_size ) 
	{
        //RNB Changed to access cur_size_ directly
		//set_size(new_size);

        cur_size_ = new_size;
	}
	else if ( max_size() < new_size ) 
	{
    // Robert, right now you have a memory leak because you are not deleting
    // the old array after making a deep copy of the old elements.

		char * tempArray = new char [new_size];
		tempArray = data_;
		
		for (size_t i = 0; i < max_size_; i++)
		{
      // Robert, I would access data_ directly since right now you are doing
      // an extra bounds check for each index value, which is already going
      // to be in range because of the looping condition.
			tempArray[i] = get(i);
		}


		//RNB Changed Deleting old array
		delete [] data_;
		data_ = new char [ max_size_];
		data_ = tempArray;

    // Robert, I would recommend directly accessing cur_size_ and max_size_
    // directly since they are this classes member variables, and size ()
    // and max_size () are not really doing any computation.

        /* RNB Commented out old code
		set_size(new_size);
		set_max_size(new_size);
        */

        //RNB Changed accessing cur_size_ and max_size_ directly
        cur_size_ = new_size;
        max_size_ = new_size;
	} 
}

//
// find (char)
//
int Array::find (char ch) const
{
	for (size_t i = 0; i < size(); i++)
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
		//RNB stopped using __FUNCTION__macro
		throw std::out_of_range("index out of range");
	} 
	
	for (size_t i = start; i < size(); i++)
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

	for (size_t i = 0; i < size(); i++)
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
  // Robert, it would be much cleaner to write: !(*this == rhs)

	//RNB CHANGED to professors suggestion
	if (!(* this == rhs))
	{
		return true;
	}
	else 
	{
		return false;
	}
}

//
// fill
//
void Array::fill (char ch)
{
    for (size_t i = 0; i < size(); i++)
	{
    // Robert, please access data_ directly. The reason is that you are doing
    // an extra bounds check for each element even when you know that your 
    // index will always be in bounds. 

		// RNB Commented out old code Array::set(i, ch);

        //RNB Changed to access directly
        data_[i] = ch;
        
	}
}

//
// indexInRange
//
const bool Array::indexInRange(const size_t index) const
{
  // Robert, please just write this as a single return statement, and not
  // as an if...else condition will return values in the brackets. It will
  // look much cleaner.

    //RNB Changed to remove if else with return statement outside of condition

    bool out_of_bounds = true;

	if (index < 0 || index >= max_size() || index >= size() )
	{
		out_of_bounds = false;
	} 
    
    return out_of_bounds;
}

