/********************************************************************************************************
* PROJECT TITLE: item.h
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 7 Sept 2011
*
* PURPOSE: See item.cpp
*
********************************************************************************************************/

#ifndef ITEM_H_
#define ITEM_H_

#include "utility.h"

class item
{

public:

	item(int, std::string, std::string);

	int getArrivalTime();
	std::string getDestination();
	std::string getType();

	void setArrivalTime(int int_arrivalTime);
	void setDestination(std::string str_destination);
	void setType(std::string str_type);


private:

	friend std::ostream& operator<<(std::ostream& os, item& item);

	int int_arrivalTime;
	std::string str_destination;
	std::string str_type;


};//end class


#endif /* ITEM_H_ */
