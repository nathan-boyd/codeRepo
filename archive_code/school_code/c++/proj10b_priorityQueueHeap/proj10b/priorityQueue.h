#include "message.h"

#ifndef PRIORITYQUEUE_H
#define PRIORITYQUEUE_H

template <class T>
class priorityQueue
{
	public:
		priorityQueue();
		void insert(T x);
		void deque();
		int getLeftChildIndex(int index);
		int getRightChildIndex(int index);
		int getParentIndex(int index);
		void moveUp(int index);
		void moveDown(int index);
		void printAll();

	private:
		static const int maxSize = 100;
		int heapSize;
		T heap[maxSize];

};

#endif //queue

/********************************************************************************************************
* FUNCTION TITLE: priorityQueue
*
* DESCRIPTION: Empty Constructor
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

template <class T>
priorityQueue<T>::priorityQueue()
{
	heapSize = 0;

}//end priorityQueue

/********************************************************************************************************
* FUNCTION TITLE: getLeftChildIndex
*
* DESCRIPTION: Determines left child of node at index
*
* @param int index, index of node in question
*
* @return index of left child
*
********************************************************************************************************/

template <class T>
int priorityQueue<T>::getLeftChildIndex(int index)
{
	return 2 * index + 1;
	
}//end getLeftChildIndex

/********************************************************************************************************
* FUNCTION TITLE: getRightChildIndex
*
* DESCRIPTION: Determines right child of node at index
*
* @param int index, index of node in question
*
* @return index of right child
*
********************************************************************************************************/

template <class T>
int priorityQueue<T>::getRightChildIndex(int index)
{
	return 2 * index + 2;
	
}//end getRightChildIndex

/********************************************************************************************************
* FUNCTION TITLE: getParentIndex
*
* DESCRIPTION: Determines parent of node at index
*
* @param int index, index of node in question
*
* @return index of parent
*
********************************************************************************************************/

template <class T>
int priorityQueue<T>::getParentIndex(int index)
{
	return (index - 1) / 2;
	
}//end getParentIndex

/********************************************************************************************************
* FUNCTION TITLE: insert
*
* DESCRIPTION: Determines parent of node at index, uses moveUp
*
* @param T x 			message to be inserted into the heap
*
* @return 				NA
*
********************************************************************************************************/

template <class T>
void priorityQueue<T>::insert(T x)
{
	if(heapSize >= maxSize)
	{
		cout << "Maximum heap size reached at message " << x << " message not inserted. " << endl;
		return;

	}// end if

	heapSize++;

	heap[heapSize -1] = x;

	moveUp(heapSize - 1);
	
}//end insert

/********************************************************************************************************
* FUNCTION TITLE: deque
*
* DESCRIPTION: pops the node with the highest priority
*
* @param 	NA
*
* @return 	NA
*
********************************************************************************************************/

template <class T>
void priorityQueue<T>::deque()
{
	if(heapSize > 0)
		cout << heap[0] << endl;
	else
	{
		cout << "No items on the heap" << endl;
		return;

	}//end else

	heap[0] = heap[heapSize - 1];

	heapSize--;

	if (heapSize > 0)
		moveDown(0);
		
}//end deque

/********************************************************************************************************
* FUNCTION TITLE: moveUp
*
* DESCRIPTION: adjusts the heap after a node insertion, calls moveUp recursively
*
* @param int index, index of node in question
*
* @return 	NA
*
********************************************************************************************************/

template <class T>
void priorityQueue<T>::moveUp(int index)
{
	int parentIndex;
	message tempMessage(0,0);

	if (index != 0)
	{
		parentIndex = getParentIndex(index);

		if (heap[parentIndex].getPriority() < heap[index].getPriority())
		{
			swap(heap[parentIndex], heap[index]);
			moveUp(parentIndex);

		}//end if
		
	}//end if
	
}//end moveUp

/********************************************************************************************************
* FUNCTION TITLE: moveDown
*
* DESCRIPTION: adjusts the heap after a dequeue, calls moveDown recursively
*
* @param int index, index of node in question
*
* @return 	NA
*
********************************************************************************************************/

template <class T>
void priorityQueue<T>::moveDown(int index)
{
	int leftChildIndex, rightChildIndex, minIndex;
	message tempMessage(0,0);

	leftChildIndex = getLeftChildIndex(index);
	rightChildIndex = getRightChildIndex(index);

	if (rightChildIndex >= heapSize)
	{
		if (leftChildIndex >= heapSize)
			  return;
		else
			  minIndex = leftChildIndex;

	}//end if
	else
	{
		if (heap[leftChildIndex].getPriority() >= heap[rightChildIndex].getPriority())
			  minIndex = leftChildIndex;
		else
			  minIndex = rightChildIndex;

	}//end else

	if (heap[index].getPriority() < heap[minIndex].getPriority())
	{
		swap(heap[minIndex], heap[index]);
		moveDown(minIndex);
		
	}//end if
	
}//end moveDown

/********************************************************************************************************
* FUNCTION TITLE: printAll
*
* DESCRIPTION: debugging function useful in designing implementation
*
*
* @return 	NA
*
********************************************************************************************************/

template <class T>
void priorityQueue<T>::printAll()
{
	for(int i = 0; i < int(heapSize-1); i++)
	{
		cout << heap[i] << endl;
		
	}//end for
	
}//end printAll


