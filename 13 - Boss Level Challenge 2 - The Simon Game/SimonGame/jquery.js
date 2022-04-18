var buttons = ["green", "red", "yellow", "blue"];
var userclick = [];
var gamepattern = [];
var level = 0;
var started = false;
$(document).keypress(function () {
    if (!started) {
        $("h1").html("Level " + level);
        nextSequence();
        started = true;
    }
});

function nextSequence() {
     level++;
     $("h1").html("Level " + level);
        userclick = [];
        var randomcolor = buttons[Math.floor(Math.random() * 4)];
        gamepattern.push(randomcolor);
        getSound(randomcolor);
        $("#" + randomcolor).fadeOut().fadeIn();

}

$(".buttons").on("click", function () {
    var clickname = $(this).attr("id");
    userclick.push(clickname);
    getSound(clickname);
    $("#" + clickname).fadeOut().fadeIn();
    checkAnswer(userclick.length-1);
});
function checkAnswer(checking) {
    if (gamepattern[checking] === userclick[checking]) {
        if (gamepattern.length === userclick.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        $("h1").html("Wrong! press any key to restart");

        getSound("Wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function getSound(randomcolor) {
    var audio1 = new Audio("sounds/" + randomcolor + ".mp3");
    audio1.play();
}

function startOver() {
     userclick = [];
     gamepattern = [];
     level = 0;
    started = false;
}

