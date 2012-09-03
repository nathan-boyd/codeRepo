#ifndef UTILITY_H
#define UTILITY_H

#include <iostream>
#include <limits>
#include <cmath>
#include <cstdlib>
#include <cstddef>
#include <fstream>
#include <cctype>
#include <ctime>
#include <string>
#include <queue>
#include <typeinfo>

using namespace std;

enum Error_code
{
	success,
	fail,
	exceeds_range,
	not_present,
	duplicate_error,
	underflow,
	overflow
};

#endif //UTILITY_H
