const soldierDeck = ["soldierA","soldierB","soldierC", "soldierD", "soldierE", "soldierF", "soldierG"];
const alienDeck = ["muton", "chryssalid", "sectoid"];
let matchedCards = []

if(localStorage.getItem("timeOne") === null){
    $("#best-time").html("0");
} else {
    $("#best-time").html(localStorage.getItem("timeOne"));
}

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

let starSwitch = 0;

$(".fa-star").click(function(){
    if($(this).is("#star-1")){
        starSwitch = 1;
    } else if($(this).is("#star-2")){
        starSwitch = 2;
    } else if($(this).is("#star-3")){
        starSwitch = 3;
    } else {
        starSwitch = 4;
    }
})

function StarSwitchConfirm(){
    if(starSwitch === 1){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
    } else if(starSwitch === 2){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
    } else if(starSwitch === 3){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
        $("#star-3").addClass("star-active");
    } else if(starSwitch === 4){
        $(".fa-star").removeClass("star-active");
        $("#star-1").addClass("star-active");
        $("#star-2").addClass("star-active");
        $("#star-3").addClass("star-active");
        $("#star-4").addClass("star-active");
    }
}

$("#resetGame").click(function(){
    reset();
    StarSwitchConfirm();
    starBestTime();
})

function starBestTime() {
    if(difficulty() === 1){
        setBestTime("timeOne");
    } else if(difficulty() === 2){
        setBestTime("timeTwo");
    } else if(difficulty() === 3){
        setBestTime("timeThree");
    } else if(difficulty() === 4){
        setBestTime("timeFour");
    }
}

function setBestTime(time){
    if(localStorage.getItem(time) === null){
            $("#best-time").html("0")
        } else {
            $("#best-time").html(localStorage.getItem(time));
        }     
}

// ---------Card Drawing and Deck Structure ------------

