#ifndef UTILITY_H
#define UTILITY_H

#include <stdlib.h>							// helps with gcc isues where null is not defined

#include <algorithm>
#include <cctype>
#include <cmath>
#include <cstddef>
#include <cstdlib>
#include <ctime>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <limits>
#include <list>
#include <map>
#include <ostream>
#include <queue>
#include <sstream>
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

enum Balance_factor {
	left_higher,
	equal_height,
	right_higher
};

#endif //UTILITY_H
