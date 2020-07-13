// ----- Class Selector -------

$(".class-selector").click(function(){
    classSelector($(this));
    let selector = $(this).attr("data-class");
    $(selector).removeClass("hidden");
});

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

// ----- Talents -------

function talentClick(){
    $(".talents-box").click(function(){
        talentReveal($(this));
    });
}


function talentReveal(box){
    if (window.matchMedia('(max-width: 768px)').matches){
        var content = $(box).children("p").html();
        if(content === "Squaddie" || content === "Lance Corporal" || content === "Corporal" || content === "Sergeant" || content === "Staff Sergeant" || content === "Tech Sergeant" || content === "Gunnery Sergeant" || content === "Master Sergeant"){
            $(".slide").slideToggle("fast");
            $(".slide").removeClass("slide");
            $(".talents-box").removeClass(["talents-box-active", "talents-box-other"]);
        } else {
            $(".slide").slideToggle("fast");
            $(".slide").removeClass("slide");
            var boxNumber = $(box).index();
            $(box).parent().next().children().eq(boxNumber).slideToggle("slow");
            $(box).parent().next().children().eq(boxNumber).addClass("slide");
            $(".talents-box").removeClass(["talents-box-active", "talents-box-other"]);
            $(box).addClass("talents-box-active");
            $(box).siblings().addClass("talents-box-other");
        }
    } else {
        $(box).parent().next().children().slideToggle();
    }
}

// ----- Talents Icons -------

function talentIcon(){
    $(".talents-icon").click(function(){
        var iconRow = $(this).parent().parent().parent();
        $(iconRow).find(".talents-icon").removeClass("talents-active");
        $(this).addClass("talents-active");
    });
}

// ----- Prebuilt Talents Icons -------

$(".prebuilt-talents").click(function(){
    var preTalent = $(this).attr("id");
    var preTalentSelect = "." + preTalent;
    $(".talents-icon").removeClass("talents-active");
    $(preTalentSelect).addClass("talents-active");
});

// ----- Reset -------

$(".talents-reset-button").click(function(){
    resetTalents();
});

function resetTalents(){
    $(".talents-icon").removeClass("talents-active");
    $(".talents-box-info").addClass("hidden");
}