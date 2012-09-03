/********************************************************************************************************
* TITLE: AVL Tree
*
* AUTHOR: Robert Nathan Boyd
*
* PURPOSE: Create a self balancing AVL tree data structure. Each node has at most two child nodes, distinguished
* as "left" and "right". Nodes with children are parent nodes, and child nodes may contain references
* to their parents. Outside the tree, there is often a reference * to the "root" node (the ancestor
* of all nodes), if it exists. Any node in the data structure can be * reached by starting at root node
* and repeatedly following references to either the left or right child.
*
* INCEPTION: 17 October 2011 RNB
*
*
********************************************************************************************************/

#include "Search_tree.h"

#ifndef AVL_TREE_H
#define ACL_TREE_H

template <class Entry>
class AVL_tree: public Search_tree<Entry> {

public:

   Error_code insert(const Entry &new_data);

   Error_code remove(const Entry &old_data);

   Error_code avl_insert(Binary_node<Entry> *&sub_root, const Entry &new_data, bool &taller);

   Error_code avl_remove(Binary_node<Entry> *&sub_root, const Entry &old_data, bool &shorter, string str_side);

   void graphic();
   //Post: Display a graphical Representation of a Binary Tree
   //Uses recursive_graphic

private: //  Add auxiliary function prototypes here.

   void rotate_left(Binary_node<Entry> *&sub_root);

   void rotate_right(Binary_node<Entry> *&sub_root);

   void left_balance(Binary_node<Entry> *&sub_root);

   void right_balance(Binary_node<Entry> *&sub_root);

   void sanity_check(Binary_node<Entry> *&sub_root);

   void recursive_graphic(Binary_node<Entry>* &sub_root, list<Entry> * & newVector);

};
#endif

/********************************************************************************************************
* FUNCTION TITLE: insert
*
* Post: If the key of new_data is already in the AVL_tree, a code of duplicate_error is returned.
* 	Otherwise, a code of success is returned and the Entry new_data is inserted into the tree in such a
* 	way that the properties of an AVL tree are preserved.
*
* Uses: avl_insert.
*
********************************************************************************************************/
template <class Entry>
Error_code AVL_tree<Entry>::insert(const Entry &new_data)
{
   bool taller;
   return avl_insert(this->root, new_data, taller);
}


/********************************************************************************************************
* FUNCTION TITLE: avl_insert
*
* Pre:  sub_root is either NULL or points to a subtree of the AVL_tree
*
* Post: If the key of new_data is already in the subtree, a code of duplicate_error is returned.
*   	 Otherwise, a code of success is returned and the Entry new_data is inserted into the subtree
*   	 in such a way that the properties of an AVL tree have been preserved. If the subtree is
*   	 increased in height, the parameter taller is set to true; otherwise it is set to false.
*
* Uses: Methods of struct AVL_node; functions avl_insert recursively, left_balance, and right_balance.
*
*********************************************************************************************************/

template <class Entry>
Error_code AVL_tree<Entry>::avl_insert(Binary_node<Entry> *&sub_root, const Entry &new_data, bool &taller)
{
   Error_code result = success;
   if (sub_root == NULL) {
      sub_root = new AVL_node<Entry>(new_data);
      taller = true;
   }
   else if (new_data == sub_root->data) {
      result = duplicate_error;
      taller = false;
   }
   else if (new_data < sub_root->data) {         //  Insert in left subtree.
      result = avl_insert(sub_root->left, new_data, taller);
      if (taller == true)
         switch (sub_root->get_balance()) {//  Change balance factors.
         case left_higher:
            left_balance(sub_root);
            taller = false;        //  Rebalancing always shortens the tree.
            break;
         case equal_height:
            sub_root->set_balance(left_higher);
            break;
         case right_higher:
            sub_root->set_balance(equal_height);
            taller = false;
            break;
         }
   }
   else {                                       //  Insert in right subtree.
      result = avl_insert(sub_root->right, new_data, taller);
      if (taller == true)
         switch (sub_root->get_balance()) {
         case left_higher:
            sub_root->set_balance(equal_height);
            taller = false;
            break;
         case equal_height:
            sub_root->set_balance(right_higher);
            break;
         case right_higher:
            right_balance(sub_root);
            taller = false;        //  Rebalancing always shortens the tree.
            break;
         }
   }

   return result;
}

