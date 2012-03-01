#include "message.h"

using namespace std;

/********************************************************************************************************
* FUNCTION TITLE: operator <<
*
* DESCRIPTION: Allows for outputting of messages directly with << operator
*
* @param ostream& outs			outstream to which message data is added and
* @param message &x				reference to message to be printed
*
* @return NA
*
********************************************************************************************************/

ostream& operator << (ostream& outs, message &x)
{
	outs << x.getData() << " " << x.getPriority();
	return outs;
	
}//end operator <<

/********************************************************************************************************
* FUNCTION TITLE: message
*
* DESCRIPTION: Empty Constructor
*
* @param NA
*
* @return NA
*
********************************************************************************************************/

message::message()
{

}//end message

/********************************************************************************************************
* FUNCTION TITLE: message
*
* DESCRIPTION: Constructor with parameters
*
* @param int data		data the message is to hold
* @param int priority	priority, 1 low 10 high, of message
*
* @return NA
*
********************************************************************************************************/

message::message(int data, int priority)
{
	message::data = data;
	message::priority = priority;
	
}// end message

/********************************************************************************************************
* FUNCTION TITLE: getData
*
* DESCRIPTION: Allows for message data access
*
* @param NA
*
* @return message data
*
********************************************************************************************************/

int message::getData()
{
	return message::data;
	
}//end getData

/********************************************************************************************************
* FUNCTION TITLE: getPriority
*
* DESCRIPTION: Allows for message priority access
*
* @param NA
*
* @return message priority level
*
********************************************************************************************************/

int message::getPriority()
{
	return message::priority;
	
}//end getPriority
