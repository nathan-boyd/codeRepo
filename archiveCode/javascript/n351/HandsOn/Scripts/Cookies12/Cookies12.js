/**************************************
TITLE: Hands on #12 Jack bauer Cookies
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.16
PURPOSE:
	Prompt user for name
	Determine if user is JackBauer
	If not, give appropriate exiting message
	Determine if cookies are enabled
	If not, give appropriate exiting message
	If enabled, determine if it is JackBauer's first visit to the site
	if first visit, ask what the next mission is, and store Jack's name and Mission name as cookies
	If not first visit, tell Jack you hope his last (named) mission was successful 

Provide exiting message


LAST MODIFIED ON: 2011.07.16
LAST MODIFIED BY: Robert Nathan Boyd (RNB)

MODIFICATION HISTORY:
2011.07.16 Inception
**************************************/

/**************************************
TITLE: setCookie
AUTHOR: Robert Nathan Boyd
DESCRIPTION:  creates a cookie 

@param cookieName		name of the cookie
@param cookieValue		the information the cookie is storing
@param daysToLive		number of days past the current day until the cookie expires

@return NA
**************************************/ 
function setCookie(cookieName,cookieValue,daysToLive){
	
	//date the cookie will expire
	var dateToDie=new Date();
	dateToDie.setDate(dateToDie.getDate() + daysToLive);
	
	//make cookieContent portable with escape, inline conditional
	var cookieContent=escape(cookieValue) + ((daysToLive==null) ? "" : "; expires="+dateToDie.toUTCString());
	
	document.cookie=cookieName + "=" + cookieContent;
	
}//end function

/**************************************
TITLE: promptUser
AUTHOR: Robert Nathan Boyd
DESCRIPTION: determines if the cookie given as a parameter exists

@param cookieName	contains the name of the cookie to be searched for

@return NA
**************************************/ 
function getCookie(cookieName){
	
	var i,x,y,cookies=document.cookie.split(";");
	
	for (i=0;i<cookies.length;i++){
		//x is the location of the =
		x=cookies[i].substr(0,cookies[i].indexOf("="));
		//y is the cookie value
		y=cookies[i].substr(cookies[i].indexOf("=")+1);
		//regexp to update the cookie value
		x=x.replace(/^\s+|\s+$/g,"");
		
		if (x==cookieName){
			return unescape(y);
			
		}//end if
	}//end for
}//end function

/**************************************
TITLE: checkCookie
AUTHOR: Robert Nathan Boyd
DESCRIPTION: 	If first visit, ask what the next mission is, and store Jack's name and Mission name as cookies
				If not first visit, tell Jack you hope his last (named) mission was successful 
@param NA

@return NA
**************************************/ 
function checkCookie(){
	
	//username retreived from cookie
	var username=getCookie("username");
	//mission retreived from cookie
	var mission=getCookie("mission");
	
	if (username!=null && username!=""){
		alert("Welcome back " + username + ". I hope " + mission + " was successful.");

	} else {
		username=prompt("Please enter your name:","");
		
		if (username=="JackBauer"){
			strMission = prompt("What is your next mission Jack?");
			setCookie("username",username,365);
			setCookie("mission",strMission, 365);
			
		} else {
			alert("Im sorry only JackBauer is allowed in here");
			return;
		}
	}//end else
	
	alert("Good Luck out there " + username);
		
}//end function

/**************************************
TITLE: eraseCookie
AUTHOR: Robert Nathan Boyd
DESCRIPTION:  Provides cookie erasing functionality
@param NA

@return NA
**************************************/ 
function eraseCookie(name) {
	
	createCookie(name,"",-1);
}//end fucntion

/**************************************
TITLE: promptUser
AUTHOR: Robert Nathan Boyd
DESCRIPTION:  	Determine if cookies are enabled
				If not, give appropriate exiting message
@param NA

@return NA
**************************************/ 
function promptUser(){
	if (navigator.cookieEnabled){
		checkCookie();
	} else { 
		alert("You must enable cookies. Goodbye.");
	}
}//end function

promptUser();
