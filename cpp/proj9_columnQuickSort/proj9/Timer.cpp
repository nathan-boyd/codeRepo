#include "Timer.h"

Timer::Timer()
//constructor - turns on the timer
{
	Timer::start_time = clock();
}

double Timer::elapsed_time()
//compute elapsed time between start and stop
{
	clock_t end_time = clock();
	return ((double) (end_time - start_time))/((double) CLOCKS_PER_SEC);
}

void Timer::reset()
//restarts the timer
{
	start_time = clock();
}
