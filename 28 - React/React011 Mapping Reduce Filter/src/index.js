import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import emojipedia from "./emojipedia";

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

ReactDOM.render(<App />, document.getElementById("root"));
const emojiMeaning = emojipedia.map(function (params) {
var data = params.meaning;
return (data.substring(0,100)); 
});
console.log(emojiMeaning);


/* 


__________________________________________________________________
const numbers = [2,56,8,22,3];

const newnumbers = numbers.findIndex(function (params) {
    return params > 10;
})
console.log(newnumbers);
This will find the index of the params greater than 10 which is 1

____________________________________________________________
const numbers = [2,56,8,22,3];

const newnumbers = numbers.find(function (params) {
    return params > 10;
})
console.log(newnumbers);
This function will only look for the 1st param greater than 10 and stop


__________________________________________________
const numbers = [2,56,8,22,3];

const newnumbers = numbers.map(function (params) {
    return params*2;
})
console.log(newnumbers);
This will double the Array

______________________________________________________
const numbers = [2,56,8,22,3];

const newnumbers = numbers.reduce(function (Accumulate, params) {
    console.log(Accumulate);
    console.log(params);
    return Accumulate + params;
})
console.log(newnumbers);
This will return total values together
_________________________________________________________
const numbers = [2,56,8,22,3];

const newnumbers = numbers.filter(function (params) {
    return params > 10;
});
console.log(newnumbers);
This will return params greater than 10


const numbers = [2,56,8,22,3];

numbers.map(function (params) {
   return params; 
});
console.log(numbers);
This will return all numbers
*/
