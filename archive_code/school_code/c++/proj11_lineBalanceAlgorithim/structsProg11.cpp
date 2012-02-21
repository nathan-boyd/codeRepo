#include "utility.h"

/********************************************************************************************************
* STRUCT TITLE: masterFile
*
* DESCRIPTION: master file record
*
********************************************************************************************************/

struct masterFile
{
	int employeeID;
	string employeeName;
	string departmentID;
	int YTDhoursRegular;
	int YTDhoursOvertime;
	double regularPayRate;
	double overtimeFactor;
	double ytdPay;

//	friend ostream& operator << (ostream& outs, const masterFile& x)
//	{
//		outs<< x.employeeID << " "
//			<< x.employeeName << " "
//			<< x.departmentID << " "
//			<< x.YTDhoursRegular << " "
//			<< x.YTDhoursOvertime << " "
//			<< x.regularPayRate << " "
//			<< x.overtimeFactor << " "
//			<< x.ytdPay;
//		return outs;
//	}

};

/********************************************************************************************************
* STRUCT TITLE: transactionFile
*
* DESCRIPTION: transaction file record
*
********************************************************************************************************/

struct transactionFile
{
	int employeeID;
	int regularHoursWorked;
	int overtimeHoursWorked;

//	friend ostream& operator << (ostream& outs, const transactionFile& x)
//	{
//		outs<< x.employeeID << " "
//			<< x.regularHoursWorked << " "
//			<< x.overtimeHoursWorked;
//
//		return outs;
//	}

};

/********************************************************************************************************
* STRUCT TITLE: workingStorage
*
* DESCRIPTION: working storage, take place of memory
*
********************************************************************************************************/

struct workingStorage
{
	//copy master record
	int employeeID;
	string employeeName;
	string departmentID;
	int YTDhoursRegular;
	int YTDhoursOvertime;
	double regularPayRate;
	double overtimeFactor;
	double YTDPay;

	//new values for computations
	double overtimePayRate;
	int hoursRegular;
	int hoursOvertime;
	double weeksPay;
	double newYTDPay;
	int newYTDhoursRegular;
	int newYTDhoursOvertime;
	bool transactionOccured;

	/********************************************************************************************************
	* FUNCTION TITLE: addMaster
	*
	* DESCRIPTION: Brings the data from a masterFile object into working storage, initializes other variables
	*
	* @param masterFile masterObject
	*
	* @return NA
	*
	********************************************************************************************************/

	void addMaster(masterFile masterObject)
	{
		transactionOccured	= false;
		employeeID			= masterObject.employeeID;
		employeeName		= masterObject.employeeName;
		departmentID		= masterObject.departmentID;
		YTDhoursRegular		= masterObject.YTDhoursRegular;
		YTDhoursOvertime	= masterObject.YTDhoursOvertime;
		regularPayRate		= masterObject.regularPayRate;
		overtimeFactor		= masterObject.overtimeFactor;
		YTDPay				= masterObject.ytdPay;
		overtimePayRate		= overtimeFactor * regularPayRate;
		hoursRegular		= 0;
		hoursOvertime		= 0;
		weeksPay			= 0;
		newYTDPay			= 0;
		newYTDhoursRegular	= 0;
		newYTDhoursOvertime	= 0;
	}

	/********************************************************************************************************
	* FUNCTION TITLE: processTransaction
	*
	* DESCRIPTION: copies transaction data into working storage
	*
	* @param transactionFile transactionObject
	*
	* @return NA
	*
	********************************************************************************************************/

	void processTransaction(transactionFile transactionObject)
	{
		transactionOccured = true;

		if(employeeID != transactionObject.employeeID)
			cout << "error in process transaction" << endl;

		hoursRegular += transactionObject.regularHoursWorked;
		hoursOvertime += transactionObject.overtimeHoursWorked;

	}

	/********************************************************************************************************
	* FUNCTION TITLE: getReport
	*
	* DESCRIPTION: generates a report line from working storage
	*
	* @param NA
	*
	* @return string
	*
	********************************************************************************************************/

	string getReport()
	{
		stringstream newStream;
		string newString;

		newStream.setf(ios::fixed);											//output decimals to 2 places
		newStream.setf(ios::showpoint);
		newStream.precision(2);

		newStream 	<< employeeID <<  " "
					<< employeeName << "  "
					<< setw(2) << setfill('0');

		YTDhoursRegular += hoursRegular;
		YTDhoursOvertime += hoursOvertime;
		weeksPay += (hoursRegular * regularPayRate) + (hoursOvertime * (regularPayRate * overtimeFactor));
		newYTDPay += YTDPay + weeksPay;

		if(transactionOccured)
		{
			newStream	<< hoursRegular << "      "
						<< setw(2) << setfill('0') << hoursOvertime << "    "
						<< setw(5) << setfill('0') << regularPayRate << " "
						<< setw(5) << setfill('0') << overtimePayRate << " "
						<< setw(7) << setfill('0') << weeksPay << " "
						<< setw(8) << setfill('0') << YTDPay << " "
						<< setw(8) << setfill('0') << newYTDPay;
		}
		else
		{
			newStream 	<< "NO TRANSACTION";
		}

		newString = newStream.str();

//		cout << newString << endl;

		return newString;
	}

	/********************************************************************************************************
	* FUNCTION TITLE: getMaster
	*
	* DESCRIPTION: generates a masterFile line from working storage
	*
	* @param NA
	*
	* @return string
	*
	********************************************************************************************************/

	string getMaster()
	{
		stringstream newStream;

		newStream.setf(ios::fixed);											//output decimals to 2 places
		newStream.setf(ios::showpoint);
		newStream.precision(2);

		YTDhoursRegular += hoursRegular;
		YTDhoursOvertime += hoursOvertime;
		weeksPay += (hoursRegular * regularPayRate) + (hoursOvertime * (regularPayRate * overtimeFactor));
		newYTDPay += YTDPay + weeksPay;

		newStream 	<< employeeID << " "
					<< employeeName << " "
					<< departmentID << " "
					<< setw(3) << setfill('0') << YTDhoursRegular << " "
					<< setw(3) << setfill('0') << YTDhoursOvertime << " "
					<< setw(4) << setfill('0') << regularPayRate << " "
					<< setw(4) << setfill('0') << overtimeFactor << " ";

		if(transactionOccured)
		{
			newStream << setw(8) << setfill('0') << newYTDPay << " ";
		}
		else
		{
			newStream << setw(8) << setfill('0') << YTDPay << " ";
		}

//		cout << newStream.str() << endl;

		return newStream.str();
	}

};


