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
$(".talents-box").click(function(){
    talentReveal($(this));
})


function talentReveal(box){
    if (window.matchMedia('(max-width: 768px)').matches){
        var content = $(box).children("p").html();
        console.log(content)
        if(content !== "Squaddie" || content !== "Lance Corporal" || content !== "Corporal" || content !== "Sergeant" || content !== "Staff Sergeant" || content !== "Tech Sergeant" || content !== "Gunnery Sergeant" || content !== "Master Sergeant"){
           var boxNumber = $(box).index()
           $(box).parent().next().children().eq(boxNumber).removeClass("hidden");
        }
        //$(box)
    } else {
        $(box).parent().next().children().removeClass("hidden");
    }
}