/********************************************************************************************************
* FUNCTION TITLE: remove
*
* Purpose: Removals from an AVL tree can also require rebalancing to maintain the AVL property. The
* 	removal function uses a boolean flag of shorter that propagates up the tree until balance is
* 	restored.
*
* Uses avl_remove
*********************************************************************************************************/

template <class Entry>
Error_code AVL_tree<Entry>::remove(const Entry &old_data)
{
	bool shorter = false;
	return avl_remove(this->root, old_data, shorter, "");
}

/********************************************************************************************************
* FUNCTION TITLE: avl_remove
*
* Purpose: Removals from an AVL tree can also require rebalancing to maintain the AVL property. The
* 	removal function uses a boolean flag of shorter that propagates up the tree until balance is
* 	restored.
*
* Uses avl_remove
*********************************************************************************************************/

template <class Entry>
Error_code AVL_tree<Entry>::avl_remove(Binary_node<Entry> * & sub_root, const Entry & old_data, bool & shorter, string str_side)
{

	if (sub_root == NULL){
		shorter = false;
		return not_present;
	}
	else if (old_data < sub_root->data){
		return avl_remove(sub_root->left, old_data, shorter, "left");
	}
	else if (old_data > sub_root->data){
		return avl_remove(sub_root->right, old_data, shorter, "right");
	}
	else if (old_data == sub_root->data){

		Binary_node<Entry> *to_delete = sub_root;

		if (sub_root->right == NULL)
			sub_root = sub_root->left;
		else if (sub_root->left == NULL)
			sub_root = sub_root->right;
		else
		{
			to_delete = sub_root->left;
			Binary_node<Entry> *parent = sub_root;

			while (to_delete->right != NULL){
				parent = to_delete;
				to_delete = to_delete->right;
			}
			sub_root->data = to_delete->data;
			if (parent == sub_root)
				sub_root->left = to_delete->left;
			else
				parent->right = to_delete->left;
			shorter = true;
		}
		delete to_delete;
	}

	if (shorter == true)
	{

		int left_height = recursive_height(sub_root->left);
		int right_height = recursive_height(sub_root->right);

		//Case 1: If the balance factor at p is equal, then set it to left higher or right higher,
		//depending on whether the removal occurred in the right or left subtree, respectively,
		//and stop the shorter signal by setting it to false.

		if(sub_root->get_balance() == equal_height){
			if(str_side == "left")
				sub_root->set_balance(left_higher);
			else
				sub_root->set_balance(right_higher);

			shorter = false;

		}

		//Case 2: If the balance factor at p is not equal and the removal occurred in the taller
		//subtree, then set p's balance factor to equal.  But the tree rooted at p has become shorter
		//so do not reset the shorter signal, let it propagate to p's parent node.

		else
		{
			if(str_side == "left" && left_height > right_height)
				sub_root->set_balance(equal_height);
			else if(str_side == "right" && right_height >left_height)
				sub_root->set_balance(equal_height);


			//Case 3: The balance factor at p is not equal and the removal occurred in the shorter
			//subtree.  Node p is now double-weighted and some rebalancing needs to be done.  As was
			//true with insertions, what to do depends on the balance factor of a child q of p, but
			//this time q is the root of the tree where the activity (removal) did NOT take place.

			else{
				Binary_node<Entry> * child = new Binary_node<Entry>;
				if(str_side == "left")
					child = sub_root->left;
				else
					child = sub_root->right;

				//Subcase 1:  q has balance factor of equal.  Do a single rotation (left or right,
				//depending on whether q is the right or left child of p) and adjust the balance factors
				//of p and q. All nodes are now OK and the overall height of the tree has not been changed,
				//so set the shorter signal to false.

				switch(child->get_balance()){
					case equal_height:
						if(str_side == "left")
							rotate_right(child);
						else
							rotate_left(child);
						shorter = false;
						break;
					case right_higher:
						//Subcase 2:  q leans in the same direction as p.  As in Subcase 1, a single rotation
						//of q over p, with adjustments to the balance factors of p and q, will solve the
						//rebalancing problem, but in this case the overall tree height has been shortened,
						//so leave the shorter signal as true.
						if(str_side == "right"){
							rotate_left(child);
						}

						//Subcase 3:  q leans in the opposite direction from p.  A double rotation is required.
						//Take the root r of q's taller subtree and rotate r first over q and then over p.
						//Adjust the balance factors of p and q; r will have equal balance.  The overall tree
						//height has been shortened, so leave the shorter signal as true.
						else{
							left_balance(sub_root);
						}
						break;
					case left_higher:
						//Subcase 2:  q leans in the same direction as p.  As in Subcase 1, a single rotation
						//of q over p, with adjustments to the balance factors of p and q, will solve the
						//rebalancing problem, but in this case the overall tree height has been shortened,
						//so leave the shorter signal as true.
						if(str_side == "left"){
							rotate_right(child);
						}
						//Subcase 3:  q leans in the opposite direction from p.  A double rotation is required.
						//Take the root r of q's taller subtree and rotate r first over q and then over p.
						//Adjust the balance factors of p and q; r will have equal balance.  The overall tree
						//height has been shortened, so leave the shorter signal as true.
						else{
							right_balance(sub_root);
						}
						break;
				}

			}

		}

	}

	return success;
}

