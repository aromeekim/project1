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

const deck = {
    twoOfClubs: {
        suit: "club",
        value: 2,
        imgUrl: "images/clubs-r02.svg"
    },
    threeOfClubs: {
        suit: "club",
        value: 3,
        imgUrl: "images/clubs-r03.svg"
    },
    fourOfClubs: {
        suit: "club",
        value: 4,
        imgUrl: "images/clubs-r04.svg"
    },
    fiveOfClubs: {
        suit: "club",
        value: 5,
        imgUrl: "images/clubs-r05.svg"
    },
    sixOfClubs: {
        suit: "club",
        value: 6,
        imgUrl: "images/clubs-r06.svg"
    },
    sevenOfClubs: {
        suit: "club",
        value: 7,
        imgUrl: "images/clubs-r07.svg"
    },
    eightOfClubs: {
        suit: "club",
        value: 8,
        imgUrl: "images/clubs-r08.svg"
    },
    nineOfClubs: {
        suit: "club",
        value: 9,
        imgUrl: "images/clubs-r09.svg"
    },
    jackOfClubs: {
        suit: "club",
        value: 10,
        imgUrl: "images/clubs-J.svg"
    },
    queenOfClubs: {
        suit: "club",
        value: 10,
        imgUrl: "images/clubs-Q.svg"
    },
    kingOfClubs: {
        suit: "club",
        value: 10,
        imgUrl: "images/clubs-K.svg"
    },
    aceOfClubs: {
        suit: "club",
        value: 10,
        imgUrl: "images/clubs-A.svg"
    },
    twoOfDiamonds: {
        suit: "diamond",
        value: 2,
        imgUrl: "images/diamonds-r02.svg"
    },
    threeOfDiamonds: {
        suit: "diamond",
        value: 3,
        imgUrl: "images/diamonds-r03.svg"
    },
    fourOfDiamonds: {
        suit: "diamond",
        value: 4,
        imgUrl: "images/diamonds-r04.svg"
    },
    fiveOfDiamonds: {
        suit: "diamond",
        value: 5,
        imgUrl: "images/diamonds-r05.svg"
    },
    sixOfDiamonds: {
        suit: "diamond",
        value: 6,
        imgUrl: "images/diamonds-r06.svg"
    },
    sevenOfDiamonds: {
        suit: "diamond",
        value: 7,
        imgUrl: "images/diamonds-r07.svg"
    },
    eightOfDiamonds: {
        suit: "diamond",
        value: 8,
        imgUrl: "images/diamond-r08.svg"
    },
    nineOfDiamonds: {
        suit: "diamond",
        value: 9,
        imgUrl: "images/diamonds-r09.svg"
    },
    jackOfDiamonds: {
        suit: "diamond",
        value: 10,
        imgUrl: "images/diamonds-J.svg"
    },
    queenOfDiamonds: {
        suit: "diamond",
        value: 10,
        imgUrl: "images/diamonds-Q.svg"
    },
    kingOfDiamonds: {
        suit: "diamond",
        value: 10,
        imgUrl: "images/diamonds-K.svg"
    },
    aceOfDiamonds: {
        suit: "diamond",
        value: 11,
        imgUrl: "images/diamonds-A.svg"
    },
    twoOfHearts: {
        suit: "heart",
        value: 2,
        imgUrl: "images/hearts-r02.svg"
    },
    threeOfHearts: {
        suit: "heart",
        value: 3,
        imgUrl: "images/hearts-r03.svg"
    },
    fourOfHearts: {
        suit: "heart",
        value: 4,
        imgUrl: "images/hearts-r04.svg"
    },
    fiveOfHearts: {
        suit: "heart",
        value: 5,
        imgUrl: "images/hearts-r05.svg"
    },
    sixOfHearts: {
        suit: "heart",
        value: 6,
        imgUrl: "images/hearts-r06.svg"
    },
    sevenOfHearts: {
        suit: "heart",
        value: 7,
        imgUrl: "images/hearts-r07.svg"
    },
    eightOfHearts: {
        suit: "heart",
        value: 8,
        imgUrl: "images/hearts-r08.svg"
    },
    nineOfHearts: {
        suit: "heart",
        value: 9,
        imgUrl: "images/hearts-r09.svg"
    },
    jackOfHearts: {
        suit: "heart",
        value: 10,
        imgUrl: "images/hearts-J.svg"
    },
    queenOfHearts: {
        suit: "heart",
        value: 10,
        imgUrl: "images/hearts-Q.svg"
    },
    kingOfHearts: {
        suit: "heart",
        value: 10,
        imgUrl: "images/hearts-K.svg"
    },
    aceOfHearts: {
        suit: "heart",
        value: 11,
        imgUrl: "images/hearts-A.svg"
    },
    twoOfSpades: {
        suit: "spade",
        value: 2,
        imgUrl: "images/spades-r02.svg"
    },
    threeOfSpades: {
        suit: "spade",
        value: 3,
        imgUrl: "images/spades-r03.svg"
    },
    fourOfSpades: {
        suit: "spade",
        value: 4,
        imgUrl: "images/spades-r04.svg"
    },
    fiveOfSpades: {
        suit:"spade",
        value: 5,
        imgUrl: "images/spades-r05.svg"
    },
    sixOfSpades: {
        suit: "spade",
        value: 6,
        imgUrl: "images/spades-r06.svg"
    },
    sevenOfSpades: {
        suit: "spade",
        value: 7,
        imgUrl: "images/spades-r07.svg"
    },
    eightOfSpades: {
        suit: "spade",
        value: 8,
        imgUrl: "images/spades-r08.svg"
    },
    nineOfSpades: {
        suit: "spade",
        value: 9,
        imgUrl: "images/spades-r09.svg"
    },
    jackOfHearts: {
        suit: "spade",
        value: 10,
        imgUrl: "images/spades-J.svg"
    },
    queenOfSpades: {
        suit: "spade",
        value: 10,
        imgUrl: "images/spades-Q.svg"
    },
    kingOfSpades: {
        suit: "spade",
        value: 10,
        imgUrl: "images/spades-K.svg"
    },
    aceOfSpades: {
        suit: "spade",
        value: 11,
        imgUrl: "images/spades-A.svg"
    }
};

