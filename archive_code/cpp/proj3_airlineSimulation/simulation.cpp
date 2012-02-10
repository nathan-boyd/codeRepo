/********************************************************************************************************
* PROJECT TITLE: simulation.cpp
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 7 Sept 2011
*
* PURPOSE: 	Simulate the operation of a Fedex loading dock with given parameters
*
*			Output the number of packages that have made it through the system (from arrival to plane 
*			departure) and the minimum time, maximum time, and average time a package is in the system 
*			(from arrival to when its plane departs). .
*
*			Output a snapshot of the system, i.e., the contents of the queues and stacks and event 
*			list at any moment in time the user requests. The "real" output doesn't tell the whole 
*			story, so you also want to be able to see the system status along the way.
*
*
********************************************************************************************************/
#include "utility.h"

using namespace std;

/********************************************************************************************************
* STRUCTURE TITLE: dataStruct
*
* DESCRIPTION: Wrapper for list, queues, and stacks to facilitate convinient passing by reference
*
********************************************************************************************************/

struct simulation::dataStruct
{
	list<event> myList;

	stack<item> memphisStack;
	stack<item> chicagoStack;

	queue<item> packageQueue;
	queue<item> planeQueue;

};

/********************************************************************************************************
* FUNCTION TITLE: simulation
*
* DESCRIPTION: Constructor
*
* @param int_simulationLength	        the length of the simulation
* @param int_debugTime			the first debug event time
*
* @return NA
*
********************************************************************************************************/

simulation::simulation(int int_simulationLength, int int_debugTime)
{
	srand(12345);
	dataStruct loadingDock;

	setSimulationLength(int_simulationLength);

	simulation::int_packagesSentOut = 0;
	simulation::int_chicagoPlanes = 0;
	simulation::int_memphisPlanes = 0;
	simulation::int_packageArrivals = 0;

	setCurrentTime(0);

	setDebugTime(int_debugTime);

	simulation::int_packageTimeShort = 2000;
	simulation::int_packageTimeLong = 0;

	event newEvent1 = event(5, "packageArrival");
	event newEvent2 = event(8, "eos");                                              //end of service event
	event newEvent3 = event(80, "planeChicago");
	event newEvent4 = event(100, "planeMemphis");

	loadingDock.myList.push_back(newEvent1);
	loadingDock.myList.push_back(newEvent2);
	loadingDock.myList.push_back(newEvent3);
	loadingDock.myList.push_back(newEvent4);

	service(loadingDock);

}//end function

/********************************************************************************************************
* FUNCTION TITLE: service
*
* DESCRIPTION: 
*
* @param loadingDock 	Wrapper for list, queues, and stacks to facilitate convinient passing by reference 
*
* @return NA
*
********************************************************************************************************/

