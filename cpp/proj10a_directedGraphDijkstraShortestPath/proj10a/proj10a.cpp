/********************************************************************************************************
* PROJECT TITLE: Project 10a Directed Graph Dijkstra
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 24 Nov 2011
*
* PURPOSE: Implement Dijkstra's algorithm to find the shortest path in a directed graph.
*
********************************************************************************************************/

#include "directedGraph.h"

void createGraph()
{
	int start, end;
	string fileName = "graph.txt";

	cout << "What is the starting node?" << endl;
	cin >> start;

	cout << "What is the ending node?" << endl;
	cin >> end;

	directedGraph newGraph(fileName, start, end);
	newGraph.printData(start, end);

}//end createGraph

int main()
{
	createGraph();

	return 0;

}//end main
