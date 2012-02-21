#include "utility.h"

#ifndef MESSAGE_H
#define MESSAGE_H

class message
{

	public:
		message();
		message(int data, int priority);
		int getData();
		int getPriority();

	private:
		int data, priority;

};

std::ostream & operator << (std::ostream& outs, message &x);

#endif //message
