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

const player = {
    cards: [],
    score: 0,
    initialBank: 500,
    bet: 50,
    };
    
const dealer = {
    cards: [],
    score: 0,
    };

const suits = ["spades", "hearts", "clubs", "diamonds"];

const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10", "10", "10", "11"];

const deck = [];
for (let suit = 0; suit <4; suit++) {
    for (let rank = 0; rank <14; rank++) {
        deck.push(values[rank] + suits[suit]);
    }
};

const bet = 50;

let newDeck = createNewDeck();
    function createNewDeck() {
    for (let i = 0; i < 52; i++) {
      let shuffle = Math.floor(Math.random() * 52);
        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;
    }
    return deck;
  }


//2. Create the variables (lets)
    //Score
    //Winner
    //Bank


//3. Locate the HTML elements being manipulated
    //Bank
    //Result (Did the house win or did the player win?)
//4. Create event listeners
    //Anything besides buttons? 
    document.getElementById("startbutton").addEventListener("click", startGame);
    document.getElementById("hitmebutton").addEventListener("click", addCard);
    document.getElementById("staybutton").addEventListener("click", endRound);

    document.getElementById("bank").innerHTML = "BANK: $" + player.initialBank;
    document.getElementById("bet").innerHTML = "BET: $" + player.bet;
//5. Build your functions! 
    //Initialize function
    //We need function to randomize cards for both the dealer (computer) and the player (mathFloor.(mathRandom() * 52) possibly? 
        //Dealer must stay at soft 18
    //Must allow for possibility of "hit me", "stay", and "start" (initialize but also to relaunch a new game)
    //No resetting
    //Function to do math, add values to cards 
    //Function for the bank 
        //starting amount $--
        //each round means a standard bet of $--
        //lose means loss in bank
        //win means double the amount bet
    //Function to announce winner
    //Game ends when player has run out of funds

function initialize() {
        // initialize our data to start the game
  
    }

function startGame() {
    let betAmount = document.getElementById("betAmount").value;
    let currentBank = document.getElementById("bank").innerText;
    }
}

    function renderDeck(deck)
    {
          document.getElementById("deck").innerHTML = "";
    
        for(let i = 0; i < deck.length; i++)
        {
            let card = document.createElement("div");
            let value = document.createElement("div");
            let suit = document.createElement("div");
            card.className = "card";
            value.className = "value";
            suit.className = "suit " + deck[i].Suit;
    
            value.innerHTML = deck[i].Value;
            card.appendChild(value);
            card.appendChild(suit);
    
            document.getElementById("deck").appendChild(card);
        }
    }

function checkforBust() {
    if (player > 21) {
        return "Player has lost";
    } if (dealer > 21) {
        return "Computer has lost; 
    }
    }
}

function addCard() {

    }

function endRound() {

    }

function getWinner() {
        if (player )
    }

initialize();


//How to get card images to render?
//How to get dealer to stay at soft 18?