/********************************************************************************************************
* PROJECT TITLE: Project 11 Balance-Line Algorithm
*
* AUTHOR: Robert Nathan Boyd
*
* INCEPTION: 5 December 2011
*
* PURPOSE: 	Implement the balance-line algorithm for updating a sequential master file from a single
* 			transaction file
*
********************************************************************************************************/

#include "structsProg11.cpp"

using namespace std;

/********************************************************************************************************
* FUNCTION TITLE: makeMaster(string line)
*
* DESCRIPTION: Creates a masterFile object from a string
*
* @param string line	line from file
*
* @return tempMaster	masterfile object parsed from string parameter
*
********************************************************************************************************/

masterFile makeMaster(string line)
{
	masterFile tempMaster;
	vector<string> tokens;
	istringstream iss(line);

	//tokenize string
	copy(istream_iterator<string>(iss), istream_iterator<string>(), back_inserter<vector<string> >(tokens));

	tempMaster.employeeID       	= atoi (tokens[0].c_str());
	tempMaster.employeeName  	 	= tokens[1];
	tempMaster.departmentID   	 	= tokens[2];
	tempMaster.YTDhoursRegular  	= atoi (tokens[3].c_str());
	tempMaster.YTDhoursOvertime 	= atoi (tokens[4].c_str());
	tempMaster.regularPayRate 	 	= atof (tokens[5].c_str());
	tempMaster.overtimeFactor	 	= atof (tokens[6].c_str());
	tempMaster.ytdPay			 	= atof (tokens[7].c_str());

	return tempMaster;

}

/********************************************************************************************************
* FUNCTION TITLE: makeTransaction
*
* DESCRIPTION: Creates a transaction object from a string
*
* @param string line		line from file
*
* @return tempTransaction	transactionFile object parsed from string parameter
*
********************************************************************************************************/

transactionFile makeTransaction(string line)
{
	transactionFile tempTransaction;
	vector<string> tokens;
	istringstream iss(line);

	//tokenize string
	copy(istream_iterator<string>(iss), istream_iterator<string>(), back_inserter<vector<string> >(tokens));

	tempTransaction.employeeID        		= atoi (tokens[0].c_str());
	tempTransaction.regularHoursWorked		= atoi (tokens[1].c_str());
	tempTransaction.overtimeHoursWorked		= atoi (tokens[2].c_str());

	return tempTransaction;

}

/********************************************************************************************************
* FUNCTION TITLE: initializeReport(string reportFile)
*
* DESCRIPTION:	Write header data to report file
*
* @param string reportFile	name of the report file
*
* @return NA
*
********************************************************************************************************/

void initializeReport(string reportFile)
{
	ofstream if_report(reportFile.c_str(), ios::app);

	if_report << "EMPLOYEE  EMPLOYEE     HOURS    HOURS   PAY   OT   WEEK'S    YTD    NEW YTD" << endl;
	if_report << " NUMBER     Name     WORK REG. WORK OT  RATE RATE   PAY    EARNINGS EARNINGS" << endl;
//	if_report << "xxxxxxxxx xxxxxxxxxxxxx  xx      xx    xx.xx xx.xx xxxx.xx xxxxx.xx xxxxx.xx" << endl;
	if_report << endl;

	if_report.close();

}

/********************************************************************************************************
* FUNCTION TITLE: writeReport(workingStorage storageObject, string reportFile)
*
* DESCRIPTION:	Writes data from a working storage object to the report
*
* @param workingStorage storageObject	object containing transaction data, among other things
* @param string reportFile				name of the report to be written to
*
* @return NA
*
********************************************************************************************************/

void writeReport(workingStorage storageObject, string reportFile)
{
	ofstream if_report(reportFile.c_str(), ios::app);

	if_report << storageObject.getReport() << endl;

	if_report.close();

}

/********************************************************************************************************
* FUNCTION TITLE: writeMaster(workingStorage storageObject, string newMaster)
*
* DESCRIPTION:	Writes data from a working storage object to the new masterfile
*
* @param workingStorage storageObject	object containing transaction data, among other things
* @param string newMaster				name of the new masterFile to be written to
*
* @return NA
*
********************************************************************************************************/

void writeMaster(workingStorage storageObject, string newMaster)
{
	ofstream if_newMasterFile(newMaster.c_str(), ios::app);

	if_newMasterFile << storageObject.getMaster() << endl;

	if_newMasterFile.close();

}

/********************************************************************************************************
* FUNCTION TITLE: loadData
*
* DESCRIPTION: 	Implement the balance-line algorithm for updating a sequential master file from a single
* 				transaction file
*
* @param 	string master		name of the current employee masterFile
* @param	string transaction	name of the transaction file to read in and process
* @param	string newMaster	name of the new masterFile to be generated
* @param 	string reportFile	name of the report file to be generates
*
* @return Error_code based on the successful completion of the algorithim
*
********************************************************************************************************/

Error_code loadData(string master, string transaction, string newMaster, string reportFile)
{
	int activeKey;
	bool masterExists = true;
	bool transactionExists = true;
	ifstream if_masterFile(master.c_str());
	ifstream if_transactionFile(transaction.c_str());
	ifstream if_newMasterFile(newMaster.c_str());

	if (if_transactionFile.is_open() && if_masterFile.is_open())
	{
		//	Read an old master file record.  If EOF has occurred, set the master key to some "infinity" value.
		//	Read a transaction file record.  If EOF has occurred, set the transaction key to some "infinity" value.

		if (! getline(if_masterFile, master))
			masterExists = false;

		if (! getline(if_transactionFile, transaction))
			transactionExists = false;

		masterFile masterObject = makeMaster(master);
		transactionFile transactionObject = makeTransaction(transaction);
		workingStorage storageObject;

		//  If both master key and transaction key = "infinity", exit the loop.
		while (!(!masterExists && !transactionExists))
		{
			masterFile masterObject = makeMaster(master);

			//  Save the smallest key value from the master and transaction key as the "active key".

			if (masterObject.employeeID < transactionObject.employeeID)
				activeKey = masterObject.employeeID;
			else
				activeKey = transactionObject.employeeID;

			//  If master key > active key, signal an error.

			if (masterObject.employeeID > activeKey)
				return fail;
			else if (masterObject.employeeID == activeKey)
				storageObject.addMaster(masterObject);

			//  If master key matches active key move the old master values to working storage

			while (transactionObject.employeeID == activeKey && transactionExists)
			{
				//  Process the transaction (update working storage)

				storageObject.processTransaction(transactionObject);

				//  Read a new transaction file record, checking for EOF as before.

				if (! getline(if_transactionFile, transaction))
					transactionExists = false;
				else
					transactionObject = makeTransaction(transaction);

			}

			//  Write a record in the report file, reporting either the requested details or "NO TRANSACTION".

			writeReport(storageObject, reportFile);

			//  Make new master record and write it to the new master file.

			writeMaster(storageObject, newMaster);

			//  Read another old master record, checking for EOF as before.

			if (! getline(if_masterFile, master))
				masterExists = false;

		}

	}
	else
	{
		cout << "Input file not found" << endl;
		return fail;
	}

	if_masterFile.close();
	if_transactionFile.close();
	if_newMasterFile.close();

	return success;

}

int main()
{
	//  Write header information to the new report.
	initializeReport("Report.txt");

	if (loadData("Employee.txt", "TimeCard.txt", "NewEmployee.txt", "Report.txt") == 0)
		cout << "Transactions processed successfully." << endl;
	else
		cout << "Failed to complete successfully." << endl;
}
