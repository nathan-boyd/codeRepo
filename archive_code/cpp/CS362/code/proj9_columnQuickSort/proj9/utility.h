#ifndef UTILITY_H
#define UTILITY_H

#include <stdlib.h>							// helps with gcc isues where null is not defined

#include <algorithm>
#include <ostream>
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
#include <sstream>
#include <list>

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

enum Balance_factor {
	left_higher,
	equal_height,
	right_higher
};

#endif //UTILITY_H
