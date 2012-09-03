/********************************************************************************************************
* TITLE: Binary Tree
*
* AUTHOR: Robert Nathan Boyd
*
* PURPOSE: A tree data structure in which each node has at most two child nodes, usually distinguished
* as "left" and "right". Nodes with children are parent nodes, and child nodes may contain references
* to their parents. Outside the tree, there is often a reference * to the "root" node (the ancestor
* of all nodes), if it exists. Any node in the data structure can be * reached by starting at root node
* and repeatedly following references to either the left or right child.
*
* INCEPTION: 6 October 2011
*
* MODIFIED: 23 October 2011 Added display graphic functionality RNB
*
********************************************************************************************************/

#include "AVL_node.h"
#include <list>

#ifndef BINARY_TREE_H
#define BINARY_TREE_H

template <class Entry>
class Binary_tree {

public:

   Binary_tree();

   Binary_tree(Binary_node<Entry>* & newNode);

   bool empty() const;
   //Post: A result of true is returned if the binary tree is empty.
   //Otherwise, false is returned.

   void preorder(void (*visit)(Entry &));
   //Post: The tree has been traversed in preorder sequence.
   //Uses: The function recursive_preorder

   void inorder(void (*visit)(Entry &));
   //Post: The tree has been traversed in inorder sequence.
   //Uses: The function recursive_inorder

   void postorder(void (*visit)(Entry &));
   //Post: The tree has been traversed in postorder sequence.
   //Uses: The function recursive_postorder

   void level_order(void (*visit) (Entry &));
   //Post: The tree has been traversed in level order sequence.
   //Uses: STL queue class

   int size() const;
   //Post: Returns the number of nodes in the tree
   //Uses: The function recursive_size

   void clear();
   //Post: All nodes of tree have been deleted, root set to NULL
   //Uses:  The function recursive_clear

   int height() const;
   //Post: Returns the height of the tree,
	 //where empty tree has height 0, one-node
	 //tree has height 1, etc.
   //Uses: The function recursive_height

   void insert(const Entry &);
   //Pre:  Data of type Entry has been passed for insertion -
   //note that the prototype need not include parameter names,
   //only data types
   //Post: Parameter has been inserted into the shortest
   //subtree or into the left subtree if equal height
   //Uses: The function recursive_insert

   Binary_tree (const Binary_tree<Entry>* &original);
   //copy constructor
   //Post: creates a deep copy of tree original
   //Uses:  The function recursive_copy

   Binary_tree & operator =(const Binary_tree<Entry> &original);
   // overloaded assignment operator
   //Post: The calling tree is reset as a deep copy of tree pointed to by original
   //Uses:  The function recursive_copy

   ~Binary_tree();
   //destructor

protected:

   void recursive_copy(Binary_node<Entry> *treePtr, Binary_node<Entry> *& newTreePtr) const;

   void recursive_clear(Binary_node<Entry>* &sub_root);

   void recursive_insert(const Entry &key, Binary_node<Entry>* &leaf) const;

   int recursive_size(Binary_node<Entry>* &sub_root) const;

   int recursive_height(Binary_node<Entry>* &sub_root) const;

   void recursive_preorder(Binary_node<Entry>* &sub_root, void (*visit)(Entry &));

   void recursive_inorder(Binary_node<Entry>* &sub_root, void (*visit)(Entry &));

   void recursive_postorder(Binary_node<Entry>* &sub_root, void (*visit)(Entry &));

   Binary_node<Entry>* recursive_copy(Binary_node<Entry> *sub_root);
   //Pre: sub_root is NULL or points to a subtree of the Binary_tree
   //Post: returns a pointer to a deep copy of tree pointed to by sub_root

   //Single member variable
   Binary_node<Entry> *root;
};

#endif //end Binary_tree

/********************************************************************************************************
* FUNCTION TITLE: Binary_tree
*
* DESCRIPTION:	Constructor, initializes root to null
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Binary_tree<Entry>::Binary_tree()
{
    root = NULL;

}

/********************************************************************************************************
* FUNCTION TITLE: Binary_tree
*
* DESCRIPTION:	Constructor, initializes root to null
*
* @param const Binary_tree<Entry>* &original		copies a new tree with the original node as root
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Binary_tree<Entry>::Binary_tree (const Binary_tree<Entry>* &original)
{
	root = recursive_copy(original->root);
}

/********************************************************************************************************
* FUNCTION TITLE:~Binary_tree
*
* DESCRIPTION: Destructor, calls the clear function
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Binary_tree<Entry>::~Binary_tree()
{
    clear();
}

/********************************************************************************************************
* FUNCTION TITLE: operator
*
* DESCRIPTION: Overidden assignment operator, ensures that only one Binary tree exists  by using the clear
* call
*
* @param Binary_tree<Entry>& original  	original tree to make a copy of
*
* @return *this 						new tree containing the same nodes as the origional
*
********************************************************************************************************/

