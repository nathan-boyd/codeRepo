/**************************************
TITLE: Hands on #6 Branching out
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.01
PURPOSE: Prompt user to determine if they arrived to class on time
         convert string to int
         create 15 minute intervals with apropriate alerts
LAST MODIFIED ON: 2011.07.01
LAST MODIFIED BY: Robert Nathan Boyd (RNB)
MODIFICATION HISTORY:
2011.07.01 added documentation RNB
2011.07.05 changed to reflect elif RNB
**************************************/  

//time late to class
strAnswer = prompt("Did you get to class on time?");

//upper case answer to aid in conditional
strUpperAnswer = strAnswer.toUpperCase();

switch(strUpperAnswer){

    case "YES":
        alert("You get extra credit!");
        break;
    case "NO":
        //number of minutes student was late to class
        intMinutesLate = prompt("How many minutes late were you?");
        intMinutesLate = parseInt(intMinutesLate);

        //not sure if the is the best way to utilize a switch for ranges
        switch(true) {
	
    	    case(intMinutesLate <= 15):
	        alert("Close Enough");
	        break;

	    case(intMinutesLate <= 30):
	        alert("Blame it on campus parking");
	        break;

	    case(intMinutesLate <= 45):
		alert("Better claim a doctor appointment");
		break;

	    case(intMinutesLate <= 60):
		alert("Comin up on an hour dawg");
		break;

	    case(intMinutesLate >= 60):
		alert("Might as well go home");
		break;

	    default:
		alert("I dont understand");

	}//end switch

}//end switch


