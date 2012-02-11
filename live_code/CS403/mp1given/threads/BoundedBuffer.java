//class BoundedBuffer
//This class implements the synchronization methods to be used in 
//the bounded buffer problem 

public class BoundedBuffer
{
   //MP1 create any variables you need
    
   
    int BUFFER_SIZE;
    private char[] buffer;
    
    int count, in, out = 0;
    
    Semaphore mutex;
    Semaphore fillCount;
    Semaphore emptyCount;

   //BoundedBuffer
   //constructor:  initialize any variables that are needed for a bounded 
   //buffer of size "size"
   public BoundedBuffer(int size)
   {
       

       
       
       this.BUFFER_SIZE = size;
       this.buffer = new char[BUFFER_SIZE];   
       this.mutex = new Semaphore("mutex", 1);
       this.fillCount = new Semaphore("fillCount", 0);
       this.emptyCount = new Semaphore("emptyCount", size);
       
   }
   
    public void putItemIntoBuffer(char c) {
	
	
	       
	emptyCount.P();
        mutex.P();
        
        //add an item to the buffer
        buffer[in] = c;
        in = (in + 1) % BUFFER_SIZE;
        mutex.V();
        fillCount.V();
    }
    
    public char removeItemFromBuffer() {
	this.fillCount.P();
	this.mutex.P();
        
        // remove an item from the buffer
        char item = this.buffer[this.out];
        this.out = (this.out + 1) % this.BUFFER_SIZE;
        this.mutex.V();
        this.emptyCount.V();
        
        System.out.println("Item " + item);
        
        return item;
    }
        

   //produce()
   //produces a character c.  If the buffer is full, wait for an empty slot
   public void produce(char c)
   {
     //MP1

    /*
            
        while (TRUE) {                    // loop forever
            make_new(widget);             // create a new widget to put in the buffer
            down(&empty);                 // decrement the empty semaphore
            down(&mutex);                 // enter critical section
            put_item(widget);             // put widget in buffer
            up(&mutex);                   // leave critical section
            up(&full);                    // increment the full semaphore
        }
    */

       
       while (true) 
       {
           emptyCount.P();
           mutex.P();
           this.putItemIntoBuffer(c);
           mutex.V();
           fillCount.V();
       }
     
   }

   //consume()
   //consumes a character.  If the buffer is empty, wait for a producer. use method SynchTest.addToOutputString(c) upon consuming a character. This is used to test your implementation.
   public void consume()
   {
     //MP1
     //make sure you change the following line accordingly
     //SynchTest.addToOutputString('c');
       
    /*
        
        while (TRUE) {                    // loop forever
            down(&full);                  // decrement the full semaphore
            down(&mutex);                 // enter critical section
            remove_item(widget);          // take a widget from the buffer
            up(&mutex);                   // leave critical section
            up(&empty);                   // increment the empty semaphore
            consume_item(widget);         // consume the item
        }
        
    */
        System.out.println("consumer");     
               
//        while (true) 
//        {
//            this.fillCount.P();
            this.mutex.P();
            char c = this.removeItemFromBuffer();
            this.mutex.V();
            this.emptyCount.V();
            
            System.out.println("This is c " + c);
            
            SynchTest.addToOutputString(c);
//        }

   }

}
