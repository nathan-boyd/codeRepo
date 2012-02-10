#include "key.h"

#ifndef HASHTABLE
#define HASHTABLE

template <class T>
class hashTable {

	private:
		int hashSize;									//hash size
		vector<list<T> > table;							//hast table

	public:
		hashTable(int hashSize);						//constructor
		int hashVal(string intString);					//performs hashing function
		Error_code search(T findKey);					//search function
		void put(T insertKey, int hashVal);				//insert function

};

#endif

using namespace std;

/********************************************************************************************************
* FUNCTION TITLE: hashTable
*
* DESCRIPTION: Constructor
*
********************************************************************************************************/

template <class T>
hashTable<T>::hashTable(int hashSize)
{

	hashTable::hashSize = hashSize;
	table.resize(hashTable::hashSize);
}

/********************************************************************************************************
* FUNCTION TITLE: hashVal
*
* DESCRIPTION: Hashes the value of the item into its location
*
********************************************************************************************************/

template <class T>
int hashTable<T>::hashVal(string intString)
{
	int tempInt;

	while(intString.size() < 4)
		intString.insert(0,"0");											//pad with 0s if necessary

    string first = intString.substr(0,2);									//swap first and last half
    intString.erase(0,2);
    intString+=first;

	stringstream convertString(intString);
    convertString >> tempInt;

    tempInt %= hashSize;

	return tempInt;
}

/********************************************************************************************************
* FUNCTION TITLE: search
*
* DESCRIPTION: Searches the hash table for items
*
********************************************************************************************************/

template <class T>
Error_code hashTable<T>::search(T findKey)
{

	int keyVal = findKey.the_key();					//key
	int hash;										//hash
	stringstream convert;							//convert ints to strings
	string hashString;								//string to pass to hashVal
	typename list<T>::iterator it;					//iterates through the local copy of the list

	convert << keyVal;								//convert int to stringstream
	convert >> hashString;							//convert stringstream to string

	hash = hashVal(hashString);						//hash the string

	it = table[hash].begin();

	while(it != table[hash].end())
	{
		if (*it == findKey)
			return success;

		it++;
	}

	return not_present;

}

/********************************************************************************************************
* FUNCTION TITLE: put
*
* DESCRIPTION: Inserts items into the hash table
*
********************************************************************************************************/

template <class T>
void hashTable<T>::put(T insertKey, int hashVal)
{
	if(search(insertKey) != success)
		table[hashVal].push_front(insertKey);
}


