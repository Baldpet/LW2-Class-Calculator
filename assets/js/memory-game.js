const soldierDeck = ["soldierA","soldierB","soldierC", "soldierD", "soldierE", "soldierF", "soldierG"];
const alienDeck = ["muton", "chryssalid", "sectoid"];
let matchedCards = []

// --------- Fisher-Yates shuffle ------------

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array
}

// ---------Difficulty Switching ------------

$(".fa-star").click(function(){
    if($(this).is("#star-1")){
        $(".fa-star").removeClass("star-active");
        $(this).addClass("star-active");
    } else if($(this).is("#star-2")){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $(this).addClass("star-active");
    } else if($(this).is("#star-3")){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
        $(this).addClass("star-active");
    } else {
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
        $("#star-3").addClass("star-active");
        $(this).addClass("star-active");
    }
})

// ---------Card Drawing and Deck Structure ------------

function deckOne(){
    var deckOne = [];
        
    var soldierDeckOne = shuffle(soldierDeck);
    for(var i = 0; i < soldierDeckOne.length; i++) {
        deckOne.push(soldierDeckOne[i]);
        deckOne.push(soldierDeckOne[i]);
    }

    var alienDeckOne = shuffle(alienDeck);
    for(var i = 0; i < alienDeckOne.length - 2; i++) {
        deckOne.push(alienDeckOne[i]);
        deckOne.push(alienDeckOne[i]);
    }

    shuffle(deckOne);

    return deckOne;
}

function deckTwo(){
    var deckTwo = [];
        
    var soldierDeckTwo = shuffle(soldierDeck);
    for(var i = 0; i < soldierDeckTwo.length - 1; i++) {
        deckTwo.push(soldierDeckTwo[i]);
        deckTwo.push(soldierDeckTwo[i]);
    }

    var alienDeckTwo = shuffle(alienDeck);
    for(var i = 0; i < alienDeckTwo.length - 1; i++) {
        deckTwo.push(alienDeckTwo[i]);
        deckTwo.push(alienDeckTwo[i]);
    }
    
    shuffle(deckTwo);

    return deckTwo;
}

function deckThree(){
    var deckThree = [];
        
    var soldierDeckThree = shuffle(soldierDeck);
    for(var i = 0; i < soldierDeckThree.length - 2; i++) {
        deckThree.push(soldierDeckThree[i]);
        deckThree.push(soldierDeckThree[i]);
    }

    var alienDeckThree = shuffle(alienDeck);
    for(var i = 0; i < alienDeckThree.length; i++) {
        deckThree.push(alienDeckThree[i]);
        deckThree.push(alienDeckThree[i]);
    }
   
    shuffle(deckThree);

    return deckThree;
}

function deckFour(){
    var deckFour = [];
        
    var soldierDeckFour = shuffle(soldierDeck);
    for(var i = 0; i < soldierDeckFour.length - 2; i++) {
        deckFour.push(soldierDeckFour[i]);
        deckFour.push(soldierDeckFour[i]);
    }

    var alienDeckFour = shuffle(alienDeck);
    for(var i = 0; i < alienDeckFour.length - 1; i++) {
        deckFour.push(alienDeckFour[i]);
        deckFour.push(alienDeckFour[i]);
        deckFour.push(alienDeckFour[i]);
    }
    
    shuffle(deckFour);

    return deckFour;
}


function difficulty(){
    var difficultyNum = $(".star-active").length;
    return difficultyNum;
}

function cardDraw(){
    if(difficulty() === 1){
        var deck = deckOne();
    } else if(difficulty() === 2) {
        var deck = deckTwo();
    } else if(difficulty() === 3) {
        var deck = deckThree();
    } else {
        var deck = deckFour();
    };

    console.log(deck);

    return deck
}

// ---------Adding the deck to the gameboard ------------

function newGame(){
    var deck = cardDraw();

    $(".game-card-front").each(function(i){
        $(this).addClass(deck[i]);
    });

    $(".game-card-style").each(function(i){
        $(this).attr("name", deck[i]);
    }); 
}

// ---------timer & best time ------------

function startTimer() {
     var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        $("#seconds").html(pad(++sec%60));
        $("#minutes").html(pad(parseInt(sec/60,10)));
    }, 1000);

}

// ---------attempt counter ------------

// ---------start game ------------

$(".start").click(function(){
    $(".game-start-container").addClass("hidden");
    $(".card-container").removeClass("hidden");
    newGame();
    startTimer();
   
})

// ---------reset game ------------

$(".reset-button").click(function(){
    $(".game-start-container").removeClass("hidden");
    $(".card-container").addClass("hidden");
    $(".game-card-front").removeClass(["soldierA", "soldierB", "soldierC", "soldierD", "soldierE", "soldierF", "soldierG", "muton", "sectoid", "chryssalid"]);
    $(".game-card-style").removeClass("flip");
})


// ---------card flipping ------------
let hasFlipped = false;
let card1, card2;

$(".game-card-style").click(function(card){    
        $(this).addClass("flip");
        console.log($(this).attr("name"))
       

        if(hasFlipped === true) {
            card2 = $(this)
            checkForCardMatch()
        } else {
           hasFlipped = true;
           card1 = $(this);
           card1.off("click");
        }
   
    
    console.log(hasFlipped);
    console.log(card1);
    console.log(card2);
    console.log(matchedCards);
});


function checkForCardMatch(card) {
    
    if(card1.attr("name") === card2.attr("name")) {
        disableCards()
        matchedCards.push(card1);
        card1.off("click");
        matchedCards.push(card2);
        card2.off("click");
    } else {
        unflip()
    }
    hasFlipped = false;
}

function unflip(){
    setTimeout(function(){
        card1.removeClass("flip");
        card1.on("click", function() {
            $(this).addClass("flip");  
            if(hasFlipped === true) {
                card2 = $(this)
                checkForCardMatch()
            } else {
                hasFlipped = true;
                card1 = $(this);
                card1.off("click");
            };
        });
        card2.removeClass("flip");
    }, 1000)
}

function disableCards(){

}
/*
function cardMatch(card1, card2) {

}

function cardMisMatch(card1, card2){

}

getCardType(card){
    return card.lastChildElement.css("background-image");
}
*/
function canBeFlipped(card) {
    return ;
}


