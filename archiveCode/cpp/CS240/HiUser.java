import java.util.*;

public class HiUser{   // all of the data is inside the class
                       // forces you to use object oriented
                       // also have to name the file the same
                       // name as the class

    static int j = 10; // must be declared static because the var is called before ther is an instance of the class
                       // if we do not want this to be static we will need an instance of the class

    public static void main(String[] args){  //main is called automatically but we cannot have a funciton in open space
                                             //must be in the class. That is why it is static. We call it before there is
	System.out.println("Hiya");          //an instance of a class, void because we return nothing. String[] is an array
	                                     //of strings, args is command lines.
	String name;
	int i = 0;
	i += 5;
	
	System.out.println(i);
	System.out.println(j);

	Scanner input = new Scanner (System.in);  // makes a scanner object
	
	// same thing but works with out the library
        // java.util.scanner input2 = new java.util.scanner (System.in);
	// when you include the library you arent really including the entire library
	// so its no big deal to include the library and do it the normal way

	//system is a calss that represnts the underlying operating sysyem
	//pretty much the same thing as "cin"

	String userName = input.nextLine();
		
    }//end method
                                             //C++ has args c and args c kind of the same thing
}//end class
