var a = ["sounds/green.mp3", "sounds/red.mp3", "sounds/yellow.mp3", "sounds/blue.mp3"];
var buttonColours = ["green", "red", "yellow", "blue"];
var gamearraypatter = [];
var userclick = [];
var level = 0;
var started = false;

$(document).keypress(function () {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".buttons").click(function () {
    var clicked = $(this).attr("id");
    userclick.push(clicked);
    getSound(clicked);
    $("#" + clicked).fadeOut().fadeIn();
    checkAnswers(userclick.length-1);
});
function checkAnswers(currentlevel) {
    if (gamearraypatter[currentlevel] === userclick[currentlevel]) {
        if (gamearraypatter.length === userclick.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
        else {
            getSound("wrong");
            $("h1").text("Game Over, press any key to restart");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");

            }, 200);

            startover();
        }
    }


function nextSequence() {
    userclick = [];
    level++;
    $("h1").text("Level  " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomcolor = buttonColours[randomNumber];
    gamearraypatter.push(randomcolor);
    $("#" + randomcolor).fadeOut().fadeIn();
    getSound(randomcolor);

}
function getSound(sound) {
    var sound1 = new Audio("sounds/" + sound + ".mp3");
    sound1.play();
}
function startover() {
    level = 0;
    gamearraypatter = [];
    userclick = [];
    started = false;
}

/*
 var a = ["sounds/green.mp3", "sounds/red.mp3", "sounds/yellow.mp3", "sounds/blue.mp3"];
var wrong = "sounds/wrong.mp3";

$(".button1").on("click", button1click);
function button1click() {
        var button1music = new Audio(a[0]);
        button1music.play();
        $(".green").fadeOut().fadeIn();
    }


$(".button2").on("click", button2click);
function button2click() {
    var button2music = new Audio(a[1]);
    button2music.play();
    $(".red").fadeOut().fadeIn();
}


$(".button3").on("click", button3click);
function button3click() {
    var button3music = new Audio(a[2]);
    button3music.play();
    $(".yello").fadeOut().fadeIn();
}

$(".button4").on("click", button4click);
function button4click() {
    var button4music = new Audio(a[3]);
    button4music.play();
    $(".white").fadeOut().fadeIn();
}

this will create the button to play song when pressed
 */