template<class Entry>
Binary_tree<Entry> & Binary_tree<Entry>::operator =(const Binary_tree<Entry> &original)
// overloaded assignment operator
//Post: The calling tree is reset as a deep copy of tree pointed to by original
//Uses: The function recursive_copy
{
	if (this != &original)	//"this" is pointer to calling object //"*this" is calling object
	{
		clear();	//empty the calling tree
		root= recursive_copy(original.root);
		return *this;
	}
	else
		cout << "cannot assign tree to itself" << endl;
}

/********************************************************************************************************
* FUNCTION TITLE: recursive_copy
*
* DESCRIPTION:	Creates a new Binary tree using recursionPre: sub_root is NULL or points to a subtree of
* 				the Binary_tree Post: returns a pointer to a deep copy of tree pointed to by sub_root
*
* @param    	Binary_node<Entry> *original 		orignial node to copy to new tree
* @param  		Binary_node<Entry> *& newTreePtr	new binary tree to return to copy function
*
* @return   	Function updates tree pointer passed as parameter
*
********************************************************************************************************/

template<class Entry>
Binary_node<Entry>*  Binary_tree<Entry>::recursive_copy(Binary_node<Entry>* sub_root)
//Pre: sub_root is NULL or points to a subtree of the Binary_tree
//Post: returns a pointer to a deep copy of tree pointed to by sub_root
{
	if (sub_root!= NULL)
	{
		Binary_node<Entry>* new_copy;   //new_copy is a pointer to a node
		new_copy = new Binary_node<Entry>;  //give new_copy something to point to
		new_copy->data = sub_root->data;  //copy the root data
		new_copy->left = recursive_copy(sub_root->left);   //copy left subtree
		new_copy->right = recursive_copy (sub_root->right); //copy right subtree
		return new_copy;
	}
	else
		return NULL;
}

/********************************************************************************************************
* FUNCTION TITLE: clear
*
* DESCRIPTION:	destroys recursively deallocates all nodes in the tree, uses teh recursive clear function
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::clear()
{
	recursive_clear(root);
	root = NULL;
}

/********************************************************************************************************
* FUNCTION TITLE: recursive_clear
*
* DESCRIPTION: 	Post: All nodes of tree have been deleted, root set to NULL Uses: The function
* 				recursive_clear
*
* @param    	Binary_node<Entry>* &sub_root node whose children will be deleted.
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::recursive_clear(Binary_node<Entry>* &sub_root)
{
	if(sub_root != NULL) {
		recursive_clear(sub_root->left);
		recursive_clear(sub_root->right);
		delete sub_root;
		sub_root = NULL;
	}
}
//Post: All nodes of tree have been deleted, root set to NULL
//Uses:  The function recursive_clear

/********************************************************************************************************
* FUNCTION TITLE: size
*
* DESCRIPTION: 	Post: Returns the number of nodes in the tree Uses: The function recursive_size
*
* @param NA
*
* @return   	integer representing the number of nodes in the tree
*
********************************************************************************************************/

template <class Entry>
int Binary_tree<Entry>::size() const
{
	if(root == NULL)
		return 0;
	else
		return 1 + recursive_size( root->left ) +  recursive_size( root->right );
}
//Post: Returns the number of nodes in the tree
//Uses: The function recursive_size

/********************************************************************************************************
* FUNCTION TITLE: recursive_size
*
* DESCRIPTION: Post: Returns the number of nodes in the tree Uses: The function recursive_size
*
* @param NA  Binary_node<Entry>* &sub_root	node whose children will be counted
*
* @return NA	integre representing the number of nodes in the tree, not counting the root
*
********************************************************************************************************/

template <class Entry>
int Binary_tree<Entry>::recursive_size(Binary_node<Entry>* &sub_root) const
{
	if(sub_root == NULL)
		return 0;
	else
		return recursive_size(sub_root->left) + 1 + recursive_size(sub_root->right);

}

