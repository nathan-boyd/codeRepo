/**************************************
TITLE: 			bovine
AUTHOR: 		Nathan Boyd
CREATE DATE: 	2012.6.18
Purpose:		setup css and facilitate 
gravity effects (via easing) on the poor 
cows
**************************************/

//associate cow clicks with cow falls
function main() {
			
	$(".cow").click(function(i) {
		
		var ypos = $(this).position()['top'] - $("#field").position()['top'];
		var fallDist = ($("#field").outerHeight() - ypos) - $(this).outerHeight();
		
		$(this).stop().animate({
			marginTop: fallDist+"px"
			}, {
				duration: 1000,
				easing: "easeOutBounce"
		});
		
		//make the div text visible
		$(this).parent().css("color","black");
		
	});
	
}

function setupStyle(){
	
	$(".cow").css({
		'padding-top': '30px',
	});

	$(".cow_container").css({
		'float': 'left',
		'width': '100px',
		'padding-left': '100px',
		'color': '#B4D7F4',
		'text-align': 'center',
		'font-family': '"MS Serif", "New York", serif',
		'font-size': '20px'
	});
	
	$("#ground").css({
		'padding': '20px',
		'background-color': '#006600',
		'color': 'white'
	});
	
	$("#field").css({
		'height': '400px',
		'padding-top': '20px',
		'background-color': '#B4D7F4'
	});
 
}

$(document).ready(function(){
	setupStyle();
	main();
});