/*
Pre:  sub_root points to a subtree of the AVL_tree.
      This subtree has a nonempty right subtree.
Post: sub_root is reset to point to its former right child, and the former
      sub_root node is the left child of the new sub_root node.
*/
template <class Entry>
void AVL_tree<Entry>::rotate_left(Binary_node<Entry> *&sub_root)
{
   if (sub_root == NULL || sub_root->right == NULL)     //  impossible cases
      cout << "WARNING: program error detected in rotate_left" << endl;
   else {
      Binary_node<Entry> *right_tree = sub_root->right;
      sub_root->right = right_tree->left;
      right_tree->left = sub_root;
      sub_root = right_tree;
   }
}

/*
Pre:  sub_root points to a subtree of the AVL_tree.
      This subtree has a nonempty right subtree.
Post: sub_root is reset to point to its former right child, and the former
      sub_root node is the left child of the new sub_root node.
*/
template <class Entry>
void AVL_tree<Entry>::rotate_right(Binary_node<Entry> *&sub_root)
{
   if (sub_root == NULL || sub_root->left == NULL)     //  impossible cases
      cout << "WARNING: program error detected in rotate_right" << endl;
   else {
      Binary_node<Entry> *left_tree = sub_root->left;
      sub_root->left = left_tree->right;
      left_tree->right = sub_root;
      sub_root = left_tree;
   }
}

/*
Pre:  sub_root points to a subtree of an AVL_tree that
      is doubly unbalanced on the right.
Post: The AVL properties have been restored to the subtree.
Uses: Methods of struct AVL_node;
      functions  rotate_right and rotate_left.
*/
template <class Entry>
void AVL_tree<Entry>::right_balance(Binary_node<Entry> *&sub_root)
{
   Binary_node<Entry> *&right_tree = sub_root->right;
   switch (right_tree->get_balance()) {
   case right_higher:                            //  single rotation left
      sub_root->set_balance(equal_height);
      right_tree->set_balance(equal_height);
      rotate_left(sub_root);
      break;
   case equal_height:  //  impossible case
      cout << "WARNING: program error detected in right_balance" << endl;
      break;
   case left_higher:                            //  double rotation left
      Binary_node<Entry> *sub_tree = right_tree->left;
      switch (sub_tree->get_balance()) {
      case equal_height:
         sub_root->set_balance(equal_height);
         right_tree->set_balance(equal_height);
         break;
      case left_higher:
         sub_root->set_balance(equal_height);
         right_tree->set_balance(right_higher);
         break;
      case right_higher:
         sub_root->set_balance(left_higher);
         right_tree->set_balance(equal_height);
         break;
      }
      sub_tree->set_balance(equal_height);
      rotate_right(right_tree);
      rotate_left(sub_root);
      break;
   }
}

