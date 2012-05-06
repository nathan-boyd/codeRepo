

import java.util.*;

/**
 * @author Robert Boyd Sep 28, 2010
 *         robboyd@iupui.edu
 *	  	   robert.n.boyd@gmail.com
 *
 * 		   CS 230
 */

public class Robboyd_Card_Game{
	
	  static boolean starter = true;

	  public static final int DECK = 0;
	  public static final int PLAYER = 1;
	  public static final int COMP = 2;
	  
	  public static int playerBooks = 0;
	  public static int compBooks = 0;
	  
	  public static String[] pond;
	  public static int icardCount = 0; //determines where the next card will be drawn from the pond
	  
	  public static String[] playerHand = new String[52];
	  public static String[] compHand = new String[52];
	  	  
	  public static void main(String[] args) { //builds the deck, deals, then starts menu
		  
		pond = deckBuilder(); // builds a new random "pond" from which to draw cards
		
		for(int i = 0; i < 51; i++) {//initialize the players hand up to 52 cards
			playerHand[i] = "Empty";
			compHand[i] = "Empty";
		}//end for
  
		for(int i = 0; i < 5; i++) { //deals 5 cards from the pond to user and comp
			playerHand[i] = DrawCard();
			compHand[i]  = DrawCard();
		}//end for
		
		Menu();

	  }//end main 
	  
	public static void Prompt(int player) {
		
		Scanner input = new Scanner(System.in);
		
		String[] cardsWon = new String[52];
		boolean loser = true;//determines if we need to add a card
		int icardsWon = 0;// number of cards won
		
		for(int i = 0; i < 51; i++) {//makes all values of cardsWon Empty
			cardsWon[i]= "Empty";
		}//end for
			
		BookCheck(playerHand, PLAYER);
		BookCheck(compHand, COMP);

		if(player == PLAYER && starter == true) {
				
			ShowPlayerHand(PLAYER);//displays cards

			//array of acceptable answers
			String[] correct = { "Menu", "Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two",};
			boolean keepGoing = true;
			
			System.out.println("\n***You have completed "+playerBooks+" books and I have completed "+compBooks+" books***");

				
			System.out.println("\nYou may ask your opponent for an Ace, King, Queen, Jack, Ten, Nine, Eight, Seven, Sixe, Five, Four, Three, or Two.");
			System.out.println("\nCapitalization counts! What would you like to request?");
			System.out.println("Enter Menu for the Menu");
			String response = input.nextLine();
				
			for(int i = 0; i < correct.length; i++) {
				if(correct[i].contains(response)){
					keepGoing = false;
				}//end if
			}// end for
				
			while(keepGoing) {//loops until a usable response is given
				System.out.println("\nI didnt understand **"+response+"** please try again");

				System.out.println("\nYou may ask your opponent for an Ace, King, Queen, Jack, Ten, Nine, Eight, Seven, Sixe, Five, Four, Three, or Two.");
				System.out.println("\nWhat would you like to request?:");
				response = input.nextLine();
									
				for(int i = 0; i < 12; i++) {//Checks for a correct response
					if(correct[i].equals(response)){
						keepGoing = false;
					}//end if	
				}//end for
			}//end while
			
			if(response.equals("Menu")) { // allows user to access Menu
				Menu();
			}
			
			for(int i = 0; i < 51; i++) { //determines if the opponent has the requested cards
				if(compHand[i].contains(response)){
					loser = false;
					cardsWon[icardsWon] = compHand[i];
					System.out.println("****Won the "+cardsWon[icardsWon]+"****");
					icardsWon++;
						
				}//end if
			}// end for
			if(loser == true) {
				System.out.println("\nSorry you didnt win any "+response+"s");
				System.out.println("\n*********GO FISH!*********");
				String card = DrawCard();
				int spot = 0;
				for(int i = 0; i < 51; i++) {
					if(playerHand[i].equals("Empty")){
						spot = i;
						i=52;
					}//end if
				}//end for
				playerHand[spot] = card;
				System.out.println("You drew a " +card+ "");
					
				Prompt(COMP);
					
			}// end if
			if(loser == false) {
				AddCard(PLAYER, cardsWon);
				Prompt(PLAYER);
				
			}//end if	
		}//end if
			
		if(player == COMP && starter == true) {
				
			BookCheck(compHand, COMP);
					
			int compCardCount = 0;//represents how many cards are in the hand
			
			for (int i = 0; i < 51; i++) {//counts cards in the hand
				if(compHand[i].contains(" ")){
					compCardCount++;
				}//end if
			}//end for
			
			
								
			Random randomGenerator = new Random();
			boolean keepGoing = true;
			String response = "";
			
			if (compCardCount == 0) {
				loser = true;
				keepGoing = false;
			}//end if
			
			while(keepGoing) { //loops until the comp requests a card that is already in its hand
				
				String[] correct = { "Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two",};
				int randomInt = randomGenerator.nextInt(12);//generates a random number less than the number of cards in the comps hand
					
				response = correct[randomInt];
			
				for(int i = 0; i < 51; i++) { // forces the comp to request a card that it already has
					if(compHand[i].contains(response)){
						keepGoing = false;
					}//end if
				}//end for	
			}// end while
					
			if(compCardCount>0) {
				System.out.println("\nDo you have a "+ response+ "?");
				
				for(int i = 0; i < 51; i++) {
					if(playerHand[i].contains(response)){
						loser = false;
						cardsWon[icardsWon] = playerHand[i];
						System.out.println("*****I won your "+cardsWon[icardsWon]+"*****");
						icardsWon++;
					}//end if
				}// end for
			}//end if
			
			if(loser == true) {
				System.out.println("You dont have a "+response+".");
				System.out.println("\n          I'll");
				System.out.println("*********GO FISH!*********");
				
				String card = DrawCard();
				int spot = 0;
				for(int i = 0; i < 51; i++) {
					if(compHand[i].equals("Empty")){
						spot = i;
						break;
					}//end if
				}//end for
				compHand[spot]= card;
				System.out.println("I drew a "+card);
				
				Prompt(PLAYER);

			}//end if
			
			
		}// end if
				
		if(loser == false) {
			AddCard(COMP, cardsWon);
			Prompt(COMP);
			
		}//end if
		
		BookCheck(playerHand, PLAYER);
		BookCheck(compHand, COMP);
	
	}//end method
	  