/********************************************************************************************************
* FUNCTION TITLE: level_order
*
* DESCRIPTION:	 First do an inorder traversal on the left subtree, then visit the root, then do an
* 				 inorder traversal on the right subtree.
*
* @param NA		void (*visit) (Entry &)
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::level_order(void (*visit) (Entry &))
{
	if(empty())
	{
		cout << "Tree is empty " << endl;
		return;
	}

	cout << "level order traversal" << endl;

	queue<Binary_node<Entry> > newQueue;
    Binary_node<Entry> *newNode = new Binary_node<Entry>();

    newQueue.push(*root);

	while (!newQueue.empty()) {

		*newNode = newQueue.front();
		newQueue.pop();
		(*visit)(newNode->data);

		if (newNode->left != NULL)
			newQueue.push(*newNode->left);

		if (newNode->right != NULL)
			newQueue.push(*newNode->right);

	}

}



/********************************************************************************************************
* FUNCTION TITLE: postorder
*
* DESCRIPTION: 	First do a postorder traversal on the left subtree, then do a postorder traversal on the
* 				right subtree, then visit the root. //Post: The tree has been traversed in postorder sequence.
*				The function recursive_postorder
*
*
* @param NA	void (*visit) (Entry &)
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::postorder(void (*visit)(Entry &))
{
	if(!empty())
	{
		cout << "postorder traversal" << endl;
		recursive_postorder(root, visit);
	}
	else
		cout << "Tree is empty " << endl;
}
//Post: The tree has been traversed in postorder sequence.
//Uses: The function recursive_postorder

/********************************************************************************************************
* FUNCTION TITLE: recursive_postorder
*
* DESCRIPTION: see postorder function
*
* @param void (*visit) (Entry &)
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::recursive_postorder(Binary_node<Entry>* &sub_root, void (*visit)(Entry &))
{
	if(sub_root == NULL)
		return;

	recursive_postorder(sub_root->left, visit);
	recursive_postorder(sub_root->right, visit);
	(*visit)(sub_root->data);

}

/********************************************************************************************************
* FUNCTION TITLE: inorder
*
* DESCRIPTION: Post: The tree has been traversed in inorder sequence. Uses: The function recursive_inorder
*
* @param NA void (*visit) (Entry &)
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::inorder(void (*visit)(Entry &))
{
	if(!empty())
	{
		cout << "inorder traversal" << endl;
		recursive_inorder(root, visit);
	}

	else
		cout << "Tree is empty " << endl;

}
//Post: The tree has been traversed in inorder sequence.
//Uses: The function recursive_inorder

/********************************************************************************************************
* FUNCTION TITLE: recursive_inorder
*
* DESCRIPTION: See inorder
*
* @param Binary_node<Entry>* &sub_root
* @param void (*visit)(Entry &)
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::recursive_inorder(Binary_node<Entry>* &sub_root, void (*visit)(Entry &))
{
	if(sub_root == NULL)
		return;

	recursive_inorder(sub_root->left, visit);
	(*visit)(sub_root->data);
	recursive_inorder(sub_root->right, visit);

}

/********************************************************************************************************
* FUNCTION TITLE: preorder
*
* DESCRIPTION: First visit the root, then do a preorder traversal on the left subtree, then do a preorder
* traversal on the right subtree.
*
* @param NA void (*visit) (Entry &)
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::preorder(void (*visit)(Entry &))
{
	if(!empty())
	{
		cout << "preorder traversal" << endl;
		recursive_preorder(root, visit);
	}
	else
		cout << "Tree is empty " << endl;
}
//Post: The tree has been traversed in preorder sequence.
//Uses: The function recursive_preorder

/********************************************************************************************************
* FUNCTION TITLE: recursive_preorder
*
* DESCRIPTION: Post: The tree has been traversed in preorder sequence. Uses: The function recursive_preorder
*
* @param Binary_node<Entry>* &sub_root
* @parma void (*visit)(Entry &)
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::recursive_preorder(Binary_node<Entry>* &sub_root, void (*visit)(Entry &))
{
	if(sub_root == NULL)
		return;

	(*visit)(sub_root->data);

	recursive_preorder(sub_root->left, visit);
	recursive_preorder(sub_root->right, visit);

}

/********************************************************************************************************
* FUNCTION TITLE: empty
*
* DESCRIPTION: Post: A result of true is returned if the binary tree is empty.Otherwise, false is returned.
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
bool Binary_tree<Entry>::empty() const
{
	if(root == NULL)
		return true;

	return false;
}
//Post: A result of true is returned if the binary tree is empty.
//Otherwise, false is returned.

/********************************************************************************************************
* FUNCTION TITLE: insert
*
* DESCRIPTION: Inserts a new node into the binary tree, uses the function recursive_insert
*
* @param NA	const Entry &x	data of the new node
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::insert(const Entry &x)
{
    if(root == NULL)
    {
        Binary_node<Entry> *newNode = new Binary_node<Entry>(x);
        root = newNode;
    }
    else
        recursive_insert(x, root);

}

/********************************************************************************************************
* FUNCTION TITLE: recursive_insert
*
* DESCRIPTION: Inserts the node at the leftmost, highest position
*
* @param const Entry &key
* @param Binary_node<Entry>* &leaf
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
void Binary_tree<Entry>::recursive_insert(const Entry &key, Binary_node<Entry>* &sub_root) const
{
   if (sub_root == NULL) {
	  sub_root = new Binary_node<Entry>(key);
   }
   else if (key < sub_root->data)
	  return recursive_insert(key, sub_root->left);
   else if (key > sub_root->data)
	  return recursive_insert(key, sub_root->right);

}

/********************************************************************************************************
* FUNCTION TITLE: height
*
* DESCRIPTION: returns the height of the tree, uses the function recursive_height
*
* @param NA
*
* @return integer representing height of the tree
*
********************************************************************************************************/

template <class Entry>
int Binary_tree<Entry>::height() const
{
    if(empty())
        return 0;
    else
    	return 1 + max( recursive_height(root->left), recursive_height(root->right) );

}

/********************************************************************************************************
* FUNCTION TITLE: recursive_height
*
* DESCRIPTION: returns the height of the tree, not counting the root.
*
* @param  Binary_node<Entry>* &sub_root
*
* @return integer representing height of the tree
*
********************************************************************************************************/

template <class Entry>
int Binary_tree<Entry>::recursive_height(Binary_node<Entry>* &sub_root) const
{
    if(sub_root == NULL)
        return 0;
    else
        return 1 + max ( recursive_height( sub_root->left ), recursive_height( sub_root->right ) );
}
