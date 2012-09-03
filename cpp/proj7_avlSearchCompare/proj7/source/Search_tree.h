/********************************************************************************************************
* TITLE: Search Tree
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 6 October 2011
*
* PURPOSE: Binary Search tree is a binary tree in which each internal node x stores an element such that
* the element stored in the left subtree of x are less than or equal to x and elements stored in the right
* subtree of x are greater than or equal to x.
*
********************************************************************************************************/

#include "Binary_tree.h"

#ifndef SEARCH_TREE_H
#define SEARCH_TREE_H

template <class Entry>
class Search_tree: public Binary_tree<Entry> {

public:

  Search_tree();

   Error_code insert(const Entry &new_data);
	 /*
      Post::  If a an entry with a key matching that of new_data already
      belongs to the Search_tree, a code of duplicate_error is returned.
      Otherwise, the entry new_data is inserted into the tree in
      such a way that the properties of a binary search tree are preserved.
      and a code of success is returned.
      Uses:  recursive function search_and_insert
   */
   Error_code remove(const Entry &old_data);
	 /*
      Post: If a Entry with a key matching that of target belongs to the
      Search_tree, a code of success is returned and the corresponding node
      is removed from the tree.  Otherwise, a code of not_present is returned.
      Uses: recursive function search_and_destroy
   */

   Error_code tree_search(Entry &target) const;
	 /*
      Post: If there is an entry in the tree whose key matches that in target,
      the parameter target is replaced by the corresponding Entry from
      the tree and a code of success is returned.  Otherwise
      a code of not_present is returned.
      Uses: recursive function search_for_node
   */

private: //auxiliary function prototypes


Error_code search_and_insert(Binary_node<Entry> *&sub_root, const Entry &new_data);
	 /*
	   Pre: sub_root is either NULL or points to a subtree of a Search_tree
	   Post:  If the key of target is not in the subtree, it is inserted
		 in the proper spot and a value of success is returned. Otherwise
		 the key is already in the tree and a value of duplicate_error is
		 returned.
	 */

Error_code search_and_destroy(Binary_node<Entry>* &sub_root, const Entry &target);
   /*
      Pre:  sub_root is either NULL or points to a subtree of the Search_tree.
      Post: If the key of target is not in the subtree, a code of not_present
      is returned.  Otherwise, a code of success is returned and the subtree
      node containing target has been removed in such a way that
      the properties of a binary search tree have been preserved.
      Uses: Functions search_and_destroy recursively and remove_root
   */
Error_code remove_root(Binary_node<Entry> *&sub_root);
   /*
      Pre:  sub_root is either NULL or points to a subtree of the Search_tree.
      Post: If sub_root is NULL, a code of not_present is returned.
      Otherwise, the root of the subtree is removed in such a way
      that the properties of a binary search tree are preserved.
      The parameter sub_root is reset as the root of the modified subtree,
      and success is returned.
   */

Binary_node<Entry>* search_for_node(Binary_node<Entry>* sub_root, const Entry &target) const;
	 /*
	   Pre: sub_root is either NULL or points to a subtree of a Search_tree
	   Post:  If the key of target is not in the subtree, a result of NULL
	   is returned.  Otherwise, a pointer to the subtree node containing the
	   target is returned.
	 */

Entry recursive_max(Binary_node<Entry>* sub_root) const;
//Pre: sub_root is NULL or points to a subtree
//Post: returns the maximum valued node in the subtree

};
#endif //end Binary_tree

/********************************************************************************************************
* FUNCTION TITLE: Search_tree
*
* DESCRIPTION: Constructor
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Search_tree<Entry>::Search_tree()
{

}

/********************************************************************************************************
* FUNCTION TITLE:search_for_node
*
* DESCRIPTION: Search for a value in the tree
*
* @param NA Binary_node<Entry>* sub_root	node to check against
* @param NA const Entry &target				target for comparison
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Binary_node<Entry> *Search_tree<Entry>::search_for_node(Binary_node<Entry>* sub_root, const Entry &target) const
{
   if (sub_root == NULL || sub_root->data == target)
	   return sub_root;
   else if (sub_root->data < target)
      return search_for_node(sub_root->right, target);
   else
	   return search_for_node(sub_root->left, target);
}

/********************************************************************************************************
* FUNCTION TITLE:tree_search
*
* DESCRIPTION: 	Searches the tree for the target parameter Post: If there is an entry in the tree whose
*				key matches that in target, the parameter target is replaced by the corresponding entry 
*				from the tree and a code of success is returned.  Otherwise a code of not_present is returned.
*				Uses: function search_for_node
*
* @param Entry &target item to search for
*
* @return Error_code representing the success or fauilure of the search
*
********************************************************************************************************/

template <class Entry>
Error_code Search_tree<Entry>::tree_search(Entry &target) const
/*
Post: If there is an entry in the tree whose key matches that in target,
      the parameter target is replaced by the corresponding entry from
      the tree and a code of success is returned.  Otherwise
      a code of not_present is returned.
Uses: function search_for_node
*/
{
   Error_code result = success;
   Binary_node<Entry> *found = search_for_node(this->root, target);
   if (found == NULL)
      result = not_present;
   else
      target = found->data;
   return result;
}