	public static String DrawCard() {//return a random card
		
		boolean keepGoing = true;
		String Card = "";
		
		while(keepGoing) {
			if(icardCount<51) {
				  Card = pond[icardCount];
				  pond[icardCount]="Empty";
				  icardCount++;
				  
				  for(int i =0;i<51;i++) {
					  if(playerHand[i].equals(Card)){
						  keepGoing = true;
					  }
					  else {
						  keepGoing = false;
					  }
				  }
				  for(int i =0;i<51;i++) {
					  if(compHand[i].equals(Card)){
						  keepGoing = true;
					  }
					  else {
						  keepGoing = false;
					  }
				  }		
			}
			else {
				pond = deckBuilder();
				icardCount=0;
				keepGoing = true;
			}
		}
		return Card;
		  

	  }// end method
	
	public static void AddCard(int player, String[] cardWon) {// adds the cards won to the winner's hand		
		int icardsWon = 0;
		for(int i = 0; i < 51; i++) {// counts how many cards have been won
			if(cardWon[i].contains(" ")) {
				icardsWon++;
			}
		}
		if(player == PLAYER) {//puts the new card in the hand
			for(int i = 0; i < 51; i++) {
				if(playerHand[i].contains("Empty")) {
					if(icardsWon > -1) {
						playerHand[i] = cardWon[icardsWon];	
						icardsWon--;
					}//end if
				}// end if
			}//end for	
			for(int i = 0; i < 51; i++) { //removes the cards won from opponents hand
				String search = cardWon[i];
					for(int j = 0; j < 51; j++) {
						if(compHand[j].equals(search)) {
							compHand[j] = "Empty";	
						}// end if
					}//end for
			}//end for	
		}// end if
		
		if(player == COMP) {//determines where the empty cards start
			for(int i = 0; i < 51; i++) {
				if(compHand[i].contains("Empty")) {
					if(icardsWon > -1) {
						compHand[i] = cardWon[icardsWon];	
						icardsWon--;
					}//end if
				}// end if
			}//end for	
			for(int i = 0; i < 51; i++) {//determines where the empty cards start
				String search = cardWon[i];
					for(int j = 0; j < 51; j++) {
						if(playerHand[j].equals(search)) {
							playerHand[j] = "Empty";	
						}// end if
					}//end for
			}//end for	
		}//end if
	}//end method

