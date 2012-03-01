

import java.util.Scanner;

/**
 * @author Robert Boyd Sep 28, 2010
 *         robboyd@iupui.edu
 *	  	   robert.n.boyd@gmail.com
 *
 * 		   CS 230
 */
public class Robboyd_Knock {


		public static void main(String[] args) 

		{
			Scanner input = new Scanner(System.in);
				// Initializes Scanner input and defines it as coming in from the console.
			
			System.out.println("Hi, What is your name?");
	        
	        String userName = input.nextLine();
	        	//UserName is the User's name
	        
	        System.out.println("Here's a joke, " + userName + ":");
	           
	        System.out.println("Knock Knock");
	        
	        String oneholder = input.nextLine();
	        	//oneIholder is a place holder for the User's input,response, to the console's Knock prompt.
	     
	        System.out.println("Luke");
	        
	        String twoholder = input.nextLine();
	        	//twoIholder is a place holder for Luke prompt response.
	        
	        System.out.println("Luke through the keyhole and you'll find out!");
	                   
	     }// end main class.

	}


