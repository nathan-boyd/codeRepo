// -*- C++ -*-
// $Id: Array.inl 820 2011-01-17 15:30:41Z hillj $

// Honor Pledge:
//
// I pledge that I have neither given nor received any help
// on this assignment.

//
// size
//
inline
size_t Array::size (void) const
{
	return Array::cur_size_;
}

//
// max_size
//
inline
size_t Array::max_size (void) const
{
	return Array::max_size_;
}

<<<<<<< HEAD:liveCode/cs450/assignment1/Array.inl
//
// set_size
//
inline
void Array::set_size (size_t new_size) 
{
	Array::cur_size_ = new_size;
}

//
// set_max_size
//
inline
void Array::set_max_size (size_t new_size)
{
	Array::max_size_ = new_size;
}
=======
>>>>>>> archived previous semester:archiveCode/cpp/cs450/assignent1Retouched/Array.inl