	public static void ShowPlayerHand(int player) {// Displays cards in the hand
		
	
		if(player == PLAYER) {
			

			

			System.out.println("\n*****These cards are in your hand.*****\n");
			
			for(int i = 0; i < 51; i++) {
				if(playerHand[i] != "Empty")
				  System.out.println(playerHand[i]);
			  }//end for	
			
		}//end if
		
		if(player == COMP) {
			System.out.println("\nThese cards are in the Comp's hand.\n");
			for(int i = 0; i < 51; i++) {
				if(compHand[i] != "Empty")
				  System.out.println(compHand[i]);
			  }//end for	
		}//end if
	}//end method		
	
	public static void BookCheck(String[] hand, int player) {
		
			//build and array of card names equal to the names of the player (ie two, three, four)
			int handLength = 0;
			int cardMatch = 0;
			boolean bookOfCards = false;
			String bookOf = "nothing";
			
			
			for(int i = 0; i < 51; i++) {
				if(hand[i] != "Empty") {
					handLength++;
				}//end for
			}//end for
			
			String[] subs = new String[handLength];
			
			for(int i = 0; i < handLength; i++) { //fill the subs array with single word card names
				int end = hand[i].indexOf(" "); //determines where the  " " occurs in the card name
				end++; // makes the ending index of the substring one greater, accounts for string start at 0
				String cardName = hand[i].substring(0, end);
				subs[i] = cardName;
			}//end for
			
//			System.out.println("\nHand Length of " + player + " is " + handLength);
			
			boolean keepGoing = true;
			int counter = 0;
			String[] names = { "Ace ", "King ", "Queen ", "Jack ", "Ten ", "Nine ", "Eight ", "Seven ", "Six ", "Five ", "Four ", "Three ", "Two"};
			int[] instances = new int[13];
			
			if(handLength>0) {
				while(keepGoing) {		
					for(int i = 0; i <13; i++) {
						if(names[i].equals(subs[counter])) {
							instances[i]++;
						}//end if
					}//end for
					
					counter ++; //increments counter to check for value of next subs
					
					if(counter == handLength) {
						keepGoing = false;
					}//end if
				}//end while	
				
				for(int i = 0; i <13; i++) {
					
//					System.out.println("Names " + names[i] + " " +instances[i]);
					
					if (instances[i]==4) {			
						bookOfCards = true;
						bookOf = names[i];
					}//end if				
				}//end for
				
				for(int i = 0; i < handLength; i++) { //replaces the hand card with the "Empty String"
					if(hand[i].contains(bookOf)) {
						hand[i]="Empty";
					}//if
				}//end for
			}//end if
			

		
			if(bookOfCards==true) {
				if(player == PLAYER) {
					playerBooks++;
					
					if(starter==true) {
						System.out.println("\n**********You have completed a book of "+bookOf+"**********");

					}
					
					
					if(playerBooks==4) {
						Victory();
					}

				}//end if
				if(player == COMP) {
					compBooks++;
					
					if(starter==true) {
						System.out.println("\n**********I have completed a book of "+bookOf+"**********");

					}
					
					
					if(compBooks==4) {
						Victory();
					}
				}//end if
			}//end if	
		}//end Method
		
		public static String[] deckBuilder(){//builds a random deck then returns it
			Random randomGenerator = new Random();
			//initialize Random generator
			String[] cards = {
				 "Ace of Spades", "Ace of Hearts", "Ace of Clubs", "Ace of Diamonds", "Two of Spades", "Two of Hearts",
				 "Two of Clubs", "Two of Diamonds", "Three of Spades", "Three of Hearts", "Three of Clubs", "Three of Diamonds",
				 "Four of Spades", "Four of Hearts", "Four of Clubs", "Four of Diamonds", "Five of Spades", "Five of Hearts", "Five of Clubs",
				 "Five of Diamonds", "Six of Spades", "Six of Hearts", "Six of Clubs", "Six of Diamonds", "Seven of Spades", "Seven of Hearts",
				 "Seven of Clubs", "Seven of Diamonds", "Eight of Spades", "Eight of Hearts", "Eight of Clubs", "Eight of Diamonds",
				 "Nine of Spades", "Nine of Hearts", "Nine of Clubs", "Nine of Diamonds", "Ten of Spades", "Ten of Hearts", "Ten of Clubs",
				 "Ten of Diamonds", "Jack of Spades", "Jack of Hearts", "Jack of Clubs", "Jack of Diamonds", "Queen of Spades", "Queen of Hearts",
				 "Queen of Clubs", "Queen of Diamonds", "King of Spades", "King of Hearts", "King of Clubs", "King of Diamonds",
			};//end string
			
			for(int i = 0; i<cards.length; i++) {
				int randomInt = randomGenerator.nextInt(51);
			
				if(cards[i] != cards[randomInt]) {//switches two cards randomly
					String holder = cards[i];
					cards[i] = cards[randomInt];
					cards[randomInt] = holder;
				}//end if
			}//end for
			return cards;
		}//end method
		
