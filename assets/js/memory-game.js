const soldierDeck = ["soldier1","soldier2","soldier3", "soldier4", "soldier5", "soldier6", "soldier7"];
const alienDeck = ["muton", "chryssalid", "sectoid"];

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

function difficulty(){
    var difficultyNum = $(".star-active").length;
    return;
}

function cardDraw(){
    if(difficulty === 1){
        "1"
    } else if(difficulty === 2) {
        "2"
    } else if(difficulty === 3) {
        "3"
    } else {
        "4"
    }
    return
}

var test = cardDraw

console.log(test)

// ---------card flipping ------------

$(".game-card-style").click(function(){
    $(this).toggleClass("flip");
});


