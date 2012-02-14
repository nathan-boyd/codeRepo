//class Database
//This class implements the synchronization methods to be used in 
//the readers writers problem
public class Database
{
   //MP1 create any variables that you need for implementation of the methods
   //of this class

    private int readerCount, writerCount; 	
    private Semaphore alpha, beta, gamma, delta, epsilon;
    
   //Database
   //Initializes Database variables
   public Database()
   {
       
       readerCount 	= 0;
       alpha 		= new Semaphore("alpha", 	1);
       beta 		= new Semaphore("beta", 	1);
       gamma 		= new Semaphore("gamma", 	1);
       delta 		= new Semaphore("delta", 	1);
       epsilon 		= new Semaphore("epsilon", 	1);
       
   }//end constructor

   //napping()
   //this is called when a reader or writer wants to go to sleep and when 
   //a reader or writer is doing its work.
   //Do not change for MP1
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
       //MP1
        epsilon.P();
        alpha.P();
        gamma.P();
        readerCount++;
    
        if (readerCount==1){
            beta.P();
        }//end if
        
        gamma.V();
        alpha.V();
        epsilon.V();
        
        return readerCount;

   }//end function

   //endRead()
   //This function is called by a reader that has finished reading from the 
   //database.  It returns the current number of readers excluding the one who
   //just finished.
   public int endRead()
   {
      //MP1
       
        gamma.P();
        readerCount--;
        
        if (readerCount==0) {
            beta.V();
        }//end if
        
        gamma.V();
        
        return readerCount;

   }//end function

   //startWrite()
   //This function should allow only one writer at a time into the Database
   //and block the writer if anyone else is accessing the database for read 
   //or write.
   public void startWrite()
   {
      //MP1
       
        delta.P();
        writerCount++;

        if (writerCount==1) {
            alpha.P();
        }//end if
        
        delta.V();
        
        beta.P();
               
   }//end function
   
   //endWrite()
   //signal that a writer is done writing and the database can now be accessed
   //by someone who is waiting to read or write.
   public void endWrite()
   {
      //MP1       

        beta.V();
        delta.P();
        writerCount--;
        
        if (writerCount==0) {
            alpha.V();
        }//end if
        
        delta.V();
       
   }//end function

}//end class