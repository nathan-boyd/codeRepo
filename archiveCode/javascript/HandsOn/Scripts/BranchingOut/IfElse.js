/**************************************
TITLE: Hands on #6 Branching Out
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.01
PURPOSE: Prompt user to determine if they arrived to class on time
LAST MODIFIED ON: 2011.07.01
LAST MODIFIED BY: Robert Nathan Boyd (RNB)
MODIFICATION HISTORY:
2011.07.01 added documentation
**************************************/  

//time late to class
strAnswer = prompt("Did you get to class on time?");
//upper case answer
strUpperAnswer = strAnswer.toUpperCase();

if (strUpperAnswer == "YES"){
    alert("You get Extra Credit!");
} else {
    alert("Too bad for you!");
} //end else 

