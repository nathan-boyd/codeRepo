
//class BoundedBuffer
//This class implements the synchronization methods to be used in 
//the bounded buffer problem 

public class BoundedBuffer
{
   //MP1 create any variables you need
          	
    private static int BUFFER_SIZE;
    private static int in, out;
    private static Object[] buffer;
    private static Semaphore mutex, full, empty;

   public BoundedBuffer(int size)
   {
       BUFFER_SIZE 	= size;
       in 		= 0;
       out		= 0;
       
       buffer 		= new Object[BUFFER_SIZE];   
       
       mutex 		= new Semaphore("mutex", 1);
       full 		= new Semaphore("full", 0);
       empty 		= new Semaphore("empty", size);
       
   }//end function

   //add an item to the buffer
   public void insert_item(Object item) {
             
       buffer[in] = item;
       in = (in + 1) % BUFFER_SIZE;
       
   }//end function

   //remove an item from the buffer 
   public Object remove_item() {
              
       Object item = buffer[out];
       out = (out + 1) % BUFFER_SIZE;
       return item;
       
   }//end function
   
   //consume an item by passing it to the output stream
   public void consume_item(Object item) {
       
   	SynchTest.addToOutputString((Character) item);
       
   }//end function
        
   //produces a character c.  If the buffer is full, wait for an empty slot
   public void produce(char item) {
        
        empty.P(); 				// wait if buffer is full
        mutex.P(); 				// mutual exclusion to protect buffer
        insert_item(item); 			// insert item into buffer
        mutex.V(); 				// end M.E.
        full.V(); 				// increment full
     
   }//end function

   //consumes a character.  If the buffer is empty, wait for a producer. use method
   //SynchTest.addToOutputString(c) upon consuming a character. This is used to test 
   //your implementation.
   public void consume()
   {
        full.P(); 					// wait if buffer is empty
        mutex.P(); 					// start M.E.
        Object item = remove_item();     		// remove item from buffer     
        mutex.V(); 					// end M.E.
        empty.V(); 					// increment empty.
        consume_item(item);				// send the item to output stream

   }//end function
   
}//end class
