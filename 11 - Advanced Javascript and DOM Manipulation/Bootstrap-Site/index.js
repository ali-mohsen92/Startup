var a = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3",
    "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"];
var numberofdrums = document.querySelectorAll(".drum").length;
var button1;
var key2;
var Animation;
var Animation2;
for (var i = 0; i < numberofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", getData);
}
document.addEventListener("keypress", getSound);

function getSound() {
    key1 = event.key;
    result1(key1);
    getAnimation(key1);
}
function getData() {
    var HTMLButton = this.innerHTML;
    result(HTMLButton);
    getAnimation(HTMLButton);
}
function result(button1) {
    switch (button1) {
        case 'w':
            var tom1 = new Audio(a[0]);
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio(a[1]);
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio(a[2]);
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio(a[3]);
            tom4.play();
            break;
        case 'j':
            var snare = new Audio(a[4]);
            snare.play();
            break;
        case 'k':
            var crash = new Audio(a[5]);
            crash.play();
            break;
        case 'l':
            var kick = new Audio(a[6]);
            kick.play();
            break;

        default: break;
    }
}
function result1(key2) {
    switch (key2) {
        case 'w':
            var tom1 = new Audio(a[0]);
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio(a[1]);
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio(a[2]);
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio(a[3]);
            tom4.play();
            break;
        case 'j':
            var snare = new Audio(a[4]);
            snare.play();
            break;
        case 'k':
            var crash = new Audio(a[5]);
            crash.play();
            break;
        case 'l':
            var kick = new Audio(a[6]);
            kick.play();
            break;

        default: break;
    }
}
function getAnimation(Animation) {
    var Animation1 = document.querySelector("." + Animation);
    Animation1.classList.add("pressed");
    setTimeout(function () {
        Animation1.classList.remove("pressed");
    },100);
}

/*
 * 
 var bellyboy1 = new BellyBoy("Ali Mohsen", 19, true, ["Arabic", "English"])

function BellyBoy(name, yearsofexperience, identity, languages) {
    this.name = name;
    this.yearsofexperience = yearsofexperience;
    this.identity = identity;
    this.languages = languages;
    this.clean = function () {
        alert("Cleaning in Progress");
    }
}
    bellyboy1.clean();
This will assosiate clean function with bellyboy1

 *
 var bellyboy1 = new BellyBoy("Ali Mohsen", 19, true,["Arabic", "English"])

function BellyBoy(name, yearsofexperience,identity,languages) {
    this.name = name;
    this.yearsofexperience = yearsofexperience;
    this.identity = identity;
    this.languages = languages;
}
alert(bellyboy1.name);
This will alert the name in a more simple term and better if we have too many variables
 * 
 * 
var housekeeper = {name:"Ali", age: 19, gender: "Man", languages:["English","Arabic"]}
alert(housekeeper.name);
This will alert the name only in the variable
 * 
 *
 var a = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3",
    "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"];
var numberofdrums = document.querySelectorAll(".drum").length;
var key;
for (var i = 0; i < numberofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",getData);
}
function getData() {
    var HTMLButton = this.innerHTML;
    result(HTMLButton);
}
function result(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio(a[0]);
            tom1.play();
            break;

    case 'a':
    var tom2 = new Audio(a[1]);
            tom2.play();
    break;
            case 's':
    var tom3 = new Audio(a[2]);
            tom3.play();
    break;
            case 'd':
    var tom4 = new Audio(a[3]);
            tom4.play();
    break;
            case 'j':
            var snare = new Audio(a[4]);
            snare.play();
    break;
            case 'k':
            var crash = new Audio(a[5]);
            crash.play();
    break;
            case 'l':
            var kick = new Audio(a[6]);
            kick.play();
            break;

        default: break;
    }}
    This function will play every drum according to the button using switch statement
 * 
 * 
 * 
 var numberofdrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",getData);
}
function getData() {
    this.style.color = "white";
}
This will change the color of the text wo white
 * 
 var a = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3",
    "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"];
var b = 0;

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", getData);
}

function getData() {
    var mp3 = new Audio(a[b]);
    mp3.play();
    b++;
This function will play all songs together

 * 
 * 
document.querySelectorAll("button")[0].addEventListener("click", function () {
    var mp4 = new Audio('sounds/tom-1.mp3');
    mp4.play();
});
this will 1st drump in button w
 * 
function add(num1, num2) {
    return num1 + num2;
}
function substract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function calculator(num1, num2, data) {
    return  data(num1,num2);
}
alert(calculator(5,5,add));

This function will add a function to return instead of having to add each time.
this will make calculator easier to make with less codes required

 * 
 for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", getClick);
}
function getClick() {
    alert("Button Clicked");
}
this functionality will choose all buttons to be clicked

 */