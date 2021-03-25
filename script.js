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

const deck = [
    {   
        name: "Two of Clubs", 
        suit: "Club",
        value: 2,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r02.svg"
    },
    {   
        name: "Three of Clubs",
        suit: "Club",
        value: 3,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r03.svg"
    },
    {   
        name: "Four of Clubs",
        suit: "Club",
        value: 4,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r04.svg"
    },
    {   
        name: "Five of Clubs",
        suit: "Club",
        value: 5,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r05.svg"
    },
    {   
        name: "Six of Clubs",
        suit: "Club",
        value: 6,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r06.svg"
    },
    {   
        name: "Seven of Clubs",
        suit: "Club",
        value: 7,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r07.svg"
    },
    {   
        name: "Eight of Clubs",
        suit: "Club",
        value: 8,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r08.svg"
    },
    {   
        name: "Nine of Clubs",
        suit: "Club",
        value: 9,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r09.svg"
    },
    {   
        name: "Ten of Clubs",
        suit: "Club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-10.svg"
    },
    {   
        name: "Jack of Clubs", 
        suit: "Club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-J.svg"
    },
    {   
        name: "Queen of Clubs",
        suit: "Club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-Q.svg"
    },
    {   
        name: "King of Clubs", 
        suit: "Club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-K.svg"
    },
    {   
        name: "Ace of Clubs", 
        suit: "Club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-A.svg"
    },
    {   
        name: "Two of Diamonds",
        suit: "Diamonds",
        value: 2,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r02.svg"
    },
    {   
        name: "Three of Diamonds",
        suit: "Diamond",
        value: 3,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r03.svg"
    },
    {   
        name: "Four of Diamonds",
        suit: "Diamond",
        value: 4,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r04.svg"
    },
    {   
        name: "Five of Diamonds",
        suit: "Diamond",
        value: 5,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r05.svg"
    },
    {   
        name: "Six of Diamonds", 
        suit: "Diamond",
        value: 6,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r06.svg"
    },
    {   
        name: "Seven of Diamonds",
        suit: "Diamond",
        value: 7,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r07.svg"
    },
    {   
        name: "Eight of Diamonds", 
        suit: "Diamond",
        value: 8,
        imgUrl: "card-deck-css/css/images/diamonds/diamond-r08.svg"
    },
    {   
        name: "Nine of Diamonds", 
        suit: "Diamond",
        value: 9,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r09.svg"
    },
    {   
        name: "Ten of Diamonds",
        suit: "Diamonds",
        value: 10,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-10.svg"
    },
    {   
        name: "Jack of Diamonds",
        suit: "Diamond",
        value: 10,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-J.svg"
    },
    {   
        name: "Queen of Diamonds",
        suit: "Diamond",
        value: 10,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-Q.svg"
    },
    {   
        name: "King of Diamonds",
        suit: "Diamond",
        value: 10,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-K.svg"
    },
    {   
        name: "Ace of Diamonds",
        suit: "Diamonds",
        value: 11,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-A.svg"
    },
    {   
        name: "Two of Hearts",
        suit: "Heart",
        value: 2,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r02.svg"
    },
    {   
        name: "Three of Hearts",
        suit: "Heart",
        value: 3,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r03.svg"
    },
    {   
        name: "Four of Hearts",
        suit: "Heart",
        value: 4,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r04.svg"
    },
    {   
        name: "Five of Hearts",
        suit: "Heart",
        value: 5,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r05.svg"
    },
    {   
        name: "Six of Hearts",
        suit: "Hearts",
        value: 6,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r06.svg"
    },
    {   
        name: "Seven of Hearts",
        suit: "Heart",
        value: 7,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r07.svg"
    },
    {   
        name: "Eight of Hearts",
        suit: "Heart",
        value: 8,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r08.svg"
    },
    {   
        name: "Nine of Hearts",
        suit: "Heart",
        value: 9,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r09.svg"
    },
    {   
        name: "Ten of Hearts",
        suit: "Heart",
        value: 10,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r10.svg"
    },
    {   
        name: "Jack of Hearts",
        suit: "Heart",
        value: 10,
        imgUrl: "card-deck-css/css/images/hearts/hearts-J.svg"
    },
    {   
        name: "Queen of Hearts",
        suit: "Heart",
        value: 10,
        imgUrl: "card-deck-css/css/images/hearts/hearts-Q.svg"
    },
    {   
        name: "King of Hearts",
        suit: "Heart",
        value: 10,
        imgUrl: "card-deck-css/css/images/hearts/hearts-K.svg"
    },
    {   
        name: "Ace of Hearts",
        suit: "Heart",
        value: 11,
        imgUrl: "card-deck-css/css/images/hearts/hearts-A.svg"
    },
    {   
        name: "Two of Spades",
        suit: "Spade",
        value: 2,
        imgUrl: "card-deck-css/css/images/spades/spades-r02.svg"
    },
    {   
        name: "Three of Spades",
        suit: "Spade",
        value: 3,
        imgUrl: "card-deck-css/css/images/spades/spades-r03.svg"
    },
    {   
        name: "Four of Spades",
        suit: "Spade",
        value: 4,
        imgUrl: "card-deck-css/css/images/spades/spades-r04.svg"
    },
    {   
        name: "Five of Spades", 
        suit:"Spade",
        value: 5,
        imgUrl: "card-deck-css/css/images/spades/spades-r05.svg"
    },
    {   
        name: "Six of Spades",
        suit: "Spade",
        value: 6,
        imgUrl: "card-deck-css/css/images/spades/spades-r06.svg"
    },
    {   
        name: "Seven of Spades",
        suit: "Spade",
        value: 7,
        imgUrl: "card-deck-css/css/images/spades/spades-r07.svg"
    },
    {   
        name: "Eight of Spades",
        suit: "Spade",
        value: 8,
        imgUrl: "card-deck-css/css/images/spades/spades-r08.svg"
    },
    {   
        name: "Nine of Spades",
        suit: "Spade",
        value: 9,
        imgUrl: "card-deck-css/css/images/spades/spades-r09.svg"
    },
    {   
        name: "Ten of Spades",
        suit: "Spade",
        value: 10,
        imgUrl: "card-deck-css/css/images/spades/spades-r10.svg"
    },
    {   
        name: "Jack of Spades",
        suit: "Spade",
        value: 10,
        imgUrl: "card-deck-css/css/images/spades/spades-J.svg"
    },
    {   
        name: "Queen of Spades",
        suit: "Spade",
        value: 10,
        imgUrl: "card-deck-css/css/images/spades/spades-Q.svg"
    },
    {   
        name: "King of Spades",
        suit: "Spade",
        value: 10,
        imgUrl: "card-deck-css/css/images/spades/spades-K.svg"
    },
    {   
        name: "Ace of Spades",
        suit: "Spade",
        value: 11,
        imgUrl: "card-deck-css/css/images/spades/spades-A.svg"
    }
];

/*----- app's state (variables) -----*/
let cardsDrawn = 0;

let newDeck = shuffleDeck(deck);

/*----- cached element references -----*/
const dealerCards = document.getElementById("dealer-cards");


const dealerScore = document.getElementById("dealer-score");


const playerCards = document.getElementById("player-cards");


const playerScore = document.getElementById("player-score");


const playerBank = document.getElementById("bank");


const playerBet = document.getElementById("bet");

const announcement = document.getElementById("middle");

/*----- event listeners -----*/
document.getElementById("startbutton").addEventListener("click", newGame);

document.getElementById("hitmebutton").addEventListener("click", hit);

document.getElementById("staybutton").addEventListener("click", stay);

/*----- functions -----*/

function shuffleDeck() {
    let m = deck.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = deck[m];
        deck[m] = deck[i];
        deck[i] = t;
    }

    return deck;
};

function initialize() {
    scores = {
        player: 0,
        dealer: 0
    };
    playerBank;
    playerBet;
    winner = null;
    render();
};

function newGame() {
    announcement = "Let's Play!";
    playerDraw();
    dealerDraw();
    checkWinner();
};

function resetGame() {
    cardsDrawn = 0;
    player.cards = [];
    dealer.cards = [];
    player.score = 0;
    dealer.score = 0;
    playerBank = player.bank;
    playerBet = player.bet;
    initialize();
    shuffleDeck();
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
    dealer.score = deck[Math.floor(Math.random() * deck.length)].value;
    dealer.cards.push(deck[cardsDrawn]);
    dealerCards = "Dealer's Cards: " + dealer.cards;
    dealerScore = "Dealer's Score: " + dealer.score;
    cardsDrawn += 1;

    console.log(dealer.score);
};

function playerDraw() {
    player.score = deck[Math.floor(Math.random() * deck.length)].value;
    player.cards.push(deck[CardsDrawn]);
    playerCards = "Player's Cards: " + player.cards;
    playerScore = "Player'S Score: " + player.score;
    cardsDrawn += 2;

    console.log(player.score);
}

function hit() {
    player.score = deck[Math.floor(Math.random() * deck.length)].value;
    player.cards.push(deck[cardsDrawn]);
    playerCards = "Player's Cards: " + player.cards;
    playerScore = "Player's Score: " + player.score;
    cardsDrawn += 1;
};

function stay() {
    while (dealer.score < 18) {
        dealerDraw();
    }
    checkWinner();
};

function render() {
    dealerCards.style.imgUrl = `url(${deck[dealer.cards].imgUrl})`;
    playerCards.style.imgUrl = `url(${deck[player.cards].imgUrl})`;
    
    dealerScore = dealer.score;
    playerScore = player.score;

    playerBank = player.bank;
};


function checkWinner() {
    if (player.score === 21) {
        announcement = "RESULTS:<br><br>Blackjack! You win!";
        bet("win");
        playerBank = "BANK: $" + player.bank;
        resetGame();
    }
    if (player.score > 21) {
        announcement = "RESULTS:<br><br>You busted! The dealer wins.";
        bet("lose");
        playerBank = "BANK: $" + player.bank;
        resetGame();
    }
    if (dealer.score === 21) { 
        announcement = "RESULTS:<br><br>The dealer got blackjack! You lose this round.";
        bet("lose");
        playerBank = "BANK: $" + player.bank;
        resetGame();
    }
    if (dealer.score > 21) {
        announcement = "RESULTS:<br><br> The dealer busted! You win!";
        bet("win");
        playerBank = "BANK: $" + player.bank;
        resetGame();
    } 
    if (dealer.score >= 18 && player.score > dealer.score && player.score < 21) {
        announcement = "RESULTS<br><br>You win! You beat the dealer!";
        bet("win");
        playerBank = "BANK: $" + player.bank;
        resetGame();
    }
    if (dealer.score >= 18 && player.score < dealer.score && dealer.score < 21) {
        announcement = "RESULTS: The dealer had the higher score. You lose your bet.";
        bet("lose");
        playerBank = "BANK: $" + player.bank;
        resetGame();
    }
    if (player.score === dealer.score && dealer.score >= 18 && dealer.score < 21) {
        announcement = "RESULTS:<br><br> You tied the house! Keep your bet!";
        resetGame();
    }
    if (player.bank <= 0) {
        announcement = "You are out of money! Please refresh your browser to start a new game!";
    }
};

initialize();
