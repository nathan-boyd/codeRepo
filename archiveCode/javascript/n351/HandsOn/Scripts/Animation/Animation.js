/**************************************
TITLE: Hands on #16 Animation
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.24
PURPOSE:
  Create a simple animation using the Jquery animation command
  Set timer on the animation command
  Create and utilize an initialization command that returns the animation item to its original positon
  Use a js call to the google hosting service
  Posting tested external script file and hosting xhtml file from course index page

MODIFICATION HISTORY:
2011.07.24 Inception
**************************************/

$(document).ready(function() {

	$("#animateImage").click(function(){
		
	  $("#block").animate({
		marginLeft: "3in",
	  }, 2000 );
	});


	$("#resetImage").click(function() {
		
		$( "div" ).css({ width: "", fontSize: "", borderWidth: "", marginLeft: "", fontSize: "" });
	
	});

});