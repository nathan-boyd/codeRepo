/**************************************
TITLE: Hands on #11 Under the DOM
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.01.12
PURPOSE:
		Ask user for name	
		Provide concatenated, personalized greeting to user	
		Display initial image, along with text that says "Don't click me"	
		Change mouse to cursor-pointer	
		Provide onclick event	
		Use getElementById to display second image when user clicks on first image	
		User coding convention and program comments	
		Post to course index page

LAST MODIFIED ON: 2011.07.12
LAST MODIFIED BY: Robert Nathan Boyd (RNB)

MODIFICATION HISTORY:
2011.07.12 Inception
**************************************/

function touchPic(){
	//user defined name
	strUserName = prompt("What is your name?");
	alert("Hello " + strUserName);
	document.getElementById("anakin").src="../graphics/images/vader.jpg";
}//end function

