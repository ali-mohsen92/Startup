const bodyParser = require('body-parser');
const express = require('express');
const EJS = express();
const ejs = require('ejs');
var https = require('https');
var inputs = ["Buy Food", "Cook Food","Eat Food"];

EJS.use(bodyParser.urlencoded({ extended: true }));
EJS.set('view engine', 'ejs');
EJS.use(express.static("public"));

EJS.listen(3000, function () {
    console.log("listening to port 3000");
});

EJS.get("/", function (req, res) {
    var date = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    var days = date.toLocaleString("en-US", options);
    res.render('list', { whichtimeisit: days, newListItems: inputs });

});
EJS.post("/", function (req, res) {
    input = req.body.newItem;
    inputs.push(input);
    res.redirect("/");

});


/*
 * 
 
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
