const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const postArrays = [];
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.listen(3000, function() {
  console.log("Server started on port 3000");
});

app.get("/posts/:postName", function (req, res) {
    const requestedTitle = req.params.postName;
    var a;
    postArrays.forEach(function (postArray) {
        if (_.lowerCase(postArray.title) === _.lowerCase(requestedTitle)) {
                res.render("post", { postTitle: postArray.title, postContent: postArray.content });
                a = "Match Found!";
        }
    });
    if (a !== "Match Found!") {
        console.log("Match not Found!");
    }

});

app.get("/", function (req, res) {
        res.render("home", { homeStartingContent: homeStartingContent,Arrays:postArrays});
    
    });
app.get("/about", function (req, res) {
    res.render("about", { aboutContent: aboutContent });
});
app.get("/contact", function (req, res) {
    res.render("contact", { contactContent: contactContent });
});
app.get("/compose", function (req, res) {
    res.render("Compose");
});
app.post("/compose", function (req, res) {
    var post = { title: req.body.postTtitle, content: req.body.postBody };
    postArrays.push(post);
    res.redirect("/");

});

/*
 * 
const _ = require('lodash');
_.lowerCase() will remove all obstactles such as spaces and uppercase letters
so that we can check if strings match without the spaces and upperrcase letters or dashes
 *
 * 
 * 
 app.get("/posts/:postName", function (req, res) {
    console.log(req.params.topic);
});
This is known as routing parameter if you go to http://localhost:3000/posts/data  it will log what was written as data
 * 
 * 
 * 
<%- include("partials/header"); -%>

<h1>Home</h1>
<p><%= homeStartingContent %></p>
    <%  for (var i = 0; i<Array.length; i++){ %>
    <h1><%= Array[i].title %></h1>
    <p><%= Array[i].content %></p>
    <% } %>


    <%- include("partials/footer"); -%>

    this is alternative way but forEach() statement is more effective, it reduces the ammount needed
    to be written


 * 
 * 
var numbersArray = [0, 1, 2, 3];
numbersArray.forEach(function (number) {
    console.log(number);
});
this will console log all data inside array
*/