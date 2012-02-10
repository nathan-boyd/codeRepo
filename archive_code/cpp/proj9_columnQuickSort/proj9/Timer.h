#ifndef TIMER_H
#define TIMER_H

#include <time.h>

class Timer
{
//Timer class taken from from Kruse and Ryba,
//Data Structures and Program Design in C++,
//Prentice-Hall, 1999

public:

	Timer();
	//constructor - turns on the timer

	double elapsed_time();
	//compute elapsed time between start and stop

	void reset();
	//restarts the timer

private:

	clock_t start_time;
	//type of value returned by system function clock()
};

#endif
