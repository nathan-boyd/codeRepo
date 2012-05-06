/********************************************************************************************************
* PROJECT TITLE: Project 5
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 6 October 2011
*
* PURPOSE: Implement a Binary Search Tree with the ability to insert one or several items into the tree
*	       do a tree traversal and write out the nodes as they are visited - user's choice of in-order,
*	       pre-order,  post-order, or level order, search the tree for a given item remove an item from
           the tree, find the height of the tree, find the size of the tree, quit this tree.
*
*
********************************************************************************************************/

#include "Search_tree.h"

using namespace std;

string str_type; 		//Used in printing the tree type

/********************************************************************************************************
* FUNCTION TITLE: visit
*
* DESCRIPTION:Prints Entry the parameter passed to it
*
* @param Entry& i		item to be printed out
*
* @return NA
*
********************************************************************************************************/

template<class Entry>
void visit(Entry& i)
{
	cout << i << endl;
}

/********************************************************************************************************
* FUNCTION TITLE: menu
*
* DESCRIPTION: Displays a menu for the user
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template<class Entry>
void menu()
{
	Search_tree<Entry> newTree;

	int choice;
	bool keepGoing = true;

	while(keepGoing)
	{
		cin.clear();
		cin.ignore(1,'\n');

		cout << "\n" << str_type << " tree menu" << endl;

		cout << "\n\tenter \'1\' to add " << str_type << " items to your tree " << endl;
		cout << "\t      \'2\' to do a tree traversal and write out the nodes as they are visited " << endl;
		cout << "\t      \'3\' to search the tree " << endl;
		cout << "\t      \'4\' to remove an item from the tree " << endl;
		cout << "\t      \'5\' to find the height of the tree " << endl;
		cout << "\t      \'6\' to find the size of the tree " << endl;
		cout << "\n\tenter \'0\' to exit the current tree " << endl;

		cin >> choice;

		if(choice == 0)
		{
			cout << "\n\t" << str_type << " tree destroyed" << endl;
			keepGoing = false;
		}
		else if(choice == 1)
		{
			cout << "Enter a single " << str_type << " to be inserted into the " << str_type << " tree" << endl;

			if(str_type == "integer")
			{
				int input;
				cin >> input;
				Error_code status = newTree.insert(input);
				if(status == 0)
					cout << "Item inserted into tree: success" << endl;
				else if(status == 4)
					cout << "Item already exists in tree: duplicate_error" << endl;

			}
			else
			{
				char input;
				cin >> input;
				Error_code status = newTree.insert(input);
				if(status == 0)
					cout << "Item inserted into tree: success" << endl;
				else if(status == 4)
					cout << "Item already exists in tree: duplicate_error" << endl;

			}
		}
		else if(choice == 2)
		{
			cout << "\n\tenter \'1\' to execute a in-order traversal " << endl;
			cout << "\t      \'2\' to execute a post-order traversal " << endl;
			cout << "\t      \'3\' to execute a level order traversal " << endl;

			cin >> choice;

			if(choice == 1 )
				newTree.level_order(visit);
			if(choice == 2)
				newTree.postorder(visit);
			if(choice == 3)
				newTree.level_order(visit);

		}
		else if(choice == 3)
		{
			cout << "\n\tenter a search target " << endl;
			Entry input;
			cin >> input;

			Error_code status = newTree.tree_search(input);
			if(status == 0)
				cout << "\tTarget found: success" << endl;
			else
				cout << "\tTarget not found: not_present" << endl;

		}
		else if(choice == 4)
		{
			cout << "\n\tenter an item to remove from the tree " << endl;
			Entry input;
			cin >> input;

			Error_code status = newTree.remove(input);

			if(status == 0)
				cout << "Item removed" << endl;
			else
				cout << "Item does not exist within tree" << endl;

		}
		else if(choice == 5)
		{
			cout << "The height of the tree is " << newTree.height() << endl;

		}
		else if(choice == 6)
		{
			cout << "The size of the tree is " << newTree.size() << endl;

		}

	}

}

/********************************************************************************************************
* FUNCTION TITLE: initial Prompt
*
* DESCRIPTION: Prompts the user for type of tree, sets the typedef of the Search tree
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

void initialPrompt()
{
	bool keepGoing = true;

	while(keepGoing)
	{
		int choice;

		cout <<"\n  .oPYo.                            8      ooooooooo                   " << endl;
		cout <<"  8                                 8          8                       " << endl;
		cout <<"  `Yooo. .oPYo. .oPYo. oPYo. .oPYo. 8oPYo.     8   oPYo. .oPYo. .oPYo. " << endl;
		cout <<"      `8 8oooo8 .oooo8 8  `' 8    ' 8    8     8   8  `' 8oooo8 8oooo8 " << endl;
		cout <<"       8 8.     8    8 8     8    . 8    8     8   8     8.     8.     " << endl;
		cout <<"  `YooP' `Yooo' `YooP8 8     `YooP' 8    8     8   8     `Yooo' `Yooo' " << endl;

		cout << "\n\n\tenter \'1\' to create a character tree "
				"\n\t      \'2\' to create an integer tree " << endl;
		cout << "\n\tenter \'0\' to exit the application " << endl;
		cin >> choice;

		if(choice == 0)
		{
			cout << "Goodbye." << endl;
			keepGoing = false;
		}
		else if (choice == 1)
		{
			str_type = "character";
			typedef char Entry;
			menu<Entry>();
		}
		else if (choice == 2)
		{
			str_type = "integer";
			typedef int Entry;
			menu<Entry>();
		}

	}

}

int main()
{
	initialPrompt();
	return 0;

}
