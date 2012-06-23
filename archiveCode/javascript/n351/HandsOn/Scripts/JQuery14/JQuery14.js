/**************************************
TITLE: Hands on #14 JQuery Index Page
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.23
PURPOSE:

MODIFICATION HISTORY:
2011.07.23 Inception
**************************************/

/**************************************
TITLE: JQUERY document.ready
AUTHOR: Robert Nathan Boyd
DESCRIPTION: Alerts hello world every time an anchor link is clicked

@param NA

@return NA
**************************************/ 
$(document).ready (function() {
   $("a").click(function() {
       alert("Hello World!");
     });
});
