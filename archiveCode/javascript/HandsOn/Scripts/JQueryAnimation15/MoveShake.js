/**************************************
TITLE: Hands on #15 Movin and Shakin
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.23
PURPOSE:
  Create a simple animation using the Jquery animation command
  Set timer on the animation command
  Create and utilize an initialization command that returns the animation item to its original positon
  Use a js call to the google hosting service
  Posting tested external script file and hosting xhtml file from course index page

	1. Show and hide
	2. Toggle (reverses current attribute setting, such as displaying when currently hidden, or hiding if current visible)
	3. Slide Up and Slide Down
	4. Fade In,  Fade Out, and Fade To (the latter manipulates opacity to create a partial fade)
	5. SlideToggle - slides an element up if its down, down if its up

MODIFICATION HISTORY:
2011.07.23 Inception
**************************************/

$(document).ready(function() {
	
	var fast = 500;
	
	function showImage(){
		$('#target').show(fast);
	}
	
	function hideImage(){
		$('#target').hide();
	}
	
	function toggleImage(){
		$('#target').toggle();
	}
	
	function slideUp(){
		$('#target').slideUp(1000);
	}
	
	function slideDown(){
		$('#target').slideDown(1000);
	}

	function fadeIn(){
		$('#target').fadeIn(1000);
	}

	function fadeOut(){
		$('#target').fadeOut(1000);
	}

	function fadeTo(){
		$('#target').fadeToggle(1000);
	}

	function slideToggle(){
		$('#target').slideToggle(1000);
	}
	   
	$("#showImage").click(showImage);
	$("#hideImage").click(hideImage);
	$("#toggleImage").click(toggleImage);
	$("#slideUp").click(slideUp);
	$("#slideDown").click(slideDown);
	$("#fadeIn").click(fadeIn);
	$("#fadeOut").click(fadeOut);
	$("#fadeTo").click(fadeTo);
	$("#slideToggle").click(slideToggle);
	
});