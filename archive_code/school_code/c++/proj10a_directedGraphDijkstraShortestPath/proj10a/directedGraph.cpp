#include "directedGraph.h"

using namespace std;

/********************************************************************************************************
* FUNCTION TITLE: directedGraph Constructor
*
* DESCRIPTION: Constructor, calls loadData and dijkstra
*
* @param string fileName	name of the file containing node triples
* @param int start			starting node
* @param int end			ending node
*
* @return NA
*
********************************************************************************************************/

directedGraph::directedGraph(string fileName, int start, int end)
{
	loadData(fileName, start);
	dijkstra(start, end);

}//end directedGraph

/********************************************************************************************************
* FUNCTION TITLE: printData
*
* DESCRIPTION: Calls the print path and print distance functions
*
* @param int start			starting node
* @param int end			ending node
*
* @return NA
*
********************************************************************************************************/

void directedGraph::printData(int start, int end)
{
	cout << "The path from " << start << " to " << end << " is:";
	printPath(end);
	printDistance(start, end);

}//end printData

/********************************************************************************************************
* FUNCTION TITLE: printPath
*
* DESCRIPTION: Recursively prints the path from starting node to ending node
*
* @param int end			ending node
*
* @return NA
*
********************************************************************************************************/

void directedGraph::printPath(int end)
{
	if (parent[end] != -1)
		printPath(parent[end]);

	cout << " " << end;

}//end printPath

/********************************************************************************************************
* FUNCTION TITLE: printDistance
*
* DESCRIPTION: Prints the distance / weight of the path
*
* @param int start			starting node
* @param int end			ending node
*
* @return NA
*
********************************************************************************************************/

void directedGraph::printDistance(int start, int end)
{
	cout << "\nDistance from " << start << " to " << end << " is: " << shortestPath[end] << endl;

}//end printDistance

/********************************************************************************************************
* FUNCTION TITLE: max
*
* DESCRIPTION: Finds the largest of the two parameters, can be called recursively
*
* @param int a
* @param int b
*
* @return int largest of the two parameters
*
********************************************************************************************************/

int directedGraph::max(int a, int  b)
{
	if(a > b)
		return a;
	else
		return b;

}//end max

/********************************************************************************************************
* FUNCTION TITLE: loadData
*
* DESCRIPTION: Counts Edges, Creates Adjacency Matrix, Finds Largest Node
*
* @param string fileName	name of the file containing node triples
* @param int start			starting node
*
* @return NA
*
********************************************************************************************************/

void directedGraph::loadData(string fileName, int start)
{
	int i, j, u, v, w;

	int_edges = 0;
	int_nodes = 0;
	infinity = numeric_limits<int>::max();

	const char * char_fileName = fileName.c_str();
	string tempString;

	ifstream myfile(char_fileName);								//count edges
	if (myfile.is_open())
	{
		while (myfile.good())
		{
			int_edges++;
			getline(myfile,tempString);

		}//end while

	}//end if

	else
	{
		cout << "Cannot find " << fileName << endl;

	}//end else

	myfile.close();

	for (i = 0; i <= int_edges; i++)
	{
		for (j = 0; j < int_edges; ++j)
		{
			adjacencyMatrix[i][j] = 0;

		}//end for

	}//end for

	FILE *fin = fopen(char_fileName, "r");
	for (i = 0; i <= int_edges; i++)
	{
		fscanf(fin, "%d%d%d", &u, &v, &w); 						//preferred for importing formatted data
		adjacencyMatrix[u][v] = w;
		int_nodes = max(u, max(v, int_nodes));

	}//end for

	fclose(fin);

}//end loadData

/********************************************************************************************************
* FUNCTION TITLE: dijkstra
*
* DESCRIPTION: Finds the shortest path from starting node to ending node using dijkstra's algorithim
*
* @param int start			starting node
* @param int end 			ending node
*
* @return NA
*
********************************************************************************************************/

void directedGraph::dijkstra(int start, int end)
{
	int i, k, shortest;
	int visited[maxNodes];									//contains values of nodes that have been visited

	for (i = 0; i <= int_nodes; i++)						//initialize arrays to starting values
	{
		shortestPath[i] = infinity;
		parent[i] = -1;
		visited[i] = 0;

	}//end for

	shortestPath[start] = 0;								//important to set start as beginning shortestPath val

	for (k = 0; k <= int_nodes; k++)						//dijkstras algorithm
	{
		shortest = end;

		for (i = 0; i <= int_nodes; i++)
		{
			if (!visited[i] && ((shortest == -1) || (shortestPath[i] < shortestPath[shortest])))
				shortest = i;
		}

		visited[shortest] = 1;

		for (i = 0; i <= int_nodes; i++)
		{
			if (adjacencyMatrix[shortest][i])
			{

				if (shortestPath[shortest] + adjacencyMatrix[shortest][i] < shortestPath[i])
				{
					shortestPath[i] = shortestPath[shortest] + adjacencyMatrix[shortest][i];
					parent[i] = shortest;

				}//end if

			}//end if

		}//end for

	}//end for

}//end dijkstra
