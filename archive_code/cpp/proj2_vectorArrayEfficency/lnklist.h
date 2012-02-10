#ifndef lnklist_h
#define lnklist_h
//singly linked list class

#include "utility.h"

template <class T>
struct Node
{
	Node() { next = NULL;};		// constructor
	T value;					// data stored in a node
	Node<T> *next;				// pointer to next node
};

// List template, implemented as a linked list.
// All insertion and deletion is done at the current position in the list.

template <class T>
class List
{

public:
	List();								// Construct an empty list.
	~List();							// destructor
	void Clear();

	void InsertBefore(T e);				// Insert e before current position
	void InsertAfter(T e);				// Insert e after current position
	void Remove();						// Delete the node at the current position

	void Head(); 						// Move current location to the head
	void Tail(); 						// Move current location to the tail

	List<T>& operator++ (int);			// Move current to next position (postfix)
	List<T>& operator-- (int);			// Move current to prior position (postfix)

	T Retrieve() const;					// Return the element at the current position
	void Update(T e);					// Store e in current location

	int Length() const;					// Return the size of the list

//	friend ostream& operator<< <T>(ostream& os, const List<T>& s);  //Output a list
	friend ostream& operator << (ostream& os, const List<T>& s);


protected:
	Node<T>  *first,					// pointer to the first node in the list
		     *current,					// pointer to current node
			 *last;						// pointer to the last node in the list
	int	size;							// number of elements in the list
};
#endif

//----------------- Definition of LinkedList member functions and friends

template <class T>
ostream& operator << (ostream& os, const List<T>& s)
// Output an entire list, from first position to last.
{
	Node<T> *p = s.first;
	while (p != NULL)
	{
		os << p->value << " ";
		p = p->next;
	}
	return os;
}

template <class T>
List<T>::List()
// Default constructor.  Builds an empty list.
{
	first = current = last = NULL;
	size = 0;
}


template <class T>
List<T>::~List()
// destructor
{
	Clear();
}

template <class T>
void List<T>::Clear()
// empty the list
{
	Node<T> *nptr = first;
	current = first;
	while (current != NULL)
	{
		current = current->next;
		delete nptr;
		nptr = current;
	}
	first = current = last = NULL;
	size = 0;
}

template <class T>
void List<T>::InsertBefore(T e)
// Insert e at the current position.
{
	Node<T> *nptr = new Node<T>;

	if (size == 0)
	{
		// Inserting into an empty list
		nptr->value = e;
		nptr->next = NULL;
		first = current = last = nptr;
	}
	else
	{
		// Inserting into an non-empty list.
		nptr->value = current->value;
		nptr->next = current->next;
		current->next = nptr;
		current->value = e;
		if (current == last)
			last = nptr;
	}
	size++;
}

template <class T>
void List<T>:: InsertAfter(T e)
// Insert e after the current position.
{
	// Construct a new node and fill it
	// with the appropriate value
	Node<T> *nptr = new Node<T>;
	nptr->value = e;

	if (size == 0)
	{
		// Inserting into an empty list.
		nptr->next = NULL;
		first = current = last = nptr;
	}
	else
	{
		// Inserting into an non-empty list.
		nptr->next = current->next;
		current->next = nptr;
		if (current == last)
			last = nptr;
		current = nptr;
	}
	size++;
}

template <class T>
void List<T>::Remove()
// Delete the node at the current position.
// If the list is empty, display a warning, but continue working.
{
	Node<T> *nptr;
	if (size == 0)
	{
		cout << "Attempt to Remove an element from an empty list" << endl;
		return;
	}
	else if (size == 1)
	{
		// Remove the only node in the list
		delete current;
		first = current = last = NULL;
	}
	else if (current == last)
	{
		// Remove the last node of a list that has more than one node.
		nptr = first;
		// Find predecessor to current node.
		while (nptr->next != current)
			nptr = nptr->next;
		nptr->next = current->next;
		delete current;
		current = last = nptr;
	}
	else
	{
		// Remove a node that's not the last one.
		nptr = current->next;
		current->value = nptr->value;
		current->next = nptr->next;
		if (last == nptr)
			last = current;
		delete nptr;
	}
	size--;
}

template <class T>
void List<T>::Head()
// Move current location to the head.
{
	current = first;
}

template <class T>
void List<T>::Tail()
// Move current location to the tail.
{
		current = last;
}


template <class T>
List<T>& List<T>::operator++ (int)
// Move current location to next node (postfix operator).
// Do nothing if current is at the tail of the list.
{
	if (current != last)
		current = current->next;
	return *this;
}

template <class T>
List<T>& List<T>::operator-- (int)
// Move current location to previous node (postfix operator).
// Do nothing if current is at the head of the list
{
	if (current != first)
	{
		Node<T> *nptr = first;
		while (nptr->next != current)
			nptr = nptr->next;
		current = nptr;
	}
	return *this;
}

template <class T>
T List<T>::Retrieve() const
// Return the element at the current position.
// Quit the program if the list is empty, since we can't return anything.
{
	if (size <= 0)
	{
		cout << "Cannot Return an element from an empty list";
		exit(1);
	}
	return current->value;
}

template <class T>
void List<T>::Update(T e)
// Store e in current location.
// Quit the program if the list is empty.
{
	if (size > 0)
		current->value = e;
	else
	{
		cout << "Cannot Update an element in an empty list";
		exit(1);
	}
}


template <class T>
int List<T>::Length() const
// Return the number of elements in the list.
{
	return size;
}

