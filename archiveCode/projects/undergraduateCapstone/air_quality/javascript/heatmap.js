/**************************************
TITLE: heatmap.js
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2012.02.05
PURPOSE:


MODIFICATION HISTORY:
2012.02.05 Inception
**************************************/

	function circles() {
	
		var cityCircle;
		var citymap = {};
		
		citymap['chicago'] = {
			center: new google.maps.LatLng(41.878113, -87.629798),
			population: 2842518
		};
		citymap['newyork'] = {
			center: new google.maps.LatLng(40.714352, -74.005973),
			population: 8143197
		};
		citymap['losangeles'] = {
			center: new google.maps.LatLng(34.052234, -118.243684),
			population: 3844829
		}

		var mapOptions = {
			zoom: 4,
			center: new google.maps.LatLng(37.09024, -95.712891),
			mapTypeId: google.maps.MapTypeId.HYBRID 
		};

		var map = new google.maps.Map(document.getElementById("map_canvas"),
		mapOptions);

		for (var city in citymap) {
		// Construct the circle for each value in citymap. We scale population by 20.
			var populationOptions = {
				strokeColor: "#FF0000",
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: "#FF0000",
				fillOpacity: 0.35,
				map: map,
				center: citymap[city].center,
				radius: citymap[city].population / 20
			};
			cityCircle = new google.maps.Circle(populationOptions);
		}
	}
	
	function drawMap(datapoint) {
		
		var datapointMarker;

		var mapOptions = {
			zoom: 11,
			center: new google.maps.LatLng(39.8100, -86.1500),
			mapTypeId: google.maps.MapTypeId.HYBRID 
		};


		var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);

		for (var dot in datapoint) {
			var circleOptions = {
				strokeColor: datapoint[dot].color,
				strokeOpadot: 1,
				strokeWeight: 1,
				fillColor: datapoint[dot].color,
				fillOpadot: 1,
				map: map,
				center: datapoint[dot].center,
				radius: 200
			};
			
			datapointMarker = new google.maps.Circle(circleOptions);
		}//end for
		
	}//end function
	
	function getXMLHttp()
	{
		var xmlHttp
		
		try{
			//Firefox, Opera 8.0+, Safari
			xmlHttp = new XMLHttpRequest();
		}
		catch(e){
				//Internet Explorer
			try
			{
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e){
				try
				{
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch(e)
				{
					alert("Your browser does not support AJAX!")
					return false;
				}
			}
		}
		return xmlHttp;
	}
	
	function makeMap()
	{
		var xmlHttp = getXMLHttp();
		var arr_data = new Array();
		
		xmlHttp.onreadystatechange = function(){

			if(xmlHttp.readyState == 4){
				
				//var lat = xmlHttp.responseText;
				var test_array = new Array();
				var citymap = new Array();	
				
				test_array = xmlHttp.responseText.split(",");
				var color;						
				
				for (var i = 0; i < test_array.length; i+=3){
									
					//removes []{}.", split into array 
					arr_lat = (test_array[i].replace(/[[",{}\[\]]/g, "")).split(":");
					arr_lon = (test_array[i+1].replace(/[[",{}\[\]]/g, "")).split(":");
					arr_ppm = (test_array[i+2].replace(/[[",{}\[\]]/g, "")).split(":");															
					
					if(arr_ppm[1] < 5){
						color = '#84FF00';	
					} else if(arr_ppm[1] >= 5 && arr_ppm[1] < 10){
						color = '#FFF700';	
					} else if(arr_ppm[1] > 10){
						color = '#FF2200';	
					} 
								
					item = {
						center: new google.maps.LatLng(arr_lat[1], arr_lon[1]),
						color: color
					};
					
					citymap.push(item);
					
				}
				
				drawMap(citymap);
			
			}
			
		}
		
		xmlHttp.open("GET", "phputils/getdatapoint.php", true);
		xmlHttp.send();
		
	}

		

	

				

