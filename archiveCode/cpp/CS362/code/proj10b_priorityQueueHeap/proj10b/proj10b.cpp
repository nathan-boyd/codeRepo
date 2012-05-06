/********************************************************************************************************
* PROJECT TITLE: Project 10b Priority Queue
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 26 Nov 2011
*
* PURPOSE: Use a priority queue, implemented as a heap, to manage message handling. A priority queue is
* like a normal queue but implements priorities.
*
********************************************************************************************************/

#include "priorityQueue.h"

using namespace std;


/********************************************************************************************************
* FUNCTION TITLE: loadData
*
* DESCRIPTION: Copies messages and dispatch instructions, manages actions and queues / deques accordingly
*
* @param string fileName					name of file containing messages and dispatch directions
* @param priorityQueue<T> * & newQueue		pointer reference to priority Queue
*
* @return NA
*
********************************************************************************************************/

template <class T>
void loadData(string fileName, priorityQueue<T> * & newQueue)
{
	char action;
	string tempString;
	int data, priority;

	const char * char_fileName = fileName.c_str();

	ifstream myfile(char_fileName);

	if (myfile.is_open())
	{
		while (myfile.good())
		{
			getline(myfile,tempString);

			const char * char_tempString = tempString.c_str();
			sscanf(char_tempString, "%c %d %d", &action, &data, &priority);

			if(action == 'A')
			{
				message newMessage(data, priority);
				newQueue->insert(newMessage);
			}
			else if( action == 'D')
			{
				newQueue->deque();
			}

		}
	}
	else
		cout << "File " << fileName << " not found" << endl;

	myfile.close();
}

int main()
{
	priorityQueue<message> * newQueue = new priorityQueue<message>;

	loadData("lab10pq.txt", newQueue);

	return 0;
}
