const { request } = require("express");

const express = require('express');
const calculator = express();
const bodyParser = require('body-parser');

calculator.use(bodyParser.urlencoded({ extends: true }));

calculator.listen(3000, function () {
    console.log("Listening at port 3000");
});

calculator.get("/calculator", function (req, res) {
    res.sendFile(__dirname + "/calculator.html");
});
calculator.post("/calculator", function (req,res) {
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var c = a + b;
    res.send("The sum of both Numbers is " + c);
});
calculator.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});
calculator.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.Weight);
    var height = parseFloat(req.body.Height);
    var BMI = weight / (height*height);
    res.send("The BMI is " + BMI);
});

















////const express = require('express');
////const bodyparser = require('body-parser');
////const calculator = express();

////calculator.use(bodyparser.urlencoded({ extends: true }));

////calculator.listen(3000, function () {
////    console.log("Listening at port 3000");
////});

////calculator.get("/", function (req, res) {
////    res.sendFile(__dirname + "/calculator.html")
////});
////calculator.post("/", function (req, res) {
////    var a = Number(req.body.num1);
////    var b = Number(req.body.num2);
////    var c = a + b;
////    res.send("The answer is " + c);
////});
////calculator.get("/bmicalculator", function (req, res) {
////    res.sendFile(__dirname + "/bmicalculator.html");
////});

////calculator.post("/bmicalculator", function (req, res) {
////    var weight = parseFloat(req.body.Weight);
////    var height = parseFloat(req.body.Height);
////    var bmi = weight / (height * height);
////    res.send("The BMI is " + bmi);
////});




/* 
 * 
 calculator.post("/", function (req, res) {
    res.send("Thanks");
});
this if for post method in html to activate in form in calculator.html
 * 
 * 
 calculator.get("/", function (req, res) {
res.sendFile(__dirname + "/calculator.html")
});
This command will connect the file to calculator.html in the directory using __dirname
 * 
 node_modules\.bin\nodemon.cmd
 nodemon will auto refresh webpage and synchronize with your typing and it is located in the same folder of 
 your folder in node_modules\.bin\nodemon.cmd
 * 
 app.get("/contact", function (req, res) {
    res.send("Contact me at abc@gmail.com");
});
app.get("/about", function (req, res) {
    res.send("My name is Ali Mohsen");
});
This will add the conact location as localhost:3000/contact and about location as localhost:3000/about
 * 
 * 
 const express = require('express');
const app = express();
app.listen(3000, function () {
    console.log("listening on port 3000");
})
app.get("/", function (req, res) {
    res.send("<h1>Port 3000 working</h1>");
});
app.get will send information to the localhost:3000, req is request and res is respond, res.send will send the data.


 * 
 * 
 * 
 * const express = require('express');
const app = express();
app.listen(3000, function () {
console.log("listening on port 3000");
})
this function is for listening localhost:3000 using express function

express, nodemon and body-parser are installed
body-parser is used to communicate with html body functions
nodemon is used to auto refresh and synchronize
express is used to function as a server and communicate as localhost
*/