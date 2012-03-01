/********************************************************************************************************
* PROJECT TITLE: event.h
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 7 Sept 2011
*
* PURPOSE: An event is somthing that happens in the simulation. Possible event types are eos (end of service)
*               packageArrival, planeArrival,
*
*
********************************************************************************************************/

#include "utility.h"

using namespace std;

event::event(int int_arrivalTime, string str_type)
{
	setType(str_type);
	setArrival(int_arrivalTime);

}//end function


void event::setType(std::string str_type)
{
	event::str_type = str_type;

}//end function


void event::setArrival(int int_arrivalTime)
{
	event::int_arrivalTime = int_arrivalTime;

}//end function

string event::getType()
{
	return event::str_type;
}

int event::getArrival()
{
	return event::int_arrivalTime;

}//end function

ostream& operator << (ostream& os, event& event)
{
  os << "Event " << event.getType() << " arrives at: " << event.getArrival() << "." << endl;

  return os;

}//end overload

int operator < (event& left, event& right)
{
    return left.getArrival() < right.getArrival();

}
