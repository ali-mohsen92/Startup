const bodyParser = require('body-parser');
const express = require('express');
const EJS = express();
const ejs = require('ejs');
var https = require('https');
var inputs = ["Buy Food", "Cook Food", "Eat Food"];
var workinputs = [];
const days = require(__dirname + "/date.js")
const day = days.getDate();
const dayonly = days.getDay();

EJS.use(bodyParser.urlencoded({ extended: true }));
EJS.set('view engine', 'ejs');
EJS.use(express.static("public"));

EJS.listen(3001, function () {
    console.log("listening to port 3001");
});

EJS.get("/", function (req, res) {
    res.render('listv2', { listTitle: dayonly, newListItems: inputs });


});
EJS.get("/work", function (req, res) {
    res.render('listv2', { listTitle: "Work List", newListItems: workinputs });

});
EJS.get("/about", function (req, res) {
    res.render('about');

});
EJS.post("/", function (req, res) {
    var input = req.body.newItem;
    if (req.body.list === "Work List") {
        workinputs.push(input);
        res.redirect("/work");
    }
    else {
        inputs.push(input);
        res.redirect("/");
    }
});



/*
 const day = days.getDate();
const dayonly = days.getDay();
module.export.getDate in the directory will call that module only, this is useful to use many function in a directory
module.export.getDay in the directory will call that module only, this is useful to use many function in a directory

  * 
 * 
const days = require(__dirname + "/date.js")
const day = days();
this will look for directory date.js
and day = days(); will use module.export in date.js to activate the value, function needs a return value

  *
 * 
    var date = new Date();
    var currentday = date.getDay();
    var day = "";
    switch (currentday-1) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error " + currentday);
    }
    res.render("list", {whichtimeisit:day});
});
This function with switch statement will determine the day and give the result in list.ejs
 * 
    
    EJS.get("/", function (req, res) {
    var date = new Date();
    var currentday = date.getDay();
    var day = "";
    if (currentday === 6 || currentday === 0) {
        day = "Weekend!";
    }
    else {
        day = "Weekday!";
    }

    res.render('list', {whichtimeisit:day});
});

res.render will connect and edit list.ejs, whichtimeisit is an ejs variable that can be modified depending on the text
we want



    res.write("");
    this function will let us write more than 1 command

     var date = new Date();
    if (date.getDay() === 6 || date.getDay() === 0) {
        res.send("This is the weekends");
    }
    else {
        res.send("This is not the weekends");
    }
    This will check the date today and send the result

     var currentday = date.getDay();
    This can shorten the ammount needed to written

 */
