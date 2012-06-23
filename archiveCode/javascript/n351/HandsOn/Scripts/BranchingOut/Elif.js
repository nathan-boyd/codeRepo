/**************************************
TITLE: Hands on #6 Branching Out
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.01
PURPOSE: Prompt user to determine if they arrived to class on time
         convert string to int
         create 15 minute intervals with apropriate alerts
LAST MODIFIED ON: 2011.07.01
LAST MODIFIED BY: Robert Nathan Boyd (RNB)
MODIFICATION HISTORY:
2011.07.01 added documentation
**************************************/  

//time late to class
strAnswer = prompt("Did you get to class on time?");
//upper case answer to aid in conditional
strUpperAnswer = strAnswer.toUpperCase();

if (strUpperAnswer == "YES"){
    alert("You get Extra Credit!");

} else if (strUpperAnswer == "NO"){
    strAnswer = prompt("How many minutes later were you?");

    //number of minutes late to class
    intMinutesLate = parseInt(strAnswer); 

    if (intMinutesLate <= 15){
	alert("Close Enough");

    } else if (intMinutesLate <= 30){
	alert("Blame it on campus parking"); 

    } else if (intMinutesLate <= 45){
	alert("Better claim a doctors appointment!");  
	
    } else if (intMinutesLate <= 60){
	alert("Coming up on an hour dawg");   

    } else if (intMinutesLate >= 60){
	alert("Might as well go home");
    }  //end else

    else {
	alert("I dont understand");
    }//end else

}//end else

