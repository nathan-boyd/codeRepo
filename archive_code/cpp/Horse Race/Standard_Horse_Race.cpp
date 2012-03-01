//============================================================================
// Name        : Horse_Race.cpp
// Author      : Robert Boyd
// Version     :
// Copyright   : 
// Description : OOP Powered Horse Race
//============================================================================

#include <iostream>
#include <cstdlib>
#include <time.h>
#include <sys/time.h>

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

  public:

    Race(int iLength, int iHorses){

       Race::iLength = iLength;
       Race::iHorses = iHorses;

       Start();
    }// end method

    bool PrintLane(Horse pHorse[]){                             // return true if the race continues false if it is complete

      bool keepGoing = true;                                    // true if race is to contunue

      for(int i = 0; i < iHorses; i++){

        int iposition = pHorse[i].getPosition();                // position of the horse relative to the race track

        cout << "\n";                                           // put the next lane on a new line

        for(int j = 0; j < iLength; j++){

            if(j == iposition){                                 // if the horse is at the position of j print the horse number
            cout << i;
            } else{
             cout << ".";                                       // print the "trail"
            } // end if
         }// end for
      }// end for

      for(int i= 0; i < iHorses; i++){

        if(pHorse[i].getPosition() >= iLength){
          cout << "\nHorse " << i << " has won the race\n";
          keepGoing = false;
          i = iHorses++;
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
}; // end class


int main() {

  Race Race(25,5);                      // race size, horse numbers
}// end method
