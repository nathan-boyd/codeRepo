/********************************************************************
TITLE: 			script.js
AUTHOR: 		Nathan Boyd (Robert Boyd)
CREATE DATE: 	2012.7.1
Purpose:		calculate dewpoint and wind chill
********************************************************************/

function resetOutputs(){
	document.getElementById("dewPoint").innerHTML = "Dew Point: ";
	document.getElementById("windChill").innerHTML = "Wind Chill: ";	
}

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function calculateWindChill(temp, windSpeed){
	var windChill 	= 35.74 +  0.6215 * parseFloat(temp) +  (0.4275 * parseFloat(temp) - 35.75) * parseFloat(Math.pow(parseFloat(windSpeed), .16));
	return(windChill);
}

function calculateDewPoint(temp, humidity){
	var dewPoint 	= temp - ((100 - parseFloat(humidity))/2.778);
	return(dewPoint);	
}

function calculate(){

	var temp	 	= document.getElementById('temp').value	
	var humidity 	= document.getElementById('humidity').value;
	var windSpeed	= document.getElementById('windSpeed').value;
	var message;
	var dewPoint;
	var windChill;
	
	if(parseFloat(humidity) >= 50){
		
		if(parseFloat(humidity) > 100){
			alert("cannot have humidity over 100%");
			resetOutputs();
			exit;
		} else {	
			dewPoint = roundNumber(calculateDewPoint(temp, humidity), 2);
		}
		
	} else {
		
		dewPoint = "not humid enough to calculate";
	} 
	
	if(parseFloat(temp) < 50){
		
		if(windSpeed < 3){
			windChill = temp;
		} else {
			windChill	= roundNumber(calculateWindChill(temp, windSpeed), 2);	
		}
		
	} else {
		windChill = "too warm to calculate";
	}	
	
	document.getElementById("dewPoint").innerHTML = "Dew Point: " + dewPoint;
	document.getElementById("windChill").innerHTML = "Wind Chill: " + windChill;
			
	if(windChill <= (-25)){
		message = "Caution – frostbite could occur within 30 minutes";
		
		if (windChill <= (-45)){
			message = "Danger – frostbite could occur within 10 minutes";
			
			if (windChill <= (-60)){
				message = "Extreme Danger – frostbite could occur within 5 minutes";
			}
		} 
		
		alert(message);	
	} 
	
	
	/*
	<= - 60	Extreme Danger – frostbite could occur within 5 minutes
	<=-45	Danger – frostbite could occur within 10 minutes
	<=-25	Caution – frostbite could occur within 30 minutes
	*/

}