void simulation::service(dataStruct& loadingDock)
{

	event tempEvent = event(0, "");

	while(getSimulationLength() > getCurrentTime())
	{
	        int int_newDebugTime;

		loadingDock.myList.sort();

//		cout << "\nCurrent time " << getCurrentTime() << endl;
//
//		for(list<event>::iterator tempIt = loadingDock.myList.begin(); tempIt != loadingDock.myList.end(); ++tempIt)
//		{
//		      cout << "\t" << *tempIt;
//
//		}
//
//	        cout << "\t***Queues and Stacks" << endl;
//	        cout << "\tPlane Queue Size " << loadingDock.planeQueue.size() << endl;
//	        cout << "\tPackage Queue Size " << loadingDock.packageQueue.size() << endl;
//	        cout << "\tMemphis Stack Size " << loadingDock.memphisStack.size() << endl;
//	        cout << "\tChicago Stack Size " << loadingDock.chicagoStack.size() << endl;

		list<event>::iterator tempIt = loadingDock.myList.begin();
		tempEvent = *tempIt;

//		cout << "\t***Current Event " << tempEvent;

		if(tempEvent.getType() == "eos")
		{
//			cout << "\tEnd of service" << endl;
			setCurrentTime(tempEvent.getArrival());
			loadingDock.myList.erase(tempIt);

			serviceEvent(loadingDock);

		}//end if

		else if(tempEvent.getType() == "packageArrival")
		{
			setCurrentTime(tempEvent.getArrival());
			createEvent(tempEvent.getType(), tempEvent.getArrival(), loadingDock);
			loadingDock.myList.erase(tempIt);
			simulation::int_packageArrivals++;

		}//end else if

		else if(tempEvent.getType() == "planeChicago")
		{
			setCurrentTime(tempEvent.getArrival());
			createEvent(tempEvent.getType(), tempEvent.getArrival(), loadingDock);
			loadingDock.myList.erase(tempIt);

		}//end else if

		else if(tempEvent.getType() == "planeMemphis")
		{
			setCurrentTime(tempEvent.getArrival());
			createEvent(tempEvent.getType(), tempEvent.getArrival(), loadingDock);
			loadingDock.myList.erase(tempIt);

		}//end else if

	        if(getDebugTime() < getCurrentTime() && getDebugTime() < getSimulationLength())
	        {
	            cout << "\n************************************* "<< getDebugTime() <<" Units of Time Simulated *************************************" << endl;
	            cout << "Event List: " << endl;

	            for(list<event>::iterator tempIt = loadingDock.myList.begin(); tempIt != loadingDock.myList.end(); ++tempIt)
	            {
	                cout <<"\t"<< *tempIt;

	            }// end for

	            cout << "Queues and Stacks:" << endl;

	            cout << "\tPlane Queue Size " << loadingDock.planeQueue.size() << endl;
	            cout << "\tPackage Queue Size " << loadingDock.packageQueue.size() << endl;
	            cout << "\tMemphis Stack Size " << loadingDock.memphisStack.size() << endl;
	            cout << "\tChicago Stack Size " << loadingDock.chicagoStack.size() << endl;

	            cout << "Package Metrics: " << endl;
                    cout << "\tPackages dispatched " << getPackagesSentOut() << "\n"
                         << "\tFastest Package " << getPackageTimeShort() << "\n"
                         << "\tSlowest Package " << getPackageTimeLong() << "\n"
                         << "\tAverage package time " << (getPackageTimeShort() + getPackageTimeLong()) / 2 << "\n"
                         << endl;

	            event tempEvent = loadingDock.myList.front();

	            cout << "Enter 0 to complete the simulation or selecte a number between "
	                 << tempEvent.getArrival() << " and " << getSimulationLength() << " to see another snapshot."
	                 << endl;

	            cout << "When would you like to see the next system snapshot?" << endl;

	            cin >> int_newDebugTime;

	            if(int_newDebugTime == 0)
	            {
	                cout << "Completing Simulation." << endl;
	                int_newDebugTime = getSimulationLength()+100;      //place int_debugTime out of range of future event list items
	                setDebugTime(int_newDebugTime);

	            }//end  if

	            else if(int_newDebugTime >= tempEvent.getArrival())
	            {
	                  setDebugTime(int_newDebugTime);

	            }//end else if

	            else
	            {
	                cout << "\nSnapshot time incorrect. The system snapshot must occur between " << tempEvent.getArrival() << " and "
	                    << getSimulationLength() << "." << " Completing Simulation." << endl;

	                int_newDebugTime = getSimulationLength()+100;      //place int_debugTime out of range of future event list items
	                setDebugTime(int_newDebugTime);

	            }//end else

	        }

	}//end while

	cout << "\n************************* "<< getSimulationLength() <<" Units of Time Simulated. Simulation Complete!*************************\n"
			<< "Total Packages Dispatched " << getPackagesSentOut() << "\n"
			<< "Fastest Package " << getPackageTimeShort() << "\n"
			<< "Slowest Package " << getPackageTimeLong() << "\n"
			<< "Average package time " << (getPackageTimeShort() + getPackageTimeLong()) / 2 << "\n"
			<< endl;

}//end function

/********************************************************************************************************
* FUNCTION TITLE: serviceEvent
*
* DESCRIPTION: 
*
* @param loadingDock 	Wrapper for list, queues, and stacks to facilitate convenient passing by reference
*
* @return NA
*
********************************************************************************************************/

