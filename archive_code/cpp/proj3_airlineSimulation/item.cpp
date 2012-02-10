/********************************************************************************************************
* PROJECT TITLE: event.cpp
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 7 Sept 2011
*
* PURPOSE: An item is something that exists in the simulation. It has an arrival time, destination, and
*               a type.
*
********************************************************************************************************/
#include "utility.h"

using namespace std;

item::item(int int_arrivalTime, string str_destination, string str_type)
{
	setArrivalTime(int_arrivalTime);
	setDestination(str_destination);
	setType(str_type);

}//end function

ostream& operator<<(ostream& os, item& item)
{
  os << "The " << item.getType() << " item was created at " << item.getArrivalTime() <<

		  " and is bound for " << item.getDestination() << "." << endl;

  return os;

}//end overload

int item::getArrivalTime()
{
	return item::int_arrivalTime;

}

string item::getDestination()
{
	return item::str_destination;

}

string item::getType()
{
	return item::str_type;

}


void item::setArrivalTime(int int_arrivalTime)
{
	item::int_arrivalTime = int_arrivalTime;

}


void item::setDestination(std::string str_destination)
{
	item::str_destination = str_destination;

}


void item::setType(std::string str_type)
{
	item::str_type = str_type;

}


