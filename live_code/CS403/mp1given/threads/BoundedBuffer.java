//class BoundedBuffer
//This class implements the synchronization methods to be used in 
//the bounded buffer problem 

public class BoundedBuffer
{
   //MP1 create any variables you need
          	
    private int BUFFER_SIZE;
    private int in, out;
    private Object[] buffer;
    private Semaphore mutex, full, empty;

   public BoundedBuffer(int size)
   {
       BUFFER_SIZE 	= size;
       in 		= 0;
       out		= 0;
       
       buffer 		= new Object[BUFFER_SIZE];   
       
       mutex 		= new Semaphore("mutex", 1);
       full 		= new Semaphore("full", 0);
       empty 		= new Semaphore("empty", size);
       
   }

   //add an item to the buffer
   public void insert_item(Object item) {

       buffer[in] = item;
       if (in == BUFFER_SIZE) in = 0;
      
//       buffer[in] = item;
//       in = (in + 1) % BUFFER_SIZE;

       
   }

   //remove an item from the buffer 
   public Object remove_item() {
       
//       Object item = buffer[out++];
//       if (out == BUFFER_SIZE) out = 0;
       
       Object item = buffer[out];
       out = (out + 1) % BUFFER_SIZE;


       return item;
   }
        
   //produces a character c.  If the buffer is full, wait for an empty slot
   public void produce(char item) {

        do {
            empty.P(); 				// wait if buffer is full
            mutex.P(); 				// mutual exclusion to protect buffer
            insert_item(item); 			// insert item into buffer
            mutex.V(); 				// end M.E.
            full.V(); 				// increment full
        } while (true);
     
   }

   //consumes a character.  If the buffer is empty, wait for a producer. use method
   //SynchTest.addToOutputString(c) upon consuming a character. This is used to test 
   //your implementation.
   public void consume()
   {
        do {
            full.P(); 					// wait if buffer is empty
            mutex.P(); 					// start M.E.
            Object item = remove_item();     		// remove item from buffer     
            mutex.V(); 					// end M.E.
            empty.V(); 					// increment empty.
   
            try {
        	SynchTest.addToOutputString((Character) item);
            }catch (Exception e) {}
   
        } while (true);
            
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*
   int BUFFER_SIZE;
   Semaphore mutex;
   Semaphore empty;
   Semaphore full;
   int in, out, count;
   Object[] buffer;

	
   public BoundedBuffer (int size) {
       // buffer is initially empty
       count = 0;
       in = 0;
       out = 0;
       buffer = new Object[BUFFER_SIZE];
       mutex = new Semaphore("", 1);
       empty = new Semaphore("", BUFFER_SIZE);
       full = new Semaphore("", 0);
   }
   	
   public void produce(Object item) {
       empty.P();
       mutex.P();
       // add an item to the buffer
       buffer[in] = item;
       in = (in + 1) % BUFFER_SIZE;
       mutex.V();
       full.V();
   }
   	
   public void consume() {
       full.P();
       mutex.P();
       // remove an item from the buffer
       Object item = buffer[out];
       out = (out + 1) % BUFFER_SIZE;
       mutex.V();
       empty.V();
       try {
           SynchTest.addToOutputString((Character) item);
       }catch(Exception e) {}
   }
	
*/
   

}//end class
