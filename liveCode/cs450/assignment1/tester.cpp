#include <iostream>
#include "Array.h"
using namespace std;

void main()
{
	Array foo = Array(10);
	foo.fill('X');
	//foo.set(4, 'M');
	char someChar = foo.get(2);

	cout << "size \t\t" << foo.size() << endl;
	cout << "char \t\t" << someChar << endl;

	system("PAUSE");

}