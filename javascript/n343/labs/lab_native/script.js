/*
TITLE:						Lab Goin Native
AUTHOR:						Robert Nathan Boyd
PURPOSE:					Show off your javascript skills
ORIGINALLY CREATED ON:		3 June 2012
LAST MODIFIED ON:			3 June 2012
LAST MODIFIED BY: 			Robert Nathan Boyd	
*/

$(document).ready(function(){
	alert("alert from document onload");
});//end function

function writeToDocument(){
	document.write("I am web programming schiznit");
}//end function

function userPrompt(){
	var name=prompt("Please enter your name");
	alert("Hello " + name + "! Glad to meet you");
}//end function

function dataConversion(){
	var name	= prompt("Please enter your name");
	var number 	= prompt("How many breakfast Grand Slams would you like " + name + "?");
	alert(number + " Grand Slams at $1.50 each for a total of $" + parseInt(number) * 1.50 + " dollars." );
}//end function

function conditionals(){
	var ontime	= prompt("Did you make it to class on time?");
	if(ontime.toUpperCase() == "YES"){
		alert("You have earned extra credit");
	} else {
		alert("You have faild the course!")	;
	}//end condition
}//end function

function caseSwitch(){
var favorite = prompt("What is your favorite food?");

	switch(favorite.toUpperCase())
	{
		case "APPLE": case "APPLES":
			alert("I like apples too!");
			break;
		case "BANANA": case "BANANAS":
			alert("I like bananas too!");
			break;
		case "ORANGE": case "ORANGES":
			alert("I like Oranges too!");
			break;
		case "GRAPES": case "GRAPES":
			alert("I like Grapes too!");
			break;
		default:
			alert("I've never had that before but it sounds tasty!...");	
			break;	 
	}//end switch
}//end function

function whileLoop(){
	while((prompt("Would you like to play a game?")).toUpperCase() == "YES"){
		alert("You are now playing an amazing game.");
	}//end while
	alert("Okay, another time");
}//end function

function forLoop(){
	for(i = 10; i >0; i--){
		alert("You are on lap " + i + " of 10.");
	}//end for
}//end function

function introduction(){
	alert("Inside Game Introduction Function");
}//end function

function secretNumberGen(){
	alert("Inside Secret Number Generator");
}//end function

function guessProcessing(){
	alert("Inside Guess Processing");
}//end function

function reawardProcessing(){
	alert("Inside Reward Processing");
}//end function

function callFunction(){
	alert("Calling Game Introduction Function");
	introduction();
	alert("Back from Game Introduction Function");
	
	alert("Calling Secret Number Generator");
	secretNumberGen();
	alert("Back Secret Number Generator");
	
	alert("Calling Guess Processing");
	guessProcessing();
	alert("Back from Guess Processing");
	
	alert("Calling Reward Processing");
	reawardProcessing();
	alert("Back from Reward Processing");
}//end function