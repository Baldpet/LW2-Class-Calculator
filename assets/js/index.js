// ----- Youtube ---------
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// ----- Talents -------
$("#assault").click(function(){
    talentClick();
})


function talentClick(){
    $(".talents-box").click(function(){
        talentReveal($(this));
        removeTalent($(this));
    })
}


function talentReveal(box){
    if (window.matchMedia('(max-width: 768px)').matches){
        var content = $(box).children("p").html();
        console.log(content)
        console.log(typeof(content))
        if(content === "Squaddie" || content === "Lance Corporal" || content === "Corporal" || content === "Sergeant" || content === "Staff Sergeant" || content === "Tech Sergeant" || content === "Gunnery Sergeant" || content === "Master Sergeant"){
            $(box).parent().next().children().addClass("hidden");
        } else {
            $(box).parent().next().children().addClass("hidden");
            var boxNumber = $(box).index();
            $(box).parent().next().children().eq(boxNumber).removeClass("hidden");
        }
    } else {
        $(box).parent().next().children().removeClass("hidden");
    }
}

function removeTalent(box){
    $(box).off("click");
    $(box).click(function(){
        $(box).parent().next().children().addClass("hidden");
        $(".talents-box").off("click");
        talentClick();
    })
 }