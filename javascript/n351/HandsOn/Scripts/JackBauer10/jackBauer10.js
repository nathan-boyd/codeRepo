/**************************************
TITLE: Hands on #10 Stringing Jack Bauer Along
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.07
PURPOSE:
	1, Prompts Jack Bauer to enter a text string (between 10 and 15 characters long) and answer a question asking what day of the week it is
	2.Using Jack's entered text string and the day of week, produce a password based on the following criteria
	   a. Monday - password is entered text string converted to all upper case
	   b. Tuesday - password is entered text string converted to all lower case
	   c. Wednesday - Text string position of the first instance of the character 's' ( Password produced will be an integer)
	   d. Thursday - the second character in the string (remember, numbering begins with 0)
	   e. Friday - returns characters starting from first position and including characters up to position 5
	   f.  Saturday - returns characters starting at position 0 and going on for a total length of 3 characters
	   g. Sunday - concatenation of substrings produced on days Friday and Saturday
LAST MODIFIED ON: 2011.07.07
LAST MODIFIED BY: Robert Nathan Boyd (RNB)

MODIFICATION HISTORY:
2011.07.16 Updated Comments, ensured complicance with rubric
**************************************/

/**************************************
TITLE: promptUser
AUTHOR: Robert Nathan Boyd
DESCRIPTION:  Prompts Jack Bauer to enter a text string (between 10 and 15 characters long) 
              Answer a question asking what day of the week it is
@param NA

@return NA
**************************************/ 
function promptUser(){
	//gate keeping boolean
    keepGoing = true;
	
    while(keepGoing){
	//prompt user for the secret string
	strSecretString = prompt("Enter a text string to encrypt that is between 10 and 15 characters long");
		if(strSecretString.length <= 15 && strSecretString.length >= 10){
			
			//nested gate keeping boolean
			keepOnGoing = true;
			
			while(keepOnGoing){
				
				//prompt user for current day of the week
				strWeekDay = prompt("What day of the week is it?");
				strWeekDay = strWeekDay.toUpperCase();    
				
				if(strWeekDay == "MONDAY" || strWeekDay == "TUESDAY" || strWeekDay == "WEDNESDAY" || strWeekDay == "THURSDAY" || 
					strWeekDay == "FRIDAY" || strWeekDay == "SATURDAY" || strWeekDay == "SUNDAY"){
					keepGoing = false;
					keepOnGoing = false;
					encryptString(strSecretString, strWeekDay);
					
				} else {
					alert("Please enter a week day. (Monday, Tuesday, etc...)");
					
				}//end if else
				
			}//end while
			
			keepGoing = false;
			
		} else {
			alert("Your string was not between 10 and 15 characters long.");
		}//end if
		
    }//end while
	
}//end function

/**************************************
TITLE: encryptString
AUTHOR: Robert Nathan Boyd
DESCRIPTION:2.Using Jack's entered text string and the day of week, produce a password based on the following criteria
       	a. Monday - password is entered text string converted to all upper case
	    b. Tuesday - password is entered text string converted to all lower case
	    c. Wednesday - Text string position of the first instance of the character 's' ( Password produced will be an integer)
	    d. Thursday - the second character in the string (remember, numbering begins with 0)
	    e. Friday - returns characters starting from first position and including characters up to position 5
	    f.  Saturday - returns characters starting at position 0 and going on for a total length of 3 characters
	    g. Sunday - concatenation of substrings produced on days Friday and Saturday

@param strSecretString    string that the user wishes to encrypt
@param strWeekDay         day of the week

@return NA
**************************************/ 

function encryptString(strSecretString, strWeekDay){

	if(strWeekDay == "MONDAY"){
	    strCode = strSecretString.toUpperCase();    
		
	} else if(strWeekDay == "TUESDAY"){
	    strCode = strSecretString.toLowerCase();    

	}  else if(strWeekDay == "WEDNESDAY" ){
	    strCode = strSecretString.indexOf('s');    
		
	}  else if(strWeekDay == "THURSDAY"){
	    strCode = strSecretString.charAt(1);    
		
	}  else if(strWeekDay == "FRIDAY"){
	    strCode = strSecretString.slice(0,5);
	
	}  else if(strWeekDay == "SATURDAY"){
	    strCode = strSecretString.substr(0,2);
             
	}  else if(strWeekDay == "SUNDAY"){
	    strCode = strSecretString.substr(0,5);
	    strCode += strCode = strSecretString.substr(0,2);
	
	}//end else if
	
	alert(strCode);   
    
}//end function

promptUser();
