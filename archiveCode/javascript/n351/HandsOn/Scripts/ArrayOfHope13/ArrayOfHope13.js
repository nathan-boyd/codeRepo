/**************************************
TITLE: Hands on #13 An Array of Hope
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.16
PURPOSE:
	Instantiate an object array called Identity	
	Populate Identity with this ordered list of identity:( Fred, Mo, Curly,Bob, George, Ivan, Omar, Pepe, Louis, Clark)
	Verify that user's name is Jack Bauer, give exiting message if not Jack Bauer	
	If user is Jack  Bauer, perform the following array manipulations:	
		Monday: alert how many elements are in the array (as method call)
		Tuesday: Alert out the value of the third element in the array
		Wednesday: Alert out the value at subscript[3] (Note, should be different than Tuesday)
		Thursday:  Add Cloe and Ginger to the beginnng of the array, and alert out array with For Loop
		Friday: Delete Clark from end of array, and then alert out array with For Loop
		Saturday: Beginning with Friday's array, delete Mo and add Cloe and Trixie right after where Mo was	
		Sunday: Alert out deservedly testy message about NO MO JACK programming (at least for a while!)
	Provide exiting message

LAST MODIFIED ON: 2011.07.16
LAST MODIFIED BY: Robert Nathan Boyd (RNB)

MODIFICATION HISTORY:
2011.07.16 Inception
**************************************/

/**************************************
TITLE: setCookie
AUTHOR: Robert Nathan Boyd
DESCRIPTION: Verify that user's name is Jack Bauer, give exiting message if not Jack Bauer	


@param NA

@return NA
**************************************/ 

function promptUser(){
	
	strUserName = prompt("What is your name");
	if(strUserName != "Jack Bauer"){
		alert("Sorry only Jack Bauer can use this system. Goodbye.");
		return;
	} else {
		makeArray();
	}//end if else
}//end function

/**************************************
TITLE: makeArray
AUTHOR: Robert Nathan Boyd
DESCRIPTION:  

	If user is Jack  Bauer, perform the following array manipulations:	
		Monday: alert how many elements are in the array (as method call)
		Tuesday: Alert out the value of the third element in the array
		Wednesday: Alert out the value at subscript[3] (Note, should be different than Tuesday)
		Thursday:  Add Cloe and Ginger to the beginnng of the array, and alert out array with For Loop
		Friday: Delete Clark from end of array, and then alert out array with For Loop
		Saturday: Beginning with Friday's array, delete Mo and add Cloe and Trixie right after where Mo was	
		Sunday: Alert out deservedly testy message about NO MO JACK programming (at least for a while!)

@param NA

@return NA
**************************************/ 

function makeArray(){
	
	var identity = new Array();
	identity[0]= "Fred";
	identity[1]= "Mo";
	identity[2]= "Curly";
	identity[3]= "Bob";
	identity[4]= "George";
	identity[5]= "Ivan";
	identity[6]= "Omar";
	identity[7]= "Pepe";
	identity[8]= "Louis";
	identity[9]= "Clark";
	
	keepGoing = true;
	
	while(keepGoing){
		
		//prompt user for current day of the week
		strWeekDay = prompt("What day of the week is it?");
		strWeekDay = strWeekDay.toUpperCase();    
		
		if(strWeekDay == "MONDAY" || strWeekDay == "TUESDAY" || strWeekDay == "WEDNESDAY" || strWeekDay == "THURSDAY" || 
			strWeekDay == "FRIDAY" || strWeekDay == "SATURDAY" || strWeekDay == "SUNDAY"){
				
			keepGoing = false;
			
		} else {
			alert("Please enter a week day. (Monday, Tuesday, etc...)");
			
		}//end if else
	}//end while
	
	if(strWeekDay == "MONDAY"){
		
		alert("The array has " + identity.length + " elements.");
		
	} else if(strWeekDay == "TUESDAY"){

		alert("The third element of the array is " + identity[2]);

	}  else if(strWeekDay == "WEDNESDAY" ){
	
		alert("The value at subscript[3] is " + identity[3]);
		
	}  else if(strWeekDay == "THURSDAY"){
		
		identity.splice(0,0,"Cloe","Ginger");
		
		for(i=0; i<identity.length; i++){
			alert(identity[i]);
		}//end for
		
	}  else if(strWeekDay == "FRIDAY"){
		
		identity.splice(9,1);
		
		for(i=0; i<identity.length; i++){
			alert(identity[i]);
		}//end for
	
	}  else if(strWeekDay == "SATURDAY"){

		identity.splice(9,1);
		identity.splice(1,1,"Cloe", "Trixie");
		
		for(i=0; i<identity.length; i++){
			alert(identity[i]);
		}//end for
             
	}  else if(strWeekDay == "SUNDAY"){

		alert("NO MO JACK programming (at least for a while!");
	}//end else if
}//end function

promptUser();
