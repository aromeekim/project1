/*----- constants -----*/

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/

//Pseudocode

//1. Create constants (What's fixed in the game?)
    //Player
    //Dealer
    //Cards
//2. Create the variables (lets)
    //Score
    //Winner
    //Bank
//3. Locate the HTML elements being manipulated
    //Bank
    //Result (Did the house win or did the player win?)
//4. Create event listeners
    //Anything besides buttons? 
//5. Build your functions! 
    //Initialize function
    //We need function to randomize cards for both the dealer (computer) and the player (mathFloor.(mathRandom() * 52) possibly? 
    //Must allow for possibility of "hit me", "stay", and "start" (initialize but also to relaunch a new game)
    //No resetting
    //Function to do math, add values to cards 
    //Function for the bank 
        //starting amount $--
        //each round means a standard bet of $--
        //lose means loss in bank
        //win means double the amount bet
    //Function to announce winner