const soldierDeck = ["soldier1","soldier2","soldier3", "soldier4", "soldier5", "soldier6", "soldier7"];
const alienDeck = ["muton", "chryssalid", "sectoid"];

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

// ---------start game ------------

$(".start").click(function(){
    $(".game-start-container").addClass("hidden");
    $(".card-container").removeClass("hidden");
    cardDraw()

})

// ---------reset game ------------

$(".reset-button").click(function(){
    $(".game-start-container").removeClass("hidden");
    $(".card-container").addClass("hidden");
})


// ---------card flipping ------------

$(".game-card-style").click(function(){
    $(this).toggleClass("flip");
});