void simulation::serviceEvent(dataStruct &loadingDock)
{

	int tempTime = getCurrentTime();

//	cout << "\tStart of Service Event " << endl;

	if(!loadingDock.planeQueue.empty())
	{
		tempTime +=25;
//		cout << "\tServicing Plane Stack " << loadingDock.planeQueue.front();

		createEvent("eos", tempTime, loadingDock);

		processPlaneQueue(loadingDock);

	}//end if

	else if(!loadingDock.packageQueue.empty())
	{
		tempTime +=8;
//		cout << "\tServicing Package Stack " << endl;

		createEvent("eos", tempTime, loadingDock);

		processPackageQueue(loadingDock);

	}//end else if

	else
	{
		tempTime+=6;
//		cout << "\tServicing Fork Lift " << endl;

		createEvent("eos", tempTime, loadingDock);

	}//end else if

}//end function

/********************************************************************************************************
* FUNCTION TITLE: createEvent
*
* DESCRIPTION: 
*
* @param string eventType	type of event to be created
* @param int int_time		parameter used exclusively for end of service events
* @param loadingDock 		wrapper for list, queues, and stacks to facilitate convenient passing by reference
*
* @return NA
*
********************************************************************************************************/

void simulation::createEvent(string eventType, int int_time, dataStruct &loadingDock) 
{
	int nextEventTime = getCurrentTime();

//        cout << "\tCurrent Time " << getCurrentTime() << endl;


	if(eventType == "packageArrival")
	{
		nextEventTime += 10;

		createItem("package","", loadingDock);

		event newEvent = event(nextEventTime, eventType);
//		cout << "\tCreated " << newEvent;

		loadingDock.myList.push_front(newEvent);

	}//end if

	else if (eventType == "planeChicago")
	{
		nextEventTime+=150;

	    createItem("planeChicago", "chicago", loadingDock);

		event newEvent = event (nextEventTime, eventType);
//		cout << "\tCreated " << newEvent;

		loadingDock.myList.push_front(newEvent);


	}//end else if

	else if (eventType == "planeMemphis")
	{
		nextEventTime += 180;

		createItem("planeMemphis", "memphis", loadingDock);

		event newEvent = event (nextEventTime, eventType);
//		cout << "\tCreated " << newEvent;

		loadingDock.myList.push_front(newEvent);

	}//end else if

	else if (eventType == "eos")
	{
		event eosEvent = event (int_time, "eos");
//		cout << "\tCreated EOS " << eosEvent;

		loadingDock.myList.push_front(eosEvent);

	}//end else if

}//end function

/********************************************************************************************************
* FUNCTION TITLE: createItem
*
* DESCRIPTION: 
*
* @param string str_type			the type of item to be created
* @param string str_destination		the destination of the item
* @param loadingDock 				Wrapper for list, queues, and stacks to facilitate 
*									convinient passing by reference 
*
* @return NA
*
********************************************************************************************************/



void simulation::createItem(string str_type, string str_destination, dataStruct &loadingDock)
{
	int int_arrivalTime = getCurrentTime();

	if(str_type == "package")
	{
		int int_randNum = rand();
		int_randNum = int_randNum % 10;

		if(int_randNum < 5)
		{
			str_destination = "memphis";

		}//end if
		else
		{
			str_destination = "chicago";

		}//end else

		item newItem = item(int_arrivalTime, str_destination, str_type);
//		cout << "\tPackage Item created and pushed to package queue " << newItem;
		loadingDock.packageQueue.push(newItem);

	}//end if

	else
	{
		item newItem = item(int_arrivalTime, str_destination, str_type);
//		cout << "\tPlane Item created and pushed to plane queue " << newItem;
		loadingDock.planeQueue.push(newItem);

	}//end else

}//end function

/********************************************************************************************************
* FUNCTION TITLE: processPackageQueue
*
* DESCRIPTION: 
*
* @param loadingDock 	Wrapper for list, queues, and stacks to facilitate convinient passing by reference 
*
* @return NA
*
********************************************************************************************************/

void simulation::processPackageQueue(dataStruct &loadingDock)
{
	int int_arrivalTime = 0;
	string str_destination = "";
	string str_type = "";

	item tempItem = item(int_arrivalTime, str_destination, str_type);

	tempItem = loadingDock.packageQueue.front();
//	cout << "\tProcessing package queue item: " << endl;

	if(tempItem.getDestination() == "chicago")
	{
//		cout << "\tPushed package to chicago stack" << endl;
		loadingDock.chicagoStack.push(tempItem);

	}//end if

	else
	{
//		cout << "\tPushed package to memphis stack" << endl;
		loadingDock.memphisStack.push(tempItem);

	}//end else

	loadingDock.packageQueue.pop();


}//end function

