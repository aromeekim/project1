/*----- constants -----*/

const player = {
    cards: [],
    score: 0,
    bank: 500,
    bet: 50
};

const dealer = {
    cards: [],
    score: 0
};


const suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

const deck = [];
for (let suit = 0; suit <4; suit++) {
    for (let rank = 0; rank <13; rank++) {
        deck.push(ranks[rank] + suits[suit]);
    }
};

/*----- app's state (variables) -----*/

let cardsDrawn = 0;

let newDeck = createNewDeck();

/*----- cached element references -----*/
document.getElementById("bank").innerHTML = "BANK: $" + player.bank;

document.getElementById("bet").innerHTML = "BET: $" + player.bet;

/*----- event listeners -----*/
document.getElementById("startbutton").addEventListener("click", newGame);

document.getElementById("hitmebutton").addEventListener("click", hit);

document.getElementById("staybutton").addEventListener("click", stay);

/*----- functions -----*/
function createNewDeck() {
    for (let i = 0; i < 52; i++) {
        let shuffle = Math.floor(Math.random() * 52);
        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;
    }
    return deck;
};

function assignCardValue(a) {
    let deckArray = [],
        sum = 0,
        i = 0,
        aceValue = 0;
    deckArray = a;
        for (i; i < deckArray.length; i++) {
            if (deckArray[i].rank === "2") {
                sum += 2;
            } if (deckArray[i].rank === "3") {
                sum += 3;
            } if (deckArray[i].rank === "4") {
                sum += 4;
            } if (deckArray[i].rank === "5") {
                sum += 5;
            } if (deckArray[i].rank === "6") {
                sum += 6;
            } if (deckArray[i].rank === "7") {
                sum += 7;
            } if (deckArray[i].rank === "8") {
                sum += 8;
            } if (deckArray[i].rank === "9") {
                sum += 9;
            } if (deckArray[i].rank === "10" || deckArray[i].rank === "Jack" || deckArray[i].rank === "Queen" || deckArray[i].rank === "King") {
                sum += 10;
            } else if (deckArray[i].rank === "Ace") {
                sum += 11;
                aceValue += 1;
            } else {
                sum += deckArray[i].rank;
            }
        }
        while (aceValue > 0 && sum > 21) {
            sum -= 10;
            aceValue -= 1;
        }
        return sum;
};

function initialize() {
    scores = {
        player: 0,
        dealer: 0
    };
    winner = null;
    //render();
};

function newGame() {
    document.getElementById("startbutton").disabled = true;
    document.getElementById("hitmebutton").disabled = false;
    document.getElementById("staybutton").disabled = false;
    document.getElementById("bet").disabled = true;
    document.getElementById("middle").innerHTML = "";
    hit();
    hit();
    dealerDraw();
    endGame();
};

function resetGame() {
    cardsDrawn = 0;
    player.cards = [];
    dealer.cards = [];
    player.score = 0;
    dealer.score = 0;
    initialize();
    createNewDeck();
    document.getElementById("hitmebutton").disabled = true;
    document.getElementById("staybutton").disabled = true;
    document.getElementById("bet").disabled = false;
    document.getElementById("bet").max = player.bank;
    document.getElementById("startbutton").disabled = false;
};

function bet(outcome) {
    if (outcome === "win") {
        player.bank += player.bet;
    }
    if (outcome === "lose") {
        player.bank -= player.bet;
    }
};

function dealerDraw() {
    dealer.cards.push(newDeck[cardsDrawn]);
    dealer.score = assignCardValue(dealer.cards);
    document.getElementById("dealer-cards").innerHTML = "Dealer's Cards: " + dealer.cards;
    document.getElementById("dealer-score").innerHTML = "Dealer's Score: " + dealer.score;
    cardsDrawn += 1;
};

function hit() {
    player.cards.push(newDeck[cardsDrawn]);
    player.score = assignCardValue(player.cards);
    document.getElementById("player-cards").innerHTML = "Player's Cards: " + player.cards;
    document.getElementById("player-score").innerHTML = "Player's Score: " + player.score;
    cardsDrawn += 1;
    if (cardsDrawn >= 2) {
        endGame();
    }
};

function stay() {
    while (dealer.score < 18) {
        dealerDraw();
    }
    endGame();
};

function endGame() {
    if (player.score === 21) {
        document.getElementById("middle").innerHTML = "RESULTS:<br><br>Blackjack! You win!";
        bet("win");
        document.getElementById("bank").innerHTML = "BANK: $" + player.bank;
        resetGame();
    }
    if (player.score > 21) {
        document.getElementById("middle").innerHTML = "RESULTS:<br><br>You busted! The dealer wins.";
        bet("lose");
        document.getElementById("bank").innerHTML = "BANK: $" + player.bank;
        resetGame();
    }
    if (dealer.score === 21) { 
        document.getElementById("middle").innerHTML = "RESULTS:<br><br>The dealer got blackjack! You lose this round.";
        bet("lose");
        document.getElementById("bank").innerHTML = "BANK: $" + player.bank;
        resetGame();
    }
    if (dealer.score > 21) {
        document.getElementById("middle").innerHTML = "RESULTS:<br><br> The dealer busted! You win!";
        bet("win");
        document.getElementById("bank").innerHTML = "BANK: $" + player.bank;
        resetGame();
    } 
    if (dealer.score >= 18 && player.score > dealer.score && player.score < 21) {
        document.getElementById("middle").innerHTML = "RESULTS<br><br>You win! You beat the dealer!";
        bet("win");
        document.getElementById("bank").innerHTML = "BANK: $" + player.bank;
        resetGame();
    }
    if (dealer.score >= 18 && player.score < dealer.score && dealer.score < 21) {
        document.getElementById("middle").innerHTML = "RESULTS: The dealer had the higher score. You lose your bet.";
        bet("lose");
        document.getElementById("bank").innerHTML = "BANK: $" + player.bank;
        resetGame();
    }
    if (player.score === dealer.score && dealer.score >= 18 && dealer.score < 21) {
        document.getElementById("middle").innerHTML = "RESULTS:<br><br> You tied the house! Keep your bet!";
        resetGame();
    }
    if (player.bank <= 0) {
        document.getElementById("startbutton").disabled = true;
        document.getElementById("hitmebutton").disabled = true;
        document.getElementById("staybutton").disabled = true;
        document.getElementById("middle").innerHTML = "You are out of money! Please refresh your browser to start a new game!";
    }
};

initialize();