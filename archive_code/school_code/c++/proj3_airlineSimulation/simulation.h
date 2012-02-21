/********************************************************************************************************
* PROJECT TITLE: simulation.h
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 7 Sept 2011
*
* PURPOSE: See simulation.cpp
*
********************************************************************************************************/

#ifndef SIMULAITON_H_
#define SIMULAITON_H_

#include "utility.h"

class simulation
{

private:

	struct dataStruct;

	int int_currentTime;
	int int_simulationLength;
	int int_debugTime;

	int int_packagesSentOut;
	int int_chicagoPlanes;
	int int_memphisPlanes;
	int int_packageArrivals;

	int int_packageTimeShort;
	int int_packageTimeLong;

	bool debugMode;

public:

	simulation(int,int);

	simulation& operator++(); 								// prefix
	simulation& operator++(int); 								// postfix

	void service(dataStruct&);
	void createEvent(std::string, int, dataStruct&);
	void createItem(std::string, std::string, dataStruct&);
	void processPackageQueue(dataStruct&);
	void processPlaneQueue(dataStruct&);
	void serviceEvent(dataStruct&);

	void incPackagesSentOut();
	void setPackageTimeShort(int);
	void setPackageTimeLong(int);
	void setSimulationLength(int);
	void setCurrentTime(int);
	void setDebugTime(int);

	int getDebugTime();
	int getCurrentTime();
	int getSimulationLength();
	int getPackagesSentOut();
	int getPackageTimeShort();
	int getPackageTimeLong();

};

#endif /* SIMULATION_H_ */
