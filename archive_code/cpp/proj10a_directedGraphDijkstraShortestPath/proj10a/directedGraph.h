#include "utility.h"

#ifndef DIRECTEDGRAPH_H
#define DIRECTEDGRAPH_H

class directedGraph
{

	public:

		static const int maxNodes = 25;

		directedGraph(string fileName, int start, int end);
		int max(int a, int b);
		void loadData(string fileName, int start);
		void dijkstra(int start, int end);
		void printData(int start, int end);
		void printPath(int end);
		void printDistance(int start, int end);

	private:

		int infinity;
		int int_nodes;
		int int_edges;
		int adjacencyMatrix[maxNodes][maxNodes];
		int parent[maxNodes];
		int shortestPath[maxNodes];


};

#endif //DIRECTEDGRAPH_H
