let player = {
    cards: [],
    score: 0,
    bank: 500,
    bet: 50,
    total: 0
};

let dealer = {
    cards: [],
    score: 0,
    total: 0
};

let deck = [
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
        imgUrl: "card-deck-css/css/images/clubs/clubs-r10.svg"
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
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r08.svg"
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
        imgUrl: "card-deck-css/css/images/diamonds/diamonds-r10.svg"
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


let newDeck = shuffleDeck(deck);

let dealerCardImages = document.getElementById("dealer-card-images");

let dealerScore = document.getElementById("dealer-score");

let playerCardImages = document.getElementById("player-card-images");

let playerScore = document.getElementById("player-score");

let playerBank = document.getElementById("bank");

let playerBet = document.getElementById("bet");

let announcement = document.getElementById("middle");

document.getElementById("startbutton").addEventListener("click", newGame);

document.getElementById("hitmebutton").addEventListener("click", hit);

document.getElementById("staybutton").addEventListener("click", stay);

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

    while (dealer.cards.length > 0) {
        deck.push(dealer.cards.pop());
    }
        
    while (player.cards.length > 0) {
        deck.push(player.cards.pop());
    }

    dealerCardImages.innerHTML = '';


    player.score = 0;
    dealer.score = 0;
    player.total = 0;
    dealer.total = 0;
    playerBank.innerHTML = "BANK: $" + player.bank;
    playerBet.innerHTML = "BET: $" + player.bet;
    shuffleDeck();

    document.getElementById("startbutton").disabled = false;
    document.getElementById("hitmebutton").disabled = true;
    document.getElementById("staybutton").disabled = true;
};

function newGame() {
    if (player.bank <= 0) {
        announcement.innerHTML = "You are out of money! Please refresh your browser to start a new game!";
    } else {announcement.innerHTML = "Let's Play!";
        dealerScore.innerHTML = '';
        playerBet.innerHTML = "BET: $" + player.bet;
        playerBank.innerHTML = "BANK: $" + player.bank;
        playerDraw();
        dealerDraw();
        // checkWinner();
        document.getElementById("startbutton").disabled = true;
        document.getElementById("hitmebutton").disabled = false;
        document.getElementById("staybutton").disabled = false;
    }
};

function dealerDraw() {
    if (dealer.cards.length < 2) {
            for (let i = 0; i < 2; i++) { 
            var x = Math.floor(Math.random() * deck.length)
            dealer.score = deck[x].value;
            dealer.cards.push(deck[x]);
            deck.splice(x, 1);
            dealer.total = parseInt(dealer.total);
            dealer.total = dealer.total + dealer.score;
            render();
        }
    } else {
        var x = Math.floor(Math.random() * deck.length)
        dealer.score = deck[x].value;
        dealer.cards.push(deck[x]);
        deck.splice(x, 1);
        dealer.total = parseInt(dealer.total);
        dealer.total = dealer.total + dealer.score 
        render();
    }
};


function playerDraw() {
    for (let i = 0; i < 2; i++) { 
        var x = Math.floor(Math.random() * deck.length)
        player.score = deck[x].value;
        player.cards.push(deck[x]);
        deck.splice(x, 1);
        player.total = parseInt(player.total);
        player.total = player.total + player.score;
        playerScore.innerHTML = "Player's Score: " + player.total;
        render();
        
    };
};

function hit() {
    let x = Math.floor(Math.random() * deck.length);
    player.score = deck[x].value;
    player.cards.push(deck[x]);
    deck.splice(x, 1);
    player.total = parseInt(player.total);
    player.total = player.total + player.score;    
    playerScore.innerHTML = "Player's Score: " + player.total;
    render();
    checkWinner();
};

function stay() {
    document.getElementById("hitmebutton").disabled = true;
    dealerScore.innerHTML = "Dealer's Score: " + dealer.total;
    while (dealer.total < 18) {
        dealerDraw();
    }
    checkWinner();

    render()
};

function getCardElements (cards) {
    let elements = "";
    
    for (let i = 0; i < cards.length; i++) {
        elements += `<img src="${cards[i].imgUrl}">`;
    }
    return elements;
};

function render() {
        if (dealer.cards.length > 2) {
            dealerCardImages.innerHTML = getCardElements(dealer.cards);
            dealerScore.innerHTML = "Dealer's Score: " + dealer.total;
        } else if (dealer.cards.length > 0 && dealer.cards.length < 2) {
            dealerCardImages.innerHTML = `<img src="${dealer.cards[0].imgUrl}"><br> <img src="card-deck-css/css/images/backs/blue.svg">`
        }
        playerCardImages.innerHTML = getCardElements(player.cards); 
};

function bet(outcome) {
    if (outcome === "win") {
        player.bank += player.bet;
    }
    if (outcome === "lose") {
        player.bank -= player.bet;
    }
};

function checkWinner() {
    if (player.total === 21) {
        announcement.innerHTML = "RESULTS:<br><br>Blackjack! You win!";
        bet("win");
        playerBank.innerHTML = "BANK: $" + player.bank;
            initialize();
    } else if (player.total > 21) {
        announcement.innerHTML = "RESULTS:<br><br>You busted! The dealer wins.";
        bet("lose");
        playerBank.innerHTML = "BANK: $" + player.bank;
            initialize();
    } else if (dealer.total === 21) { 
        announcement.innerHTML = "RESULTS:<br><br>The dealer got blackjack! You lose this round.";
        bet("lose");
        playerBank.innerHTML = "BANK: $" + player.bank;
            initialize();
    } else if (dealer.total > 21) {
        announcement.innerHTML = "RESULTS:<br><br> The dealer busted! You win!";
        bet("win");
        playerBank.innerHTML = "BANK: $" + player.bank;
            initialize();
    }  else if (dealer.total >= 18 && player.total > dealer.total && player.total < 21) {
        announcement.innerHTML = "RESULTS<br><br>You win! You beat the dealer!";
        bet("win");
        playerBank.innerHTML = "BANK: $" + player.bank;
            initialize();
    } else if (dealer.total >= 18 && player.total < dealer.total && dealer.total < 21) {
        announcement.innerHTML = "RESULTS: The dealer had the higher score. You lose your bet.";
        bet("lose");
        playerBank.innerHTML = "BANK: $" + player.bank;
            initialize();
    } else if (player.total === dealer.total && dealer.total >= 18 && dealer.total < 21) {
        announcement.innerHTML = "RESULTS:<br><br> You tied the house! Keep your bet!";
            initialize();
    } 
};