

/**
 * @author Robert Boyd Sep 28, 2010
 *         robboyd@iupui.edu
 *	  	   robert.n.boyd@gmail.com
 *
 * 		   CS 230
 */

import java.util.*;

public class Robboyd_Cryptography {
	
  static Scanner input = new Scanner(System.in);
  static String alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static String key =   "UBWKOVGAPRFJLCQHZENSXDMYTI";
  	//contains non-random key
  static String randKey = "";
  	//will contain a random key string
     
public static void main(String[] args) {
    boolean keepGoing = true;
	System.out.println("\nRobert Boyd's");
    System.out.println("     ,--.             .                      .      ");
    System.out.println("    |  -' ,-. . . ,-. |- ,-. ,-. ,-. ,-. ,-. |-. . .");
    System.out.println("    |   . |   | | | | |  | | | | |   ,-| | | | | | |");
    System.out.println("    `--'  '   `-| |-' `' `-' `-| '   `-^ |-' ' ' `-|");
    System.out.println("               /| |           ,|         |        /|");
    System.out.println("              `-' '           `'         '       `-'");
    	    
	//generated the ANSCI art at http://www.network-science.de/ascii
    
    while(keepGoing){
   	        String response = menu();
			if (response.equals("1")){
			          System.out.println("Please enter unencrypted phrase");
			          String plain = input.nextLine();
			          plain  = plain.replaceAll(" ","");
			          plain = plain.toUpperCase();
			          System.out.println(encrypt(plain));
					  }//end if
			else if (response.equals("2")){
			          System.out.println("Please enter an unencrypted phrase");
			          String code = input.nextLine();
			          code  = code.replaceAll(" ","");
			          code = code.toUpperCase();
			          System.out.println(randEncrypt(code));
					  }//end if
			else if (response.equals("3")){
			          System.out.println("Please enter a standardly encrypted phrase");
			          String code = input.nextLine();
			          code  = code.replaceAll(" ","");
			          code = code.toUpperCase();
			          System.out.println(decrypt(code));
					  }//end if
			else if (response.equals("4")){
			          System.out.println("Please enter a randomly encrypted phrase from current console session");
			          String code = input.nextLine();
			          code  = code.replaceAll(" ","");
			          code = code.toUpperCase();
			          System.out.println(randDecrypt(code));
					  }//end if
			else if   (response.equals("0")){
			          System.out.println("Goodbye!");
			          keepGoing = false;
					  }//end if
			else      {
			          System.out.println("Sorry. I didn't understand");
                      } // end else
    	} // end while
}//end main

	public static String menu() {
		//method returns a string that indicates the user's choice
		System.out.println("\nSelect an option");
		System.out.println("0) Quit");
		System.out.println("1) Encrypt a phrase with standard key");
		System.out.println("2) Encrypt a phrase with RANDOM key");
		System.out.println("3) Decrypt a standardly encrypted phrase");
		System.out.println("4) Decrypt a randomly encrypted phrase");
		System.out.println("\n   ***Choice 4 only works if passphrase was encrypted \n           in in current console session.***");
		System.out.println("\nPlease enter your choice");
		String choice = input.nextLine();
		return choice;
	}// end method

	public static String encrypt(String original) {
		//takes in a user phrase "original" and encrypts it using a predefined key called "key"
		//returns the encrypted string
		String encrypted = "";
			//initialize the string to be returned
		for(int counter = 0; counter < original.length(); counter++) {
			char alphaChar = original.charAt(counter);
				//alphaChar equals the character at "counter"
			int replaceIndex = alpha.indexOf(alphaChar);
				//replaceIndex equals the place in the alphabet where alphaChar resides
			char keyChar = key.charAt(replaceIndex);
				//keyChar equals the character in the key equal to the character at "replaceIndex"
			encrypted += keyChar;
				// concatenates encrypted with "keyChar"
			}//end while
		return encrypted;
	}//end method

	public static String decrypt(String original) {
		String decrypted = "";
		for(int counter = 0; counter < original.length(); counter++){
			//replaces the characters in the string with corresponding chars in the alphabet
			char alphaChar = original.charAt(counter);
				//equals the char at counter
			int replaceIndex = key.indexOf(alphaChar);
				//determines where this char appears in the key
			char keyChar = alpha.charAt(replaceIndex);
				//equals to the character in the alphabet that corresponds to the key
			decrypted += keyChar;
				//Concatenates the string
		}//end while
		return decrypted;
	}//end method

	public static String randEncrypt(String original) {
		String encrypted = "";
	    String alphaArray[] = new String[26];
			//initialize the array
		for(int counter = 0; counter < 26; counter++){
			//fills the array with the values of Global var "alpha"
			char alphaChar = alpha.charAt(counter);
			alphaArray[counter] = Character.toString(alphaChar);
		}//end while
	    List<String> arrayAsList = Arrays.asList(alphaArray);
	    	//makes new String list that contains the same values as alphaArray
	    Collections.shuffle(arrayAsList);
	    	//shuffles the list
	    for(int counter = 0; counter < alphaArray.length; counter++){
	    	//fills random key with the shuffled list string values
	        randKey += alphaArray[counter];
	        }//end for
		for(int counter = 0; counter < original.length(); counter++){
			//replaces the original string with the randKey values
			char alphaChar = original.charAt(counter);
			int replaceIndex = alpha.indexOf(alphaChar);
			char keyChar = randKey.charAt(replaceIndex);
			encrypted += keyChar;
			//System.out.println(alphaArray[counter]);
			}//end for
		return encrypted;
	}//end method

	public static String randDecrypt(String original){
		//same as earlier decrypt except that it contains randKey
		String decrypted = "";
		for(int counter = 0; counter < original.length(); counter++){
			char alphaChar = original.charAt(counter);
			int replaceIndex = randKey.indexOf(alphaChar);
			char keyChar = alpha.charAt(replaceIndex);
			decrypted += keyChar;
		}//end for
		return decrypted;
	}//end method
}//end class

