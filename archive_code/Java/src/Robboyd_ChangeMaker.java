

/**
 * @author Robert Boyd Sep 24, 2010
 *         robboyd@iupui.edu
 *	  	   robert.n.boyd@gmail.com
 *
 * 		   CS 230
 */

import java.math.*;
import java.util.*;
	//imports the java utilities
public class Robboyd_ChangeMaker {
	/*The program asks for a purchase price and the amount of cash tendered. It then determines if enough cash has been tendered 
	*  and if a non-standard dollar amount has been entered and rounds the amount to dollars and cents.
	*  It then determine how many of the following amounts of currency should be returned and displays those values for the user.
	*  Including the main there are 4 methods. Two are prompters, and one is a scaler that makes long float numbers into normal
	*  dollar amounts  
	*/
	public static void main(String[] args){
		// refer to methods xPrompter which get input from user then determines the scale of the input
		// if the scale of the input is greater than 2 it will refer to the shortenDecimal class which
		// returns a rounded BigDecimal
		System.out.println("\nRobert Boyd's");
		System.out.println(" ,--. .                     ,-,-,-.       . ");
		System.out.println("| `-' |-. ,-. ,-. ,-. ,-.   `,| | |   ,-. | , ,-. ,-.");
		System.out.println("|   . | | ,-| | | | | |-'     | ; | . ,-| |<  |-' |");
		System.out.println("`--'  ' ' `-^ ' ' `-| `-'     '   `-' `-^ ' ` `-' '");
		System.out.println("                   ,|   ");
		System.out.println("                   `'");
		
		//generated the ANSCI art at http://www.network-science.de/ascii
				
		BigDecimal purchasePrice = pricePrompter();
		BigDecimal cashTendered = cashPrompter();
		int compare = purchasePrice.compareTo(cashTendered);
		// this integer will start the prompting and checking loop below
		// compareTo returns a 1 if the cash tendered is less than purchase price
		while (compare == 1) { //checks to see if user has tendered enough currency to cover cost
			System.out.printf("\nUnfortunately $" +cashTendered);
			System.out.printf(" does not cover the purchase price of $" + purchasePrice);
				//displays what was tendered vs the price
			BigDecimal shortChange = purchasePrice.subtract(cashTendered);
				//determines how short the amount tendered is
			System.out.printf("\nYou require an additional $"+shortChange);
				//prints out how much more you require
			System.out.println("\n\nLets try again.");
			purchasePrice = pricePrompter();
			cashTendered = cashPrompter();
			//runs the prompter methods and returns the User input as BigDecimal
			compare = purchasePrice.compareTo(cashTendered);
			//checks the value of item cost and tendered amount and returns 1 if it is less
			//if the numbers are no good we loop again.
		}//end while	
		int purchasePennies = (purchasePrice.movePointLeft(-2).intValue());
		int tenderedPennies = (cashTendered.movePointLeft(-2).intValue());
		//initializes the int var Xpennies and moves the decimal point 2 places to the right, 
		//effectively converting the BigDecimal User input into pennies
		BigDecimal bChange = cashTendered.subtract(purchasePrice);
		//var is necessary to give user a clean output in dollars of their change
		//the var is equal to tendered minus price
		int change = (tenderedPennies - purchasePennies);
		//initializes the int var pennies as the number of pennies in the price minus those in tendered amount
		System.out.println("\nYour change is $"+ bChange+"\n");
		//Displays the change via the BigDecimal bChange
		int numArray[];
		numArray = new int [11];
			numArray[1] = 10000;
			numArray[2] = 5000;
			numArray[3] = 2000;
			numArray[4] = 1000;
			numArray[5] = 500;
			numArray[6] = 100;
			numArray[7] = 25;
			numArray[8] = 10;
			numArray[9] = 5;
			numArray[10] = 1;
		//holds the value of each bill in pennies
		String billArray[];
		billArray = new String [11];
			billArray[1] = "Hundreds: ";
			billArray[2] = "Fifties:  ";
			billArray[3] = "Twenties: ";
			billArray[4] = "Tens:     ";
			billArray[5] = "Fives:    ";
			billArray[6] = "Dollars:  ";
			billArray[7] = "Quarters: ";
			billArray[8] = "Dimes:    ";
			billArray[9] = "Nickels:  ";
			billArray[10] = "Pennies:  ";
		//holds the string value of each bill name
		for(int counter = 1; counter < 11; counter++){
			int quotent = (change/numArray[counter]);
				//divides change, in pennies by the value of pennies in numArray
				//since we are dealing with int variables we will get a 0 if the operation
				//would have a remainder
			int subtractor = (quotent*numArray[counter]);
				//now we initialize a variable which holds the number of pennies that we are
				//going to subtract from our change
			numArray[counter] = quotent;
				//updates our array
			change = change-subtractor;
				//updates our change count
			if(numArray[counter]>0){
				//checks if there is a value in the array
				System.out.println(billArray[counter]+" "+numArray[counter]);
				//if there is a value prints it along with corresponding bill type
			}//end if
			//updates the counter
		}//end for	
	}//end method
	
	public static BigDecimal pricePrompter(){	
		// takes input from the user and places it into a BigDecimal var called purchsePrice
		Scanner input = new Scanner(System.in);
		System.out.println("What is the price of the item?");
		BigDecimal purchasePrice = input.nextBigDecimal();
		
	
		int purchaseScale = purchasePrice.scale();
			if (purchaseScale > 2){
				purchasePrice = shortenDecimal(purchasePrice);
			}//end if
			
			return purchasePrice;
	
	}//end method
	
	public static BigDecimal cashPrompter(){
		// takes input from the user and places it into a BigDecimal var called cashTendered
		Scanner input = new Scanner(System.in);
		System.out.println("How much cash was tendered?");
		BigDecimal cashTendered = input.nextBigDecimal();
		int tenderedScale = cashTendered.scale();
		//rounds and shortens the scale of cashTendered
		if (tenderedScale > 2){
			cashTendered = shortenDecimal(cashTendered);  
		}//end if
		return cashTendered;
	}//end method
	
	private static BigDecimal shortenDecimal(BigDecimal longDecimal){
		//rounds the User input into a shorter 2 digit decimal
		System.out.println("\nYou have entered $"+longDecimal);
		BigDecimal shortDecimal = longDecimal.setScale(2, BigDecimal.ROUND_HALF_EVEN);
		// takes the longDecimal, inputed into the method then uses setScale to change it and round it
		// into the new var shortDecimal
		System.out.println("I am going to round that to $"+shortDecimal+"\n");
	  	//notifies the user that they have entered a non-standard amount
	  	return shortDecimal;		
	  	//returns the updated shortened BigDecimal
	}// end method
}//end class
