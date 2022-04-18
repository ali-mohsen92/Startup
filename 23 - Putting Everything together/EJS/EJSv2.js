const bodyParser = require('body-parser');
const express = require('express');
const EJS = express();
const ejs = require('ejs');
var https = require('https');
var inputs = [];
var workinputs = [];
const days = require(__dirname + "/date.js")
const day = days.getDate();
const dayonly = days.getDay();
const mongoose = require('mongoose');
const _ = require('lodash');
mongoose.connect("mongodb://localhost:27017/todoList");
const itemSchema = new mongoose.Schema({
    name: String
});
const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "Welcome to your todolist!"
});
//item1.save();
const item2 = new Item({
    name: "Press the + button to add"
});
//item2.save();
const item3 = new Item({
    name: "Press the - button to delete"
});
//item3.save();

const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
    name: String,
    dataLists: [itemSchema]
});
const List = mongoose.model("List", listSchema);

EJS.use(bodyParser.urlencoded({ extended: true }));
EJS.set('view engine', 'ejs');
EJS.use(express.static("public"));

EJS.listen(3000, function () {
    console.log("listening to port 3000");
});

EJS.get("/", function (req, res) {
    Item.find({}, function (err, foundItems) {
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log("Could not add to DB");
                }
                else {
                    console.log("Sussecfully Added to DB");
                }
            });
            res.redirect("/");
        }
        else {
            res.render('listv2', { listTitle: "Today", newListItems: foundItems });
        }
    });

    EJS.get("/:postName", function (req, res) {
        const postName = _.capitalize(req.params.postName);
        List.findOne({ name: postName }, function (err, founditem) {
            if (!err) {
                if (!founditem) {
                    const list = new List({
                        name: postName,
                        dataLists: defaultItems
                    });
                    list.save();
                    res.redirect("/" + postName);
                }

                else {
                    res.render('listv2', { listTitle: founditem.name, newListItems: founditem.dataLists });
                }
            }
        });

    });
   

    EJS.post("/", function (req, res) {
        var itemName = req.body.newItem;
        const listName = req.body.list;
        const item = new Item({
            name: itemName
        });
        if (listName === "Today") {
            item.save();
            res.redirect("/");
        }
        else {
            List.findOne({ name: listName }, function (err, foundname) {
                foundname.dataLists.push(item);
                foundname.save();
                res.redirect("/" + listName);
            });

        }

    });


});

EJS.post("/delete", function (req, res) {
    const deletecheck = req.body.checkbox;
    const listNames = req.body.listName;
    if (listNames === "Today") {
        Item.findByIdAndDelete(deletecheck, function (err) {
            if (!err) {
                console.log("Successfully Deleted");
            }
        });

        res.redirect("/");

    }
    else {
        List.findOneAndUpdate({ name: listNames }, { $pull: { dataLists: { _id: deletecheck } } }, function (err, founditem) {
            if (!err) {
                console.log(listNames);
                res.redirect("/" + listNames);
            }
        });
    }
});

EJS.get("/about", function (req, res) {
    res.render('about');

});
/*
 if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log("Could not add to DB");
                }
                else {
                    console.log("Sussecfully Added to DB");
                }
            });
        }
        else {
            res.render('listv2', { listTitle: "Today", newListItems: foundItems });
        }
    });
    This function is used so  that if there is no data in table, new data will be added, otherwise it will skip it

 * 
 * 
 * 
     Item.find({}, function (err, foundItems) {
        if (err) {
            console.log("Error");
        }
        else {
            res.render('listv2', { listTitle: "Today", newListItems: foundItems });
        }
    });
This function uses the find method to find all data inside table and  display item
 * 
 * 
 Item.insertMany(defaultItems, function (err) {
    if (err) {
        console.log("Could not add to DB");
    }
    else {
        console.log("Sussecfully Added to DB");
    }
});
This function will instert all data inside table from array
 * 
 * 
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
