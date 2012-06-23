/**************************************
TITLE: Hands on #6 Branching Out
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.01
PURPOSE:Prompt user to determine if they arrived to class on time
        Perform convert upper on answer
        If yes alert to extra credit
		else alert failed
LAST MODIFIED ON: 2011.07.01
LAST MODIFIED BY: Robert Nathan Boyd (RNB)
MODIFICATION HISTORY:
2011.07.01 added documentation
**************************************/  

//time late to class
strAnswer = prompt("Did you get to class on time?");

//uppercase answer
strUpperAnswer = strAnswer.toUpperCase();

if (strUpperAnswer == "YES" || strUpperAnswer == "Y"){
    alert("You get Extra Credit!");
} else {
    alert("You Failed the Class!");
} //end else 

