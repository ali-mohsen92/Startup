/*
 document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
attributes shows what is inside the tag a, getAttribute finds the data inside href which was written inside

document.querySelector("a").setAttribute("href", "https://www.bing.com");
setAttribute change the command inside href
 * 
 document.querySelector("h1").textContent = "Good Bye"
document.querySelector("h1").innerHTML = "<em>Good Bye</em>"
Difference between innerHTML and textContent is we can add code inside innerHTML such as <em> or <strong>

 * 
 * 
 document.querySelectorAll("ul li a")[0].classList.add("huge");
adding class to a certain array also possible
 * 
 document.querySelector("h1").classList.add("huge");
This will add the font size and color from styles.css
 * 
 document.querySelector("button").classList.add("invisible");
we can add a class from javascript using classlist
 * 
document.querySelector("button").classList.remove("invisible");
this will remove the classlist associated with invisible


document.querySelector("button").classList.toggle("invisible");
this will make it invisible if applied but then removed if applied again
 *
 * 
 document.querySelector("button").style.backgroundColor = "yellow";
this will change the background color of a button
 * 
 * 
 document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.padding = "10%";
this will change the style using javascript
 * 
 document.querySelectorAll("ul li a")[0].style.color = "red";
this will change the color of a text to red
document.querySelectorAll("ul li")[0].style.color = "red";
this will change the ul color
 * 
 document.querySelectorAll("ul");
finds 1st data available in ul
 
 document.querySelectorAll("ul");
finds all data like an array
 * 
document.getElementById("title").innerHTML = "TtitleChanged";
This changes the element depending on id
document.getElementsByTagName("li");
This will find lists by array mode and cant change color in array because we must pick item in array
document.getElementsByTagName("li")[2].style.color = "red";
This will change color of 3rd row in array
document.getElementsByClassName("class1")[1].style.color = "red";
getElementsByClassName also work as array

document.querySelector("input").click();
This will click the input selector on its own

 * 
 * 
var heading = document.lastElementChild.lastElementChild.firstElementChild;
heading.style.color = "red";
This will change the element child color of h1


alert("Warning");
var Upload = document.firstElementChild.firstElementChild.lastElementChild;
Upload.innerHTML = "TitleChanged";
This command will launch to title and change title
 * 
 * 
 document.querySelector("h1").innerHTML = "Good Bye";
this command will find the h1 and change the name of it
 
 var array = [];
function fibonacciGenerator(n) {
    var b;
    for (var i = 0; i < n; i++) {
        if (i <= 1) {
         array.push(i);
        }
        else {
            b = array[i - 1] + array[i - 2];
            array.push(b);

        }
    }
    return array;
}
console.log(fibonacciGenerator(5));
This is a fibonacciGenerator if adds the values from the last 2 together [0,1,1,2,3]

 * 
 * 
 * 
var myData = [];
var n = 1;
function data() {
    for (n = 1; n <= 100; n++) {
        if (n % 3 === 0 && n % 5 === 0) {
            myData.push("FizzBuzz");
        }
        else if (n % 3 === 0) {
            myData.push("Fizz");
        }
        else if (n % 5 === 0) {
            myData.push("Buzz");
        }
        else {
            myData.push(n);
        }
    }
    console.log(myData);
}
data();
This uses for loop instead of while statement

 * 
var myData = [];
var n = 100;
function data() {
    while (n > 0) {
        if (n > 1 && n != 2) {
            console.log("We have " + n + " bottles of beer take 1 down and " + (n - 1) + " bottles left on the wall \n");
            n--;
        }
        else if (n === 2) {
            console.log("We have " + n + " bottles of beer take 1 down and " + (n - 1) + " bottle left on the wall \n");
            n--;

        }
        else if (n === 1) {
            console.log("We have " + n + " bottle of beer take 1 down and no more bottles on the wall \n");
            n--;

        }


    }
    return console.log("No More bottles \n");
}
data();

This will decrease the value every time n>0
 * 
 * 
 var myData = [];
var n = 1;
function data() {
    while (n <= 100) {
        if (n % 3 === 0 && n % 5 === 0) {
            myData.push("FizzBuzz");
        }
        else if (n % 3 === 0) {
            myData.push("Fizz");
        }
        else if (n % 5 === 0) {
            myData.push("Buzz");
        }
        else {
            myData.push(n);
        }
        n++;
    }
    console.log(myData);
}
data();
This will loop till n>100
 
 * 
var myData = ["Data0", "Data1", "Data2", "Data3", "Data4","Data5"];
var n=1;
function data() {
    var datanumber = myData.length;
    var randomdata = Math.floor(Math.random() * datanumber);
    var whoispaying = myData[randomdata];
    return whoispaying + " will pay";
}
alert(data());
This functionality give a random number in array on who will pay
 

 


  * 
var myData = [];
var n=1;
function data() {
    if (n % 3 === 0 && n % 5 === 0) {
        myData.push("FizzBuzz");
    }
    else if (n % 3 === 0) {
        myData.push("Fizz");
    }
    else if (n % 5 === 0) {
        myData.push("Buzz");
    }
    else {
        myData.push(n);
    }
    n++;
    console.log(myData);
}
data();
data();
data();
data();
data();
data();
data();
data();
data();
data();
data();
data();
data();
data();
data();
data();
Every time the comman data(); is written it adds a value to the array


  * 
var myData = [];
var n=1;
function data() {
    myData.push(n)
    n++;
    console.log(myData);
}
data();
data();
This will push more data into array
  * 
  * 
var myData = ["Data0", "Data1", "Data2", "Data3", "Data4"];
myData.push("Data5");
myData.push("Data5"); will add a value at the end of the array
myData.pop(); will remove the value at the end of the array

var n = prompt("type to check if data is available");
var myData = ["Data0", "Data1", "Data2", "Data3", "Data4"];
if (myData.includes(n) === true) {
    alert(n + " exists in array");
}
else {
    alert(n + " doesn't exists in array");
}
myData.includes(); will show if name exists in array or not


  * 
var myData = ["Data0", "Data1", "Data2", "Data3", "Data4"];
alert(myData[1]);
this will retrieve Data1 in array
alert(myData);
this will retrieve all data in array

var n = prompt("what year is it?");
if ((n%4===0 && n%100!==0) || (n%4===0 && n%100===0 && n%400===0)) {
    alert("This is a leap year");
}
else {
    alert("This is not a leap year");
}
This shows if its a leap year or not

var n = Math.random();
n = (n * 100) + 1;
if (n>=80) {
    alert("Your compatibility level is High at " + Math.floor(n) + "%");

}
else if (n<=50) {
    alert("Your compatibility level is low at " + Math.floor(n) + "%");

}
else if(n>50 && n<80){
    alert("Your compatibility level is average at " + Math.floor(n) + "%");
}
This if statement and else if statem shows each result and value depending on the number 

  * 
 var statement = prompt("true or false?");

if (statement === true) {
    alert("The Statement is true");
}
else {
    alert("The statement is false");
}
if statement shows if its true or false to give the result, if false it goes to else statement
if(===), if (!==), if(>), if(>=), if (<=), Difference between (==) and (===) is that (==) will
give a true result between string and number such as 1="1"

var a = prompt("type 1st name: ");
var b = prompt("type 2nd name: ");
var n = Math.random();
n = (n * 100) + 1;
alert("Your compatibility level is " + Math.floor(n) + "%");
This is a compatibility test

/*


var n = Math.random();
n = (n * 6) + 1;
alert("Dice roll is " + Math.floor(n));
This will roll a dice between 1 and 6



var n = Math.random();
alert("Random number is " + n);
This will give a random number between 0 and 1

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
 
 
 
 
 
 

 
 