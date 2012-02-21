//class Database
//This class implements the synchronization methods to be used in 
//the readers writers problem
public class Database
{
	
	private int 		readerCount, 
						writerCount; 	

	private Semaphore 	mutex1, 
						mutex2,
						mutex3,
						db;

	//Database
	//Initializes Database variables
	public Database()
	{
	   
		writerCount 	= 0;
		readerCount 	= 0;
		
		mutex1 			= new Semaphore("mutex1", 	1);
		mutex2			= new Semaphore("mutex2", 	1);
		mutex3			= new Semaphore("mutex3", 	1);
		db 				= new Semaphore("db", 		1);

	}//end constructor

	//napping()
	//this is called when a reader or writer wants to go to sleep and when 
	//a reader or writer is doing its work.
	
	public static void napping()
	{
	  Alarm ac = new Alarm(20);  
	}//end function

	//startRead
	//this function should block any reader that wants to read if there 
	//is a writer that is currently writing.
	//it returns the number of readers currently reading including the
	//new reader.
	
	public int startRead()
	{
		
		mutex1.P();
		
			readerCount++;
			if(readerCount == 1) db.P();
		
		mutex1.V();
		
		return readerCount;
		
	}//end function

	//endRead()
	//This function is called by a reader that has finished reading from the 
	//database.  It returns the current number of readers excluding the one who
	//just finished.
	
	public int endRead()
	{
		
		mutex1.P();
		
			readerCount--;
			if(readerCount == 0) db.V();
		
		mutex1.V();
		
		return readerCount;
		
	}//end function

	//startWrite()
	//This function should allow only one writer at a time into the Database
	//and block the writer if anyone else is accessing the database for read 
	//or write.
	
	public void startWrite()
	{		
		mutex2.P();
		
			writerCount++;
			if(writerCount == 1) db.P();
	
		mutex2.V();
			   
	}//end function

	//endWrite()
	//signal that a writer is done writing and the database can now be accessed
	//by someone who is waiting to read or write.
	public void endWrite()
	{ 
		
		mutex2.P();
		
			writerCount--;
			if(writerCount == 0) db.V();
		
		mutex2.V();
		   		
	}//end function

}//end class