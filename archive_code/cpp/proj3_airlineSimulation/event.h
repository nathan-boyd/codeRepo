/********************************************************************************************************
* PROJECT TITLE: event.h
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 7 Sept 2011
*
* PURPOSE: see event.cpp
*
********************************************************************************************************/

#ifndef EVENT_H_
#define EVENT_H_

class event
{

public:

	event(int, std::string);

	friend std::ostream& operator<<(std::ostream& os, event& event);
	friend int operator<(event& left, event& right);

	void setType(std::string);
	void setArrival(int);
	void setDestination(std::string);

	std::string getType();
	int getArrival();
	std::string getDestination();

private:

	std::string str_type;
	int int_arrivalTime;
	std::string str_destination;

};//end class


#endif /* EVENT_H_ */