/********************************************************************************************************
* FUNCTION TITLE:insert
*
* DESCRIPTION: uses search_and_insert
*
* @param const Entry &new_data
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Error_code Search_tree<Entry>::insert(const Entry &new_data)
{
   return search_and_insert(this->root, new_data);
}

/********************************************************************************************************
* FUNCTION TITLE:search_and_insert
*
* DESCRIPTION: 	determines if node with same data already exists, if it does returns, already exists, else 
*				creates a new node with that data
*
* @param Binary_node<Entry> *&sub_root, const Entry &new_data
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Error_code Search_tree<Entry>::search_and_insert(Binary_node<Entry> *&sub_root, const Entry &new_data)
{
   if (sub_root == NULL) {
      sub_root = new Binary_node<Entry>(new_data);
      return success;
   }
   else if (new_data < sub_root->data)
      return search_and_insert(sub_root->left, new_data);
   else if (new_data > sub_root->data)
      return search_and_insert(sub_root->right, new_data);
   else return duplicate_error;
}

/********************************************************************************************************
* FUNCTION TITLE:remove_root
*
* DESCRIPTION: 	Pre:  sub_root is either NULL or points to a subtree of the Search_tree.
*				Post: If sub_root is NULL, a code of not_present is returned.
*					  Otherwise, the root of the subtree is removed in such a way
*					  that the properties of a binary search tree are preserved.
*					  The parameter sub_root is reset as the root of the modified subtree,
*					  and success is returned.
*
* @param Binary_node<Entry> *&sub_root
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Error_code Search_tree<Entry>::remove_root(Binary_node<Entry> *&sub_root)
/*
Pre:  sub_root is either NULL or points to a subtree of the Search_tree.
Post: If sub_root is NULL, a code of not_present is returned.
      Otherwise, the root of the subtree is removed in such a way
      that the properties of a binary search tree are preserved.
      The parameter sub_root is reset as the root of the modified subtree,
      and success is returned.
*/
{
   if (sub_root == NULL) return not_present;
   Binary_node<Entry> *to_delete = sub_root;  //  Remember node to delete at end.
   if (sub_root->right == NULL) sub_root = sub_root->left;
   else if (sub_root->left == NULL) sub_root = sub_root->right;
   else {                           //  Neither subtree is empty.
      to_delete = sub_root->left;   //  Move left to find predecessor.
      Binary_node<Entry> *parent = sub_root; //  parent of to_delete
      while (to_delete->right != NULL) { //  to_delete is not the predecessor.
         parent = to_delete;
         to_delete = to_delete->right;
      }
      sub_root->data = to_delete->data;  //  Move from to_delete to root.
      if (parent == sub_root) sub_root->left = to_delete->left;
      else parent->right = to_delete->left;
   }
   delete to_delete;   //  Remove to_delete from tree.
   return success;
}

/********************************************************************************************************
* FUNCTION TITLE:remove
*
* DESCRIPTION: 
*			Post: If a Entry with a key matching that of target belongs to the
*				  Search_tree, a code of success is returned and the corresponding node
*				  is removed from the tree.  Otherwise, a code of not_present is returned.
*			Uses: Function search_and_destroy
*
* @param const Entry &target
*
* @return NA
*
*******************************************************************************************************/

template <class Entry>
Error_code Search_tree<Entry>::remove(const Entry &target)
/*
Post: If a Entry with a key matching that of target belongs to the
      Search_tree, a code of success is returned and the corresponding node
      is removed from the tree.  Otherwise, a code of not_present is returned.
Uses: Function search_and_destroy
*/
{
   return search_and_destroy(this->root, target);
}

/********************************************************************************************************
* FUNCTION TITLE:search_and_destroy
*
* DESCRIPTION: Pre:  sub_root is either NULL or points to a subtree of the Search_tree.
*				Post: If the key of target is not in the subtree, a code of not_present
*				is returned.  Otherwise, a code of success is returned and the subtree
*				node containing target has been removed in such a way that
*				the properties of a binary search tree have been preserved.
*				Uses: Functions search_and_destroy recursively and remove_root
*
* @param Binary_node<Entry>* &sub_root, const Entry &targe
*
* @return NA
*
********************************************************************************************************/

template <class Entry>
Error_code Search_tree<Entry>::search_and_destroy(Binary_node<Entry>* &sub_root, const Entry &target)
/*
Pre:  sub_root is either NULL or points to a subtree of the Search_tree.
Post: If the key of target is not in the subtree, a code of not_present
      is returned.  Otherwise, a code of success is returned and the subtree
      node containing target has been removed in such a way that
      the properties of a binary search tree have been preserved.
Uses: Functions search_and_destroy recursively and remove_root
*/
{
   if (sub_root == NULL || sub_root->data == target)
      return remove_root(sub_root);
   else if (target < sub_root->data)
      return search_and_destroy(sub_root->left, target);
   else
      return search_and_destroy(sub_root->right, target);
}