/*
Pre:  sub_root points to a subtree of an AVL_tree that
      is doubly unbalanced on the right.
Post: The AVL properties have been restored to the subtree.
Uses: Methods of struct AVL_node;
      functions  rotate_right and rotate_left.
*/
template <class Entry>
void AVL_tree<Entry>::left_balance(Binary_node<Entry> *&sub_root)
{
   Binary_node<Entry> *&left_tree = sub_root->left;
   switch (left_tree->get_balance()) {
   case left_higher:                            //  single rotation left
      sub_root->set_balance(equal_height);
      left_tree->set_balance(equal_height);
      rotate_right(sub_root);
      break;
   case equal_height:  //  impossible case
      cout << "WARNING: program error detected in left_balance" << endl;
      break;
   case right_higher:                            //  double rotation left
      Binary_node<Entry> *sub_tree = left_tree->right;
      switch (sub_tree->get_balance()) {
      case equal_height:
         sub_root->set_balance(equal_height);
         left_tree->set_balance(equal_height);
         break;
      case right_higher:
         sub_root->set_balance(equal_height);
         left_tree->set_balance(left_higher);
         break;
      case left_higher:
         sub_root->set_balance(right_higher);
         left_tree->set_balance(equal_height);
         break;
      }
      sub_tree->set_balance(equal_height);
      rotate_left(left_tree);
      rotate_right(sub_root);
      break;
   }
}

/*
 * Used to troubleshoot AVL tree removals
 *
 */

template <class Entry>
void AVL_tree<Entry>::sanity_check(Binary_node<Entry> *&sub_root)
{
	if(sub_root == NULL)
		return;

	sanity_check(sub_root->left);
	sanity_check(sub_root->right);

	if(recursive_height(sub_root->left) > recursive_height(sub_root->right) && sub_root->get_balance() != left_higher)
		sub_root->set_balance(left_higher);
	else if(recursive_height(sub_root->left) < recursive_height(sub_root->right) && sub_root->get_balance() != right_higher)
		sub_root->set_balance(right_higher);
	else if(recursive_height(sub_root->left) == recursive_height(sub_root->right) && sub_root->get_balance() != equal_height)
		sub_root->set_balance(equal_height);

	return;

}

/*
 * Uses Recursive_graphic
 */

template <class Entry>
void AVL_tree<Entry>::graphic()
{

	if(this->size() < 15)
	{
		cout << "filling tree with values 0-14" << endl;

		for(int i = 0; i < 15; i++)
		{
			insert(Entry(i));
		}

	}

	list<Entry> * newList = new list<Entry>();
	recursive_graphic(this->root, newList);

	Entry arr [15];

	for(int i = 0; i < 15; i++)
	{
		arr [i] = newList->front();
		newList->pop_front();
	}

	cout <<"\n                            " << arr [0] << "                                " << endl;
	cout <<"\n               " << arr [1] << "                         " << arr [8] << "                     " << endl;
	cout <<"\n         " << arr [2] << "           " << arr [5] << "               " << arr [9] << "         " << arr [12] << "                " << endl;
	cout <<"\n     " << arr [3] << "      " << arr [4] << "     " << arr [6] << "     " << arr [7] << "         " << arr [10] << "    " << arr [11] << "    " << arr [13] << "    " << arr [14] << "           " << endl;

}

/*
 * Fills a list with tree values for printing in the graphic
 */

template <class Entry>
void AVL_tree<Entry>::recursive_graphic(Binary_node<Entry>* &sub_root, list<Entry> * & newVector)
{
	if(sub_root == NULL)
		return;
	else
		newVector->push_back(sub_root->data);

	recursive_graphic(sub_root->left, newVector);
	recursive_graphic(sub_root->right, newVector);

}
