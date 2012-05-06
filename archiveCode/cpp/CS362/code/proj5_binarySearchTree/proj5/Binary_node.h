/********************************************************************************************************
* TITLE: Binary Node
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 6 October 2011
*
* PURPOSE: Structure which may contain a value, a condition, or represent a separate data * structure
* (which could be a tree of its own). Each node in a tree has zero or more child nodes, which are below
* it in the tree (by convention, trees are drawn growing downwards). A node that has a child is called
* the child's parent node (or ancestor node, or superior). A node has at most one parent.
*
********************************************************************************************************/

#include "utility.h"

#ifndef BINARY_NODE_H
#define BINARY_NODE_H

/********************************************************************************************************
* STRUCTURE TITLE: dataStruct
*
* DESCRIPTION: Wrapper for node object
*
*********************************************************************************************************/

template <class Entry>
struct Binary_node {

   Entry data;						//information stored by the node
   Binary_node<Entry> *left;		//pointer to left child
   Binary_node<Entry> *right;		//pointer to right child

   Binary_node();					//constructor
   Binary_node(const Entry &x);		//constructor
};
#endif //BINARY_NODE_H

template <class Entry>
Binary_node<Entry>::Binary_node()
{
	data = (Entry)NULL;
	left= NULL;
	right = NULL;
}

template <class Entry>
Binary_node<Entry>::Binary_node(const Entry &x)
{
	data = x;
	left= NULL;
	right = NULL;
}
