const express = require('express');

const app = express();
app.listen(3000, function () {
    console.log("listening on port 3000");
})
app.get("/", function (req, res) {
    res.send("<h1>Port 3000 working</h1>");
});
app.get("/contact", function (req, res) {
    res.send("Contact me at abc@gmail.com");
});
app.get("/about", function (req, res) {
    res.send("My name is Ali Mohsen");
});
app.get("/hobbies", function (req, res) {
    res.send("Ping Pong");
});

/* 
 * 
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

express and nodemon are installed
*/