// const deck = [];
// for (let suit = 0; suit <4; suit++) {
//     for (let rank = 0; rank <13; rank++) {
//         deck.push(ranks[rank] + suits[suit]);
//     }
// };

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
// function assignCardValue(a) {
//     let deckArray = [],
//         sum = 0,
//         i = 0,
//         aceValue = 0;
//     deckArray = a;
//         for (i; i < deckArray.length; i++) {
//             if (deckArray[i].rank === "Jack" || deckArray[i].rank === "Queen" || deckArray[i].rank === "King") {
//                 sum += 10;
//             } else if (deckArray[i].rank === "Ace") {
//                 sum += 11;
//                 aceValue += 1;
//             } else {
//                 sum += deckArray[i].rank;
//             }
//         }
//         while (aceValue > 0 && sum > 21) {
//             sum -= 10;
//             aceValue -= 1;
//         }
//         return sum;
// };

// function createNewDeck() {
//     for (let i = 0; i < 52; i++) {
//         let shuffle = Math.floor(Math.random() * 52);
//         let temp = deck[i];
//         deck[i] = deck[shuffle];
//         deck[shuffle] = temp;
//     }
//     return deck;
// };
function createNewDeck() {
    for (let i = 0; i < 52; i++) {
        let shuffle = Math.floor(Math.random() * 52);
        let temp = cards[i];
        cards[i] = cards[shuffle];
        cards[shuffle] = temp;
    }
    return cards;
}


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
    dealer.cards.push(cards[cardsDrawn]);
    dealer.score = cards[value];
    document.getElementById("dealer-cards").innerHTML = "Dealer's Cards: " + dealer.cards;
    document.getElementById("dealer-score").innerHTML = "Dealer's Score: " + dealer.score;
    cardsDrawn += 1;
}

// function dealerDraw() {
//     dealer.cards.push(deck[cardsDrawn]);
//     dealer.score = assignCardValue(dealer.cards);
//     document.getElementById("dealer-cards").innerHTML = "Dealer's Cards: " + dealer.cards;
//     document.getElementById("dealer-score").innerHTML = "Dealer's Score: " + dealer.score;
//     cardsDrawn += 1;
// };

function hit() {
    player.cards.push(cards[cardsDrawn]);
    player.score = cards[value];
    document.getElementById("player-cards").innerHTML = "Player's Cards: " + player.cards;
    document.getElementById("player-score").innerHTML = "Player's Score: " + player.score;
    cardsDrawn += 1;
    if (cardsDrawn >= 2) {
        endGame();
    }
};

// function hit() {
//     player.cards.push(deck[cardsDrawn]);
//     player.score = assignCardValue(player.cards);
//     document.getElementById("player-cards").innerHTML = "Player's Cards: " + player.cards;
//     document.getElementById("player-score").innerHTML = "Player's Score: " + player.score;
//     cardsDrawn += 1;
//     if (cardsDrawn >= 2) {
//         endGame();
//     }
// };

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