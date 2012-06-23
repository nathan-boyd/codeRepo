/**************************************
TITLE: Mad Lob Lab
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.23
PURPOSE: Create a mad lib
	
	Goal of game is described			
	Textfield and label for name		
	Texfield and label for color		
	Textfield and label for location		
	Textfield and label for animal		
	Textfield and label for food		
	Textfield and label for sound		
	Textfield and label for friend's name		
	Textfield and label for number of snacks wanted		
	Textfield and label for zip code		
	Textfield and label for email address		
	Labelled radio button for story choice		
	Labelled button for Clear		
	Labelled button for Create Story		
	Create story button performs several modular functions			
	Performs form validation		
	User is informed of any issues	
	No fields are left empty	
	Number of snacks wanted is checked to insure only numbers are entered	
	Zip code is validated for appropriate data	
	Email is validated for appropriate data	
	All other text fields are validated for text content only	
	Radio button is processed to determine which story to create		
	Appropriate mad lib story is created through string concatenation		
	Mad Lib Story is displayed in appropriately labelled content area		
	Clear button is of type reset and clears out all user's entries			
	
	Link to google hosting			
	Jquery User Interface widget			
	Use of document ready			
	Event registration			
	Form validation			
	
	Published to csci server			
	Accessible with link from course index page			
	Header Documentation			
	Variable Declaration and documentation			
	Management of loose-typing			
	Function Documentation			
	Code Comments			
	Readibility of Control Structures			


MODIFICATION HISTORY:
2011.07.23 Inception
2011.07.24 Added Validation
**************************************/

/**************************************
TITLE: JQUERY Validate Content form
AUTHOR: Robert Nathan Boyd
DESCRIPTION: Validates the HTML for via the JQuery validation plugin

@param NA

@return NA
**************************************/ 
$(document).ready(function(){

	$('#butCreateStory').click(function() {
		write();

	});

	$('#butClearForm').click(function() {
		$('form')[0].reset();
	
	});

	$(window).keypress(function(e) {
		if(e.keyCode == 13){
			write();
		}
	});	
	
}); 

/**************************************
TITLE: Write
AUTHOR: Robert Nathan Boyd
DESCRIPTION: Writes the form data to a text area using a JQUERY .val() function. 	

@param NA

@return NA
**************************************/ 
function write() {

	$("textArea").val("One day " + $("#strName").val() + " was walking down the street wearing a " + $("#strColor").val() + " shirt. He was heading to " + $("#strLoc").val() + " to pick up his " + $("#strAnimal").val() + ". All he could think about was " + $("#strFood").val() + " and his stomach made a terrible " + $("#strSound").val() + ". Luckily " + $(		"#strName").val() + " saw his friend " + $("#strName2").val() + " who gave him " + $("#intSnacks").val() + " potato chips so long as they were sent an email at " + $("#strEmail").val() + " which had their zip code " + $("#intZip").val() + " in it.");
		
}






