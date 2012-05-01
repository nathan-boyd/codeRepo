

/**
 * @author Robert Boyd Sep 27, 2010
 *         robboyd@iupui.edu
 *	  	   robert.n.boyd@gmail.com
 *
 * 		   CS 230
 */

import java.util.*;

public class Robboyd_HighLow {
	
public static void main(String[] args){
	
	boolean keepGoing = true;
	
	while(keepGoing){
		//keeps looping until user selects to quit
		
		System.out.println("\n                        Robert Boyd's");
		System.out.println("\n,-,-.             .             ,---.                       "); 
		System.out.println("` | |   . . ,-,-. |-. ,-. ,-.   |  -'  . . ,-. ,-. ,-. ,-. ,-."); 
		System.out.println("  | |-. | | | | | | | |-' |     |  ,-' | | |-' `-. `-. |-' |  "); 
		System.out.println(" ,' `-' `-^ ' ' ' ^-' `-' '     `---|  `-^ `-' `-' `-' `-' '  "); 
	 	System.out.println("                                 ,-.|                         "); 
		System.out.println("                                 `-+' 	 					  ");
		
		//*****generated the ANSCI art at http://www.network-science.de/ascii*****
		
		Scanner input = new Scanner(System.in);
		System.out.println("  You can try to guess my number or I can try to guess yours");
		System.out.println("\n                     Enter g, c, or q.");
		System.out.println("\n                  g) You guess my number");
		System.out.println("\n                  c) I'll guess your number");
		System.out.println("\n                  q) Quit.");
		//choice is the string containing the user's decision
		String choice = input.nextLine();
			if(choice.contains("c")){
				compGuess();
				keepGoing = true;
			}//end if
			else if(choice.contains("g")){
				userGuess();
				keepGoing = true;
			}//end else if
			else if(choice.contains("q")){
				System.out.println("\nThanks for playing. Goodbye.");
				keepGoing = false;
			}//end else if
			else {// if something other than c, g, or q is chosen catch the error
				System.out.println("I dont understand please try again.");
			}//end else
	}//end while
}//end main

	public static void userGuess(){
		//Generates a random number from 1 to 100 then takes input from user and determines if the input is equal to the 
		//random number higher than the random number of lower than it. 
		
		Scanner input = new Scanner(System.in);//new scanner called input
		int guess = 101; //initialize guess out of range of the random generator
		int counter = 0;// initialize counter. this var counts how many guesses the user took
		System.out.println("\nI'm thinking of a number between 1 and 100. \nGuess a number, and I'll tell you if its high or low.");
		System.out.println("Good luck.");
		
		Random randomGenerator = new Random();
		//initialize Random generator
		int randomInt = randomGenerator.nextInt(100);
		randomInt++;
		//generates random integer from 0 through 100
		
		try {
			while(guess != randomInt){
				//loops while guess does not equal randomInt
				System.out.println("\nPlease enter a number");
	
				guess = input.nextInt();//potential for exceptions if user enters non-integer
							
				//updates guess to User input
					if(guess > randomInt){
						System.out.println("Too high");
						counter++;
						//increments counter
					}//end if
					else if(guess < randomInt){
						System.out.println("Too low");
						counter++;
						//increments counter
					}//end if
			}//end while
		}//end try
		catch(Exception e){
			System.out.println("I dont understand your guess. Please enter an integer between 1 and 100.");
			userGuess();
		}//end catch
		
		if(guess == randomInt){
			System.out.println("\nCorrect!");
			counter++;
			System.out.println("It took you "+counter + " guesses.");
		}//end if
	}//end method
	
	public static void compGuess(){
		Scanner input = new Scanner(System.in);
			int guess = 50;
			int counter = 0;
			int highLimit = 100;
			int lowLimit = 0;
			String relationString = "";
			
			while(!relationString.equals("c")){
				//loops so long as relation string does not equal the char c
				counter++;
				System.out.println("\n"+"I think your number is "+ guess);
				System.out.println("Is this guess high, low, or correct?");
				System.out.println("\n"+"Enter the letter High (h) Low (l) Correct (c)");
				
				relationString = input.nextLine();
				//makes relation String lower case so that there is a little more room for error
		
				if(relationString.equals("l")){
					lowLimit = ++guess;//increment the guess because we know that the guess is not the correct number
					//sets the low limit of the guessing options
					guess = (highLimit+lowLimit)/2;
				}//end if
				
				else if(relationString.equals("h")){
					highLimit = --guess;//decrement the guess because we know the guess is not the right number
					//sets the high limit of the guessing options
					guess = (highLimit+lowLimit)/2;
				}//end if	
				
				else if(relationString.equals("c")){
				}//end if	
				else {
					System.out.println("*****I didnt understand your response*****");
				}//end else
				
//				***********NOT USING A RANDOM NUMBER GENERATOR BUT IT STILL WORKS IF THIS WERE IMPLEMENTED
//		                   JUST COMMENT OUT THE guess = block in the above if statements
				
//				Random randomGenerator = new Random();
//				guess = randomGenerator.nextInt(highLimit);
//				//updates the guess with a random number less than or equal to high limit
//				
//		        while(guess < lowLimit) {//if the guess is under the lowLimit we generate a new guess
//					guess = randomGenerator.nextInt(highLimit);
//					//once we have a guess higher than lowLimit we exit this nested while loop
//				}//end while
				
//				***********NOT USING A RANDOM NUMBER GENERATOR BUT IT STILL WORKS IF THIS WERE IMPLEMENTED
//				           JUST COMMENT OUT THE guess = block in the above if statements
				
			}//end while
			
		System.out.println("\n*****Awesome! I knew I would get it*****");
		System.out.println("*****  It only took me "+counter+" guesses!  *****");	
		
	}//end method
}//end class



