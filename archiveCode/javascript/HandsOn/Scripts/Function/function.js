2/**************************************
TITLE: Hands on #9 Function Junction
AUTHOR: Robert Nathan Boyd (RNB)
CREATE DATE: 2011.07.03
PURPOSE:Create a calling javascript file that consists of several high level function calls:
        function gameIntroduction - in the stub version, alert out "In the game Introduction function"
        function secretNumberGeneration - in the stub version, alert out "In the random number generation function"
        function processGuess - in the stub version, alert out "Processing the user's guess"
        function process Reward - in the stub version, alert out "Giving Rewards"
LAST MODIFIED ON: 2011.07.03
LAST MODIFIED BY: Robert Nathan Boyd (RNB)
MODIFICATION HISTORY:
2011.7.4 Updated function documentation
2011.7.5 Made changes to process guess 
**************************************/  

/**************************************
TITLE: gameIntroduction
AUTHOR: Robert Nathan Boyd

@param	NA

@return NA
**************************************/  

function gameIntroduction() {
    alert("In the Game Introduction function");
}//end function

/**************************************
TITLE: secretNumberGeneration
AUTHOR: Robert Nathan Boyd

@param	NA

@return NA
**************************************/  

function secretNumberGeneration() {
    alert("In the Secret Number Generation function");
}//end function

/**************************************
TITLE: gameIntroduction
AUTHOR: Robert Nathan Boyd

@param	NA

@return NA
**************************************/  

function processGuess() {
    alert("In the Process Guess function");
}//end function

/**************************************
TITLE: processReward
AUTHOR: Robert Nathan Boyd

@param	NA

@return NA
**************************************/  

function processReward() {
    alert("In the Process Reward function");
}//end function

gameIntroduction();
alert("You have returned from the gameIntroduction function");
secretNumberGeneration();
alert("You have returned from the secretNumberGeneration function");
processGuess();
alert("You have returned from the processGuess function");
processReward();
alert("You have returned from the processReward function");


