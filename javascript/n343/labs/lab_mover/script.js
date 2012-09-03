/**************************************
TITLE: 			Movin and Shakin
AUTHOR: 		Robert Nathan Boyd (RNB)
CREATE DATE: 	2012.6.10
PURPOSE:
  Create a simple animation using the Jquery animation command
**************************************/

$(document).ready(function() {
	
	var fast = 500;
	var slow = 1000;
	
	function showImage(){
		$('#target').show(fast);
	}
	
	function hideImage(){
		$('#target').hide(slow);
	}
	
	function toggleImage(){
		$('#target').toggle(slow);
	}
	
	function slideUp(){
		$('#target').slideUp(slow);
	}
	
	function slideDown(){
		$('#target').slideDown(slow);
	}

	function fadeIn(){
		$('#target').fadeIn(slow);
	}

	function fadeOut(){
		$('#target').fadeOut(slow);
	}

	function slideToggle(){
		$('#target').slideToggle(1000);
	}
	
	function moveRight(){
		$("#target").animate({marginLeft: "3in",}, 2000 );
	}
	
	function moveLeft(){
		$("#target").animate({marginLeft: "-3in",}, 2000 );
	}
	
	function moveDown(){
		$("#target").animate({marginTop: "3in",}, 2000 );
	}
	
	function moveUp(){
		$("#target").animate({marginTop: "-3in",}, 2000 );
	}

	function resetImage(){
		$("#target").css({ 	
			width: 			"", 
			fontSize: 		"", 
			borderWidth: 	"", 
			marginLeft: 	"", 
			marginRight: 	"", 
			marginTop: 		"",
			paddingLeft: 	"", 
			paddingRight: 	"" 
			
		});
	}
	
	function nudge(){
		 $("#target").animate({ paddingLeft: 100 }, 400)
	}
	
	function glide() {
		$('#target').stop().animate({
			'left':	50,
			'width': 100});
	}
	
	$("#glide").click(glide);
	$("#nudge").click(nudge);
	$("#moveUp").click(moveUp);
	$("#moveDown").click(moveDown);
	$("#resetImage").click(resetImage);	
	$("#moveRight").click(moveRight);
	$("#moveLeft").click(moveLeft);	   
	$("#showImage").click(showImage);
	$("#hideImage").click(hideImage);
	$("#toggleImage").click(toggleImage);
	$("#slideUp").click(slideUp);
	$("#slideDown").click(slideDown);
	$("#fadeIn").click(fadeIn);
	$("#fadeOut").click(fadeOut);
	$("#slideToggle").click(slideToggle);
	
});