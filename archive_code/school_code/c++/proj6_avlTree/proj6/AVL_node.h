#include "Binary_node.h"

#ifndef AVL_NODE_H
#define AVL_NODE_H

template <class Entry>
struct AVL_node: public Binary_node<Entry> {

	//    additional data member:
	Balance_factor balance;
	AVL_node<Entry> *left;		//pointer to left child
	AVL_node<Entry> *right;		//pointer to right child

	//    constructors:
	AVL_node();
	AVL_node(const Entry &x);

	//    overridden virtual functions:
	void set_balance(Balance_factor b);
	Balance_factor get_balance() const;

};

#endif //BINARY_NODE_H


template <class Entry>
AVL_node<Entry>::AVL_node()
//constructor
{
	balance = equal_height;
}

//Explicitly invoke the non-default binary node constructor
template <class Entry>
AVL_node<Entry>::AVL_node(const Entry &x):Binary_node<Entry>(x)
//constructor
{
	this->data = x;
	balance = equal_height;
}

template <class Entry>
void AVL_node<Entry>::set_balance(Balance_factor b)
{
	balance = b;
}

template <class Entry>
Balance_factor AVL_node<Entry>::get_balance() const
{
	return balance;
}
