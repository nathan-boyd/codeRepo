//============================================================================
// Name        : Blackbelt_Horse_Race.cpp
// Author      : Robert Boyd
// Version     :
// Copyright   :
// Description : OOP Powered Horse Race with a menu and betting system.
//============================================================================

#include <iostream>
#include <cctype>
#include <cstdlib>
#include <time.h>
#include <sys/time.h>
#include <string>
#include <limits>
#include <ios> 

using namespace std;

class Horse{

  private:

    int iPosition;

  public:

     Horse(){

       iPosition = 0;                                           // position in the race
     }// end method

     void Advance(){

       struct timeval tv;                                       // have to seed the number generator in this manner because
       gettimeofday(&tv, NULL);                                 // my linux box rounds the system clock
       srand(tv.tv_sec * tv.tv_usec);

       int iRandnum = rand() % 2;                               // generate a random number from 0-1

       if(iRandnum == 1){
         iPosition++;
       }// end if
     }// end method

     int getPosition(){
       return(iPosition);
     }// end method
};// end class

class Race{

  private:

  int iHorses;                                                          // number of horses competing
  int iLength;                                                          // length of the race
  int betHorse;
  int ibet;
  int iUserCash;

  public:

  Race(int dollars){
       Race::iUserCash = dollars;
       menu(iUserCash);
  }// end method
  
  void menu(int dollars){

    int length;                                //length of the race
    int horses;                                //number of horses to race
    int betHorse;                              //horse user places a bet on
    int ibet;                                  //ammount of bet
    bool keepGoing = true;                     //gatekeeper var
    string bet;

    cout << "\n\n";
    cout << "ooooo   ooooo                                          ooooooooo.                                  \n";
    cout << "`888'   `888'                                          `888   `Y88.                                \n";
    cout << " 888     888   .ooooo.  oooo d8b  .oooo.o  .ooooo.      888   .d88'  .oooo.    .ooooo.   .ooooo.   \n";
    cout << " 888ooooo888  d88' `88b `8888P d8 (     8 d88' `88b     888ooo88P'  `P  )88b  d88' ` Y8 d88' `88b  \n";
    cout << " 888     888  888   888  888     ` Y88b.  888ooo888     888`88b.     .oP 888  888       888ooo888  \n";
    cout << " 888     888  888   888  888     o.  )88b 888    .o     888  `88b.  d8(  888  888   .o8 888    .o  \n";
    cout << "o888o   o888o `Y8bod8P' d888b    8  888P' `Y8bod8P'    o888o  o888o `Y888""8o  `Y8bod8P' `Y8bod8P' \n";
    cout << "\n                                            By Robert Boyd";

    // ANSCI art generated at http://www.network-science.de/ascii/ 

    while(keepGoing){
      cout << "\nHow many Horses should we race?\n";
      cin >> horses;

      if (cin.fail()||horses<2){ // error handling. is this technique the best practice?
	cout << "That is not correct input. Please enter a number greater than 2\n";
	cin.clear();
	cin.ignore(numeric_limits<streamsize>::max(), '\n');
      } else{
	keepGoing = false;
      }//end if
    }//end while

    keepGoing = true;

    while(keepGoing){
      cout << "How long should we make their race track? Enter a number, 25 is average.\n";
      cin >> length;

      if (cin.fail()||horses<2){ // error handling. is this technique the best practice?
	cout << "That is not correct input. Please enter a number greater than 2\n";
	cin.clear();
	cin.ignore(numeric_limits<streamsize>::max(), '\n');
      } else{
	keepGoing = false;
      }//end if
    }//end while

    keepGoing = true;
  
    cout << "Would you like to place a bet on which horse will win?\nEnter 'yes' or 'y'";
    cin >> bet;

    if(bet.compare("yes")==0||bet.compare("y")==0){

      while(keepGoing){

	cout<<"Which horse would you like to bet on \n";

	for(int i = 0; i < horses; i++){
	  cout << "Enter " << i << " to bet on horse " << i << "\n";
	}//end for

	cin >> betHorse;

	if(betHorse < 0 || betHorse > (horses-1)|| isalpha(betHorse)){
	  cout << "Invalid horse to bet on. Please try again.\n";
	} else if (cin.fail()){
	  cout << "That is not correct input. Please enter a number from o to " << (horses-1) << endl;
	  cin.clear();
	  cin.ignore(numeric_limits<streamsize>::max(), '\n');
	} else{
	  keepGoing = false;
	}//end if
      }//end while

      keepGoing = true;

      while(keepGoing){
	cout<< "How much would you like to bet?\n";
	cout<< "You currentely have " << dollars << " dollars\n";
	if(dollars <= 0){
	  cout << "I will give you 50 dollars to bet with\n";
          dollars = 50;
        }//end if 

	cin >> ibet;

	if(ibet <= dollars && ibet >= 0){
	  cout << "You have bet " << ibet << ".\n";
	  keepGoing = false;
	} else if (cin.fail()){
	  cout << "That is not correct input. Please enter a number from to " << dollars  << endl;
	  cin.clear();
	  cin.ignore(numeric_limits<streamsize>::max(), '\n');
	}//end if
      }//end while
    }//end if
    
    Race::iLength = length;       //update globals to values from menu interface
    Race::iHorses = horses;
    Race::betHorse = betHorse;
    Race::ibet = ibet;
    Race::iUserCash = iUserCash;

    Start();

  }//end method

  bool PrintLane(Horse pHorse[]){                             // return true if the race continues false if it is complete

    bool keepGoing = true;                                    // true if race is to contunue

    for(int i = 0; i < iHorses; i++){

      int iposition = pHorse[i].getPosition();                // position of the horse relative to the race track
      cout << "\n";                                           // put the next lane on a new line in the terminal

      for(int j = 0; j < iLength; j++){

        if(j == iposition){                                   // if the horse is at the position of j print the horse number
          cout << i;
        } else{
          cout << ".";                                        // print the "trail"
        } // end if
      }// end for
   }// end for

   for(int i= 0; i < iHorses; i++){

     if(pHorse[i].getPosition() >= iLength){
        cout << "\nHorse " << i << " has won the race\n";
        keepGoing = false;
        settleBets(i);          // settle bets passing the winning horse as parameter
     }// end if
   }// end for

   return(keepGoing);
 }// end method

    void Start(){

      Horse HorseArray[iHorses];                                        // array of Horse objects

      while(PrintLane(HorseArray)){                                     // loop until PrintLane returns false, race is complete

        cout << " \nPress enter for another turn:" << endl;
        cin.ignore();

        for(int i = 0; i < iHorses; i++){

          HorseArray[i].Advance();                                      // increment the Array of Horse Objects

        }// end for
      }// end while
    }// end method

  void settleBets(int iWinHorse){//utilized to calculate winnings or losses

    if(Race::ibet > 0){

         cout << "\nTime to settle our bets.";
         cout << "\nHorse " << iWinHorse << " has won the race and you bet on horse number " << Race::betHorse << endl;

         if(iWinHorse == Race::betHorse){

         cout << "You have won the bet here is " << Race::ibet << " dollars.\n";
         int settle = Race::iUserCash+Race::ibet;
         Race::iUserCash = settle;
       } else{

         cout << "You have lost the bet Ill take the " << Race::ibet << " dollars now.\n";
         int settle = Race::iUserCash-Race::ibet;
         Race::iUserCash = settle;
       }//end if
    }//end if

    menu(iUserCash);
  }//end method
};//end class

int main() {
  Race Race(50);             //default start the user with 50 credits
}// end method