function deckOne(){
    var deckOne = [];
        
    var soldierDeckOne = shuffle(soldierDeck);
    for(let i = 0; i < soldierDeckOne.length; i++) {
        deckOne.push(soldierDeckOne[i]);
        deckOne.push(soldierDeckOne[i]);
    }

    var alienDeckOne = shuffle(alienDeck);
    for(let i = 0; i < alienDeckOne.length - 2; i++) {
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
    for(let i = 0; i < alienDeckTwo.length - 1; i++) {
        deckTwo.push(alienDeckTwo[i]);
        deckTwo.push(alienDeckTwo[i]);
    }
    
    shuffle(deckTwo);

    return deckTwo;
}

function deckThree(){
    var deckThree = [];
        
    var soldierDeckThree = shuffle(soldierDeck);
    for(let i = 0; i < soldierDeckThree.length - 2; i++) {
        deckThree.push(soldierDeckThree[i]);
        deckThree.push(soldierDeckThree[i]);
    }

    var alienDeckThree = shuffle(alienDeck);
    for(let i = 0; i < alienDeckThree.length; i++) {
        deckThree.push(alienDeckThree[i]);
        deckThree.push(alienDeckThree[i]);
    }
   
    shuffle(deckThree);

    return deckThree;
}

function deckFour(){
    var deckFour = [];
        
    var soldierDeckFour = shuffle(soldierDeck);
    for(let i = 0; i < soldierDeckFour.length - 2; i++) {
        deckFour.push(soldierDeckFour[i]);
        deckFour.push(soldierDeckFour[i]);
    }

    var alienDeckFour = shuffle(alienDeck);
    for(let i = 0; i < alienDeckFour.length - 1; i++) {
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
  let deck;
    if(difficulty() === 1){
        deck = deckOne();
    } else if(difficulty() === 2) {
        deck = deckTwo();
    } else if(difficulty() === 3) {
        deck = deckThree();
    } else {
        deck = deckFour();
    };
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

let sec = 0;
let timer;
let time;

function startTimer() {
    timer = setInterval(function(){
        sec++;
        $("#timer").html(sec);
    }, 1000)

}

function stopTimer() {
    time = sec;
    sec = 0;
    clearInterval(timer);
}

function bestTime() {
    var bestTimeCheck;
    if(difficulty() === 1){
        bestTimeCheck = 'timeOne';
    } else if(difficulty() === 2) {
        bestTimeCheck = 'timeTwo';
    } else if(difficulty() === 3) {
        bestTimeCheck = 'timeThree';
    } else if(difficulty() === 4){
        bestTimeCheck = 'timeFour';
    };
    bestTimeOne(bestTimeCheck)
}

function bestTimeOne(bestTimeCheck) {
    if(time < localStorage.getItem(bestTimeCheck)) {
        localStorage.setItem(bestTimeCheck, time);
        $("#best-time").html(time);
    } else if(localStorage.getItem(bestTimeCheck) === null){
        localStorage.setItem(bestTimeCheck, time);
        $("#best-time").html(time);   
    }
}

// ---------attempt counter ------------

let counter = 0;
function attemptCounter(boolean) {
    counter = counter +1;
    $(".attempt-counter").html(counter);
}

function resetCounter() {
    counter = 0;
    $(".attempt-counter").html(counter);
}

// ---------start game ------------

$(".start").click(function(){
    $(".game-start-container").addClass("hidden");
    $(".card-container").removeClass("hidden");
    removeFixedTop();
    newGame();
    startTimer();
    flipCard();   
})

// ---------reset game ------------

function reset() {
    $(".game-start-container").removeClass("hidden");
    $(".card-container").addClass("hidden");
    addFixedTop();
    $(".game-card-front").removeClass(["soldierA", "soldierB", "soldierC", "soldierD", "soldierE", "soldierF", "soldierG", "muton", "sectoid", "chryssalid"]);
    $(".game-card-style").removeClass("flip");
    $(".game-card-style").off("click");
    $(".win-container").off("click");
    $(".lose-container").off("click");
    $(".lose-container").fadeOut("fast");
    $(".win-container").fadeOut("fast");
    $(".win-container-four").off("click");
    $(".lose-container-one").off("click");
    $(".lose-container-one").fadeOut("fast");
    $(".win-container-four").fadeOut("fast");
    stopTimer();
        matchedCards= [];
        card1 = undefined;
        card2 = undefined;
        hasFlipped = false;
}

$(".reset-button").click(function(){
    reset();
});


// ---------card flipping ------------

let hasFlipped = false;
let card1, card2;
var busy = false;
function flipCard(){
    $(".game-card-style").click(function(card){
        if(busy === false) {
                busy = true;
                $(this).addClass("flip");
                if(hasFlipped === true) {
                    card2 = $(this)
                    checkForCardMatch()             
                } else {
                    hasFlipped = true;
                    card1 = $(this);
                    card1.off("click");
                    busy = false;
                }
            
        }
    });
}

// ---------Card Match Logic ------------

function checkForCardMatch(card) { 
    if(card1.attr("name") === card2.attr("name")) {
        checkLose();
        matchedCards.push(card1);
        card1.off("click");
        matchedCards.push(card2);
        card2.off("click");
        checkVictory();
        busy = false;
    } else {
        unflip()
    }
    hasFlipped = false;
}

function unflip(){
    setTimeout(function(){
        card1.removeClass("flip");
        card1.on("click", function() {
            if(busy === false){
                busy = true;
                $(this).addClass("flip");  
                if(hasFlipped === true) {
                    card2 = $(this)
                    checkForCardMatch()
                } else {
                    hasFlipped = true;
                    card1 = $(this);
                    card1.off("click");
                    busy = false;
                };
            }
        });
        card2.removeClass("flip");
        busy = false;
    }, 700)
}

function checkLose() {
    var cardName = card1.attr("name");
    if(cardName === "muton" || cardName === "sectoid" || cardName === "chryssalid") {
        gameLose() 
    }
}

function checkVictory() {
    if(matchedCards.length === soldierNum()) {
        gameWin();
    }
}

function soldierNum() {
    if(difficulty() === 1){
        return 14;
    } else if(difficulty() === 2) {
        return 12;
    } else if(difficulty() === 3) {
        return 10;
    } else {
        return 10;
    };
}

// ---------Game Win/Lose ------------

function gameLose() {
    if($(".star-active").length === 1){
        $('.lose-container-one').fadeIn("slow");
        setTimeout(() => { 
            $(".lose-container-one").click(function(){
                reset();
            })
        }, 1500);
    } else {
        $('.lose-container').fadeIn("slow");
        setTimeout(() => { 
            $(".lose-container").click(function(){
                reset();
            })
        }, 1500);
    }

    attemptCounter();
    stopTimer();
}

function gameWin() {
    timesWon();

    if($(".star-active").length === 4){
        $(".win-container-four").fadeIn("slow");
        setTimeout(() => {
            $(".win-container-four").click(function(){
                reset();
            })
        }, 1500);
    } else {
        $(".win-container").fadeIn("slow");
        setTimeout(() => {
            $(".win-container").click(function(){
                reset();
            })
        }, 1500);
    }

    resetCounter();
    stopTimer();
    bestTime();
}

function timesWon() {
    if(localStorage.getItem("winOne") === null){
        localStorage.setItem("winOne", 0);
        localStorage.setItem("winTwo", 0);
        localStorage.setItem("winThree", 0);
        localStorage.setItem("winFour", 0);
    }
		let wins;
    if(difficulty() === 1){
        wins = parseInt(localStorage.getItem("winOne")) + 1;
        localStorage.setItem("winOne", wins);
        $(".wins").html(function(){
            return " " + wins + " ";
        });
    } else if( difficulty() === 2){
        wins = parseInt(localStorage.getItem("winTwo")) + 1;
        localStorage.setItem("winTwo", wins);
        $(".wins").html(function(){
            return " " + wins + " ";
        });
    } else if(difficulty() === 3){
        wins = parseInt(localStorage.getItem("winThree")) + 1;
        localStorage.setItem("winThree", wins);
        $(".wins").html(function(){
            return " " + wins + " ";
        });
    } else if(difficulty() === 4){
        wins = parseInt(localStorage.getItem("winFour")) + 1;
        localStorage.setItem("winFour", wins);
        $(".win-four").html(function(){
            return " " + wins + " ";
        });
    }
}

// ----------Removing/Adding Fixed Top Nav-------------------

function removeFixedTop() {
    $(".navbar-dark").removeClass("fixed-top");
    $("#container-intro").removeClass("container-game-intro");
}

function addFixedTop() {
    $(".navbar-dark").addClass("fixed-top");
    $("#container-intro").addClass("container-game-intro");
}