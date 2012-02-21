/********************************************************************************************************
* PROJECT TITLE: proj3.cpp
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 7 Sept 2011
*
* PURPOSE: Driver consisting of main function and simulate which begins the fedex loading dock simulaion
*               for more information see simulation.cpp
*
********************************************************************************************************/

#include "utility.h"

using namespace std;

/********************************************************************************************************
* FUNCTION TITLE: simulate
*
* DESCRIPTION: Begins the simulation
*
* @param int int_simulationLength       the length of the simulation
* @param int_debugTime                  time of the first debug snapshot
*
* @return NA
*
********************************************************************************************************/

void simulate(int int_simulationLength, int int_debugTime)
{
	simulation newSimulation = simulation(int_simulationLength, int_debugTime);

}

/********************************************************************************************************
* FUNCTION TITLE: main
*
* DESCRIPTION: Gets the first snapshot time from the user and begins the simulation event
*
* @param NA
*
* @return 0
*
********************************************************************************************************/

int main()
{
	int int_simulationLength = 2000;
	int int_debugTime = 0;

	cout << "When would you like to see a system snapshot (enter a number between 0 and 2000)." << endl;
	cin >> int_debugTime;

	simulate(int_simulationLength, int_debugTime);

	return 0;
}