	public static void Victory() {
		
		if(starter == true) {
			System.out.println("\n      AND HAVE ACHEIVED");
			System.out.println("\n	,.   ,.     .              ");
			System.out.println("	`|  / . ,-. |- ,-. ,-. . . ");
			System.out.println("	 | /  | |   |  | | |   | | ");
			System.out.println("	 `'   ' `-' `' `-' '   `-| ");
			System.out.println("	                        /| ");
			System.out.println("	                       `-' ");
			System.out.println("     THANKS FOR PLAYING GOODBYE");
			
			starter = false;
		}
		
		starter = false;
		
	}//end method
	
	public static void Menu() {
		
		Scanner input = new Scanner(System.in);

		
		System.out.println("		,---.       .-,--'      .    ");
		System.out.println("		|  -'  ,-.    |__ . ,-. |-.  ");
		System.out.println("		|  ,-' | |    |   | `-. | |  ");
		System.out.println("		`---|  `-'   `'   ' `-' ' '  ");
		System.out.println("		 ,-.|                        ");
		System.out.println("		 `-+'   				     ");
		
		System.out.println("                         Robert Boyd");
		
//		ANSCI art generated at http://www.network-science.de/ascii/
		
		boolean keepGoing = true;
		
		while(keepGoing) {
			System.out.println("\nChoose from the following.");
			System.out.println("1) Show cards left in the deck");
			System.out.println("2) Play / continue game");
			System.out.println("3) Show the player's and computer's cards");
			System.out.println("4) Learn the Rules of Go Fish");
			System.out.println("5) Quit ");
			System.out.println("\nEnter Menu at any time to come back to this menu");
			
			String response = input.nextLine();
			
			if(response.equals("1")) { // displays the cards left in the deck
				System.out.println("\n*****These cards are in the deck.*****\n");
				
				for(int i = 0; i < 51; i++) {
					if(pond[i]!="Empty") {
						System.out.println(pond[i]);
					}//end if
				}// end for
			}// end if
			
			else if(response.equals("2")) { //play the game
				keepGoing = false;
				Prompt(PLAYER);
				
			}//end else
			
			else if(response.equals("3")) {
				ShowPlayerHand(PLAYER);
				ShowPlayerHand(COMP);
			}
			

			else if(response.equals("4")) { // explains the rules of the game
				System.out.println("\n*****Rules of Go Fish*****");
				System.out.println("On your turn, ask a player for a specific card rank. You must already hold at least one card of the requested rank.");
				System.out.println("If the player you ask has any cards of the requested rank, she must give all of her cards of that rank to you.");
				System.out.println("If you get one or more cards from the player you ask, you get another turn. You may ask any player for any rank you ");
				System.out.println(	"already hold, including the same one you just asked for. If the person you ask has no relevant cards, they say, Go fish. ");
				System.out.println("To Go Fish. You then draw the top card from the draw pile.");
				System.out.println("\n*****It is important to not that you may request cards not in your hand to expedite gameplay  / cheat if you desire*****");
				System.out.println("\n*****To Win: Make 4 books of any similar cards.*****");


			}//end else
			
			else if(response.equals("5")) { //exits the game
				System.out.println("Thanks for playing. Goodbye.");
				keepGoing = false;
				starter = false;
			}//end else
			
			else if(response.equals("Menu")) {
				Menu();
			}//end else
			
			else {
				System.out.println("I didnt understand please try again");
				//stay in loop and prompt again
			}//end else
			
		}//end while


		
	
	}
}// end class