/********************************************************************************************************
* FUNCTION TITLE: processPlaneQueue
*
* DESCRIPTION: 
*
* @param loadingDock 	Wrapper for list, queues, and stacks to facilitate convinient passing by reference 
*
* @return NA
*
********************************************************************************************************/

void simulation::processPlaneQueue(dataStruct &loadingDock)
{
	int int_arrivalTime = 0;
	string str_destination = "";
	string str_type = "";
	item tempItem = item(int_arrivalTime, str_destination, str_type);

	int currentTime = getCurrentTime();

	tempItem = loadingDock.planeQueue.front();
//	cout << "\tServicing Plane Queue " << endl;

	loadingDock.planeQueue.pop();

	if(tempItem.getDestination() == "chicago")
	{
            simulation::int_chicagoPlanes++;

		for(int i = 0; loadingDock.chicagoStack.size(); i++)
		{
			if(i>25)
			{
				break;
			}

			tempItem = loadingDock.chicagoStack.top();

			if(currentTime - tempItem.getArrivalTime() > getPackageTimeLong())
			{
//				cout << "\t*New Slow Package Time " << currentTime - tempItem.getArrivalTime() << endl;
				setPackageTimeLong(currentTime - tempItem.getArrivalTime() +25);

			}

                        if(currentTime - tempItem.getArrivalTime() +25 < getPackageTimeShort())
                        {
//                            cout << "\tNew Fast Package Time " << currentTime - tempItem.getArrivalTime() << endl;
                            setPackageTimeShort(currentTime - tempItem.getArrivalTime() +25);

                        }

			loadingDock.chicagoStack.pop();
//			cout << "\tLoaded a package on the chicago plane" << endl;
			incPackagesSentOut();

		}//end for
	}//end if

	else if (tempItem.getDestination() == "memphis")
	{
            simulation::int_memphisPlanes++;

		for(int i = 0; loadingDock.memphisStack.size(); i++)
		{
			if(i>25)
			{
				break;
			}

                        if(currentTime - tempItem.getArrivalTime() > getPackageTimeLong())
                        {
//                              cout << "\t*New Slow Package Time " << currentTime - tempItem.getArrivalTime() << endl;
                                setPackageTimeLong(currentTime - tempItem.getArrivalTime() +25);

                        }

                        if(currentTime - tempItem.getArrivalTime() +25 < getPackageTimeShort())
                        {
//                            cout << "\tNew Fast Package Time " << currentTime - tempItem.getArrivalTime() << endl;
                            setPackageTimeShort(currentTime - tempItem.getArrivalTime() +25);

                        }

			loadingDock.memphisStack.pop();
//			cout << "\tLoaded a package on the memphis plane" << endl;
			incPackagesSentOut();

		}//end for

	}//end else if

}//end function

/********************************************************************************************************
* FUNCTION TITLE: Setters and Getters
********************************************************************************************************/

int simulation::getCurrentTime()
{
	return simulation::int_currentTime;

}//end function

int simulation::getSimulationLength()
{
	return simulation::int_simulationLength;

}//end function

int simulation::getPackagesSentOut()
{
	return simulation::int_packagesSentOut;

}//end function

int simulation::getPackageTimeShort()
{
	return simulation::int_packageTimeShort;

}//end function

int simulation::getPackageTimeLong()
{
	return simulation::int_packageTimeLong;

}//end function

void simulation::setCurrentTime(int int_currentTime)
{
	simulation::int_currentTime = int_currentTime;

}//end function

void simulation::setSimulationLength(int int_simulationLength)
{
	simulation::int_simulationLength = int_simulationLength;

}//end function

void simulation::incPackagesSentOut()
{
	simulation::int_packagesSentOut++;

}//end function

void simulation::setPackageTimeShort(int packageTimeShort)
{
	simulation::int_packageTimeShort = packageTimeShort;

}//end function

void simulation::setPackageTimeLong(int packageTimeLong)
{
	simulation::int_packageTimeLong = packageTimeLong;

}//end function

void simulation::setDebugTime(int int_debugTime)
{
	simulation::int_debugTime = int_debugTime;
}//end function

int simulation::getDebugTime()
{
	return simulation::int_debugTime;

}//end function


