/**************************************
TITLE: Hands on #8 Random
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.01
PURPOSE:	Ask the user if they want to roll dice
		Use a case switch to process alert messages for the six faces 
		Ask if they want to roll bigger dice
		Ask if they want to roll the biggest dice
		When the user answers no thank them for playing
LAST MODIFIED ON: 2011.07.01
LAST MODIFIED BY: Robert Nathan Boyd (RNB)
MODIFICATION HISTORY:
2011.07.05    Made changes accoring to instructor critique
**************************************/  
//random number generated for dice roll
intDiceFaceValue= Math.ceil(Math.random() * 6);

switch (intDiceFaceValue){
    case 1:
        alert("You rolled onesies");
        break;
    case 2:
        alert("Snake eyes");
        break;
    case 3:
        alert("Three way");
        break;
    case 4:
        alert("Double snakes");
        break;
    case 5:
        alert("Eaten alive");
        break;
    case 6:
        alert("UP");
        break;
}//end switch

strKeepRolling = prompt("Would you like to roll bigger dice?");
strKeepRolling = strKeepRolling.toUpperCase();
if(strKeepRolling == "YES"){
	intDiceFaceValue= Math.ceil(Math.random() * 10);
	alert("You rolled a " + intDiceFaceValue);
} else {
    alert("Thanks for playing");
}

strKeepRolling = prompt("Would you like to roll the biggest dice?");
strKeepRolling = strKeepRolling.toUpperCase();
if(strKeepRolling == "YES"){
	intDiceFaceValue= Math.ceil(Math.random() * 100);
	alert("You rolled a " + intDiceFaceValue);
} else {
    alert("Thanks for playing");
}


