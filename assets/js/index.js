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
    classSelector($(this));
    $(".assault-talents").removeClass("hidden");
})

$("#grenadier").click(function(){
    classSelector($(this));
    $(".grenadier-talents").removeClass("hidden");
})

$("#gunner").click(function(){
    classSelector($(this));
    $(".gunner-talents").removeClass("hidden");
})

$("#ranger").click(function(){
    classSelector($(this));
    $(".ranger-talents").removeClass("hidden");
})

$("#sharpshooter").click(function(){
    classSelector($(this));
    $(".sharpshooter-talents").removeClass("hidden");
})

$("#shinobi").click(function(){
    classSelector($(this));
    $(".shinobi-talents").removeClass("hidden");
})

$("#specialist").click(function(){
    classSelector($(this));
    $(".specialist-talents").removeClass("hidden");
})

$("#technical").click(function(){
    classSelector($(this));
    $(".technical-talents").removeClass("hidden");
})

function classSelector(box){
    $(".class-selector").removeClass("talents-active");
    $(box).addClass("talents-active");
    $(".talents-box").off("click");
    talentClick();
    talentIcon();
    $(".assault-talents").addClass("hidden");
    $(".grenadier-talents").addClass("hidden");
    $(".gunner-talents").addClass("hidden");
    $(".ranger-talents").addClass("hidden");
    $(".sharpshooter-talents").addClass("hidden");
    $(".shinobi-talents").addClass("hidden");
    $(".specialist-talents").addClass("hidden");
    $(".technical-talents").addClass("hidden");
}


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
            $(".talents-box").removeClass(["talents-box-active", "talents-box-other"]);
        } else {
            $(box).parent().next().children().addClass("hidden");
            var boxNumber = $(box).index();
            $(box).parent().next().children().eq(boxNumber).removeClass("hidden");
            $(".talents-box").removeClass(["talents-box-active", "talents-box-other"]);
            $(box).addClass("talents-box-active");
            $(box).siblings().addClass("talents-box-other");
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
        $(".talents-box").removeClass(["talents-box-active", "talents-box-other"]);
        talentClick();
    })
 }

// ----- Talents Icons -------

function talentIcon(){
    $(".talents-icon").click(function(){
        var iconRow = $(this).parent().parent().parent();
        console.log(iconRow)
        var icons = $(iconRow).find(".talents-icon").removeClass("talents-active");
        console.log(icons)
        $(this).addClass("talents-active");
    })
}