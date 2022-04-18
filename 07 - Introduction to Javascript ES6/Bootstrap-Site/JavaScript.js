

/*
  * 
  * 
 var bmi1;
var weight;
var height;
var bmi = getbmi(bmi1, weight, height);

function getbmi(bmi1, weight, height) {
     weight = prompt("What is your weight?");
     height = prompt("What is your height?");
     bmi1 = (weight / (Math.pow(height,2)));
    return fullresult(bmi1,weight,height);
}
function fullresult(bmi1, weight, height) {
    alert("Your BMI is " + Math.round(bmi1));
    alert("Your Height is " + height);
    alert("Your Weight is " + weight);
}
This will show the BMI and Math.pow(value, number) the number is if you want it to be squared
  * 
 function getData(money) {
    alert("You have " + money + "$");
    var bottle = 1.5;
    var howmany = money / bottle;
    alert("you can buy " + Math.floor(howmany) + " bottles");
    return getChange(money, bottle);
}
var money;
var data = getData(money = prompt("how much money you have?"));
alert("Your change is " + data);

function getChange(getchange,change) {
    var change1 = getchange % change;
    return change1;
}
This can be used as a return statement to an alternative function which will return the original value
  * 
 function getData(money) {
    alert("You have " + money + "$");
    var bottle = 1.5;
    var howmany = money / bottle;
    alert("you can buy " + Math.floor(howmany) + " bottles");
    return money % bottle;
}
var money;
var change = getData(money = prompt("how much money you have?"));
alert("your change is "+ change);

The return function will return a value to the variable, and in return give a result

  
  function getData(money) {
    alert("You have " + money + "$");
    var bottle = 1.5;
    var howmany = money / bottle;
    alert("you can buy " + Math.floor(howmany) + " bottles");
}
var money;
getData(money = prompt("how much money you have?"));

  

  Math.floor() will give round result so no decimal points
 
 function getData(data) {
    alert("my number is " + data);
}
getData(2);
This will give the number inside the function
 
 console.log only shows to developer, but alert shows to user

 function getData() {
    alert("This is a function");
}
getData();

this function be used and launch when you use getData();

var dog = prompt("How old is your dog?");
var humanage = ((dog - 2) * 4) + 21;
alert("dog to human age is " + humanage);
alert(10%8) gives a total of 2 because this is what remains if divided
This will result age and sum

var name = prompt("what is your name?");
var firstLetter = name.slice(0, 1);
firstLetter = firstLetter.toUpperCase();
var theRest = name.slice(1,((name.length)));
theRest = theRest.toLowerCase();
alert("Your Name is " + firstLetter+theRest);
This will capitalize the 1st letter only
x++ will increase the value by 1, x-- will decrease the value by 1
x +=y, will give x = x +y;


var name = "Angela";
var uppercase = name.toUpperCase();
var lowercase = name.toLowerCase();
alert(uppercase);
alert(lowercase);
This will display uppercase to all letters and lowercase to all letters


var sentence = prompt("write your essay");
var limit = 30;
var sentences = sentence.slice(0, limit);
alert(sentences);
This will slice the sentence into 30 characters and wont show anymore
alert(prompt("write your essay").slice(0,30));
This command is a shorcut that will also slice into 30 characters


var name = "Mohsen";
alert(name.slice(0, 1));
this will slice the name from 0 and will stop at 1 so it will give the name M only
alert(name.slice(1, 4));
this will slice the name from 1 and will stop at 4; count starts from 0

var sentence = prompt("write your essay");
var NumberofSentences = sentence.length;
var limit = 140;
var result = limit - NumberofSentences;
alert("You have written " + NumberofSentences + " character, you have" + result + " characters left");
This will show the number of characters left
  * 
  * 
 var name = "Angela";
 alert("length of name is " + name.length);
 .length is used to count number of characters


 var a = 3;
 var b = 8;
 var c = a;
 a = b;
 b = c;
 alert("a is " + a);
 alert("b is " + b);
This will reverse a and b, a is 8, b is 3

var myName = prompt("What is my name?");
var yourName = prompt("What is your name?");
alert("my name is "  +myName + " your name is " + yourName);
This will give the name of the prompt

 var message = "Hello";
 var name = "Angela";
 alert(message + " " + name);
 this will merge the names together with space beween them


 alert("warning");
 alert(""); gives a popup on browser
 alert(typeof (23));
 alert(typeof ("Angela"));
 alert(typeof (true));
 alert(2 + 3);
 typeof will give a popup of the type of module
 prompt(""), this command will show an imput such as a question
 var yourName = prompt("What is your name?"); this will give yourname a
 variable answer
 variable cant start with a number and there cant be spaces between them
 and only $ and _ symbols allowed 
 
 
 */
 
 
 
 
 
 

 
 