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
        name: "twoOfClubs", 
        suit: "club",
        value: 2,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r02.svg"
    },
    {   
        name: "threeOfClubs",
        suit: "club",
        value: 3,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r03.svg"
    },
    {   
        name: "fourOfClubs",
        suit: "club",
        value: 4,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r04.svg"
    },
    {   
        name: "fiveOfClubs",
        suit: "club",
        value: 5,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r05.svg"
    },
    {   
        name: "sixOfClubs",
        suit: "club",
        value: 6,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r06.svg"
    },
    {   
        name: "sevenOfClubs",
        suit: "club",
        value: 7,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r07.svg"
    },
    {   
        name: "eightOfClubs",
        suit: "club",
        value: 8,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r08.svg"
    },
    {   
        name: "nineOfClubs",
        suit: "club",
        value: 9,
        imgUrl: "card-deck-css/css/images/clubs/clubs-r09.svg"
    },
    {   
        name: "tenOfClubs",
        suit: "club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-10.svg"
    },
    {   
        name: "jackOfClubs", 
        suit: "club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-J.svg"
    },
    {   
        name: "queenOfClubs",
        suit: "club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-Q.svg"
    },
    {   
        name: "kingOfClubs", 
        suit: "club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-K.svg"
    },
    {   
        name: "aceOfClubs", 
        suit: "club",
        value: 10,
        imgUrl: "card-deck-css/css/images/clubs/clubs-A.svg"
    },
    {   
        name: "twoOfDiamonds",
        suit: "diamond",
        value: 2,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r02.svg"
    },
    {   
        name: "threeOfDiamonds",
        suit: "diamond",
        value: 3,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r03.svg"
    },
    {   
        name: "fourOfDiamonds",
        suit: "diamond",
        value: 4,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r04.svg"
    },
    {   
        name: "fiveOfDiamonds",
        suit: "diamond",
        value: 5,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r05.svg"
    },
    {   
        name: "sixOfDiamonds", 
        suit: "diamond",
        value: 6,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r06.svg"
    },
    {   
        name: "sevenOfDiamonds",
        suit: "diamond",
        value: 7,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r07.svg"
    },
    {   
        name: "eightOfDiamonds", 
        suit: "diamond",
        value: 8,
        imgUrl: "card-deck-css/css/images/diamonds/diamond-r08.svg"
    },
    {   
        name: "nineOfDiamonds", 
        suit: "diamond",
        value: 9,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r09.svg"
    },
    {   
        name: "tenOfDiamonds",
        suit: "diamond",
        value: 10,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-10.svg"
    },
    {   
        name: "jackOfDiamonds",
        suit: "diamond",
        value: 10,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-J.svg"
    },
    {   
        name: "queenOfDiamonds",
        suit: "diamond",
        value: 10,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-Q.svg"
    },
    {   
        name: "kingOfDiamonds",
        suit: "diamond",
        value: 10,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-K.svg"
    },
    {   
        name: "aceOfDiamonds",
        suit: "diamond",
        value: 11,
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-A.svg"
    },
    {   
        name: "twoOfHearts",
        suit: "heart",
        value: 2,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r02.svg"
    },
    {   
        name: "threeOfHearts",
        suit: "heart",
        value: 3,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r03.svg"
    },
    {   
        name: "fourOfHearts",
        suit: "heart",
        value: 4,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r04.svg"
    },
    {   
        name: "fiveOfHearts",
        suit: "heart",
        value: 5,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r05.svg"
    },
    {   
        name: "sixOfHearts",
        suit: "heart",
        value: 6,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r06.svg"
    },
    {   
        name: "sevenOfHearts",
        suit: "heart",
        value: 7,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r07.svg"
    },
    {   
        name: "eightOfHearts",
        suit: "heart",
        value: 8,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r08.svg"
    },
    {   
        name: "nineOfHearts",
        suit: "heart",
        value: 9,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r09.svg"
    },
    {   
        name: "tenOfHearts",
        suit: "heart",
        value: 10,
        imgUrl: "card-deck-css/css/images/hearts/hearts-r10.svg"
    },
    {   
        name: "jackOfHearts",
        suit: "heart",
        value: 10,
        imgUrl: "card-deck-css/css/images/hearts/hearts-J.svg"
    },
    {   
        name: "queenOfHearts",
        suit: "heart",
        value: 10,
        imgUrl: "card-deck-css/css/images/hearts/hearts-Q.svg"
    },
    {   
        name: "kingOfHearts",
        suit: "heart",
        value: 10,
        imgUrl: "card-deck-css/css/images/hearts/hearts-K.svg"
    },
    {   
        name: "aceOfHearts",
        suit: "heart",
        value: 11,
        imgUrl: "card-deck-css/css/images/hearts/hearts-A.svg"
    },
    {   
        name: "twoOfSpades",
        suit: "spade",
        value: 2,
        imgUrl: "card-deck-css/css/images/spades/spades-r02.svg"
    },
    {   
        name: "threeOfSpades",
        suit: "spade",
        value: 3,
        imgUrl: "card-deck-css/css/images/spades/spades-r03.svg"
    },
    {   
        name: "fourOfSpades",
        suit: "spade",
        value: 4,
        imgUrl: "card-deck-css/css/images/spades/spades-r04.svg"
    },
    {   
        name: "fiveOfSpades", 
        suit:"spade",
        value: 5,
        imgUrl: "card-deck-css/css/images/spades/spades-r05.svg"
    },
    {   
        name: "sixOfSpades",
        suit: "spade",
        value: 6,
        imgUrl: "card-deck-css/css/images/spades/spades-r06.svg"
    },
    {   
        name: "sevenOfSpades",
        suit: "spade",
        value: 7,
        imgUrl: "card-deck-css/css/images/spades/spades-r07.svg"
    },
    {   
        name: "eightOfSpades",
        suit: "spade",
        value: 8,
        imgUrl: "card-deck-css/css/images/spades/spades-r08.svg"
    },
    {   
        name: "nineOfSpades",
        suit: "spade",
        value: 9,
        imgUrl: "card-deck-css/css/images/spades/spades-r09.svg"
    },
    {   
        name: "tenOfSpades",
        suit: "spade",
        value: 10,
        imgUrl: "card-deck-css/css/images/spades/spades-r10.svg"
    },
    {   
        name: "jackOfSpades",
        suit: "spade",
        value: 10,
        imgUrl: "card-deck-css/css/images/spades/spades-J.svg"
    },
    {   
        name: "queenOfSpades",
        suit: "spade",
        value: 10,
        imgUrl: "card-deck-css/css/images/spades/spades-Q.svg"
    },
    {   
        name: "kingOfSpades",
        suit: "spade",
        value: 10,
        imgUrl: "card-deck-css/css/images/spades/spades-K.svg"
    },
    {   
        name: "aceOfSpades",
        suit: "spade",
        value: 11,
        imgUrl: "card-deck-css/css/images/spades/spades-A.svg"
    }
];

/*----- app's state (variables) -----*/
let shuffle = Math.floor(Math.random() * 52);

let cardsDrawn = 0;

let newDeck = shuffleDeck();


/*----- cached element references -----*/
document.getElementById("bank").innerHTML = "BANK: $" + player.bank;

document.getElementById("bet").innerHTML = "BET: $" + player.bet;

/*----- event listeners -----*/
document.getElementById("startbutton").addEventListener("click", newGame);

document.getElementById("hitmebutton").addEventListener("click", hit);

document.getElementById("staybutton").addEventListener("click", stay);

/*----- functions -----*/
function shuffleDeck() {
    for (let i = 0; i < 52; i++) {
        shuffle;
        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;
    }
    return deck;
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
    checkWinner();
};

function resetGame() {
    cardsDrawn = 0;
    player.cards = [];
    dealer.cards = [];
    player.score = 0;
    dealer.score = 0;
    initialize();
    shuffleDeck();
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

function dealerDraw(idx) {
    dealer.cards.push(deck[idx].imgUrl);
    dealer.score = deck[idx].value;
    document.getElementById("dealer-cards").innerHTML = "Dealer's Cards: " + dealer.cards;
    document.getElementById("dealer-score").innerHTML = "Dealer's Score: " + dealer.score;
    cardsDrawn += 1;
};

function hit(idx) {
    player.cards.push(deck[idx].imgUrl);
    player.score = deck[idx].value;
    document.getElementById("player-cards").innerHTML = "Player's Cards: " + player.cards;
    document.getElementById("player-score").innerHTML = "Player's Score: " + player.score;
    cardsDrawn += 1;
    if (cardsDrawn >= 2) {
        checkWinner();
    }
};

function stay() {
    while (dealer.score < 18) {
        dealerDraw();
    }
    checkWinner();
};

function checkWinner() {
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
