/**************************************
TITLE: Hands on #7 Loopy
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.01
PURPOSE:Create a while loop that asks the user if they want to play a game. Prompt them to answer Yes or No
	If they answer yes, alert them that they are now playing. (Be sure to use a convert to Upper)
	If they answer no, tell them "another time"
	Outside of the loop, (beneath the while), alert a statement that says "You have exited the while"
	The loop should repeat as long as the user answers affirmatively.
LAST MODIFIED ON: 2011.07.01
LAST MODIFIED BY: Robert Nathan Boyd (RNB)
MODIFICATION HISTORY:

**************************************/  
//initialize to yes to enter loop
var strAnswer = new String();
strAnswer = prompt("Would you like to play a game?");
strAnswer = strAnswer.toUpperCase();

if (strAnswer == "NO"){
    alert("Too bad thanks anyway");
}//end if

while (strAnswer == "YES"){
   alert("Yati, Yati, Yati!");
   //user response
   strAnswer = prompt("Would you like to play a game?");
   strAnswer = strAnswer.toUpperCase();

   if (strAnswer == "NO"){
       alert("Goodby, you have left the game loop.");
   }//end if   

}//end while



