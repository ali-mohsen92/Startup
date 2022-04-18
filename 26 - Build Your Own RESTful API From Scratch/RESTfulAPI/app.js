const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.connect("mongodb://localhost:27017/wikiDB");

const AritcleSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Article = mongoose.model("Article", AritcleSchema);
app.use(bodyparser.urlencoded({ extended: true }));


app.route("/articles")

    .get(function (req, res) {
    Article.find({}, function (err, founditems) {
        if (!err) {
            res.send(founditems);
        }
        else {
            console.log("Error");
        }
    });
    })

    .post(function (req, res) {
    const title = req.body.title;
    const content = req.body.content;
    const newarticle = new Article({
        title: title,
        content: content
    });
    newarticle.save(function (err) {
        if (!err) {
            res.send("Successfully added");
        }
        else {
            console.log(err);
        }
    });
    })

    .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
        if (!err) {
            res.send("All items deleted");
        }
        else {
            res.send("Error");
        }
    });
});

app.route("/articles/:titles")
    .get(function (req, res) {
        Article.findOne({ title: req.params.titles }, function (err, foundtitle) {
            if (!err) {
                res.send(foundtitle);
            }
            else {
                res.send("Data not Found");
            }
        });
    })
    .put(function (req, res) {
        const titleparams = req.params.titles;
        const titlebody = req.body.title;
        const contentbody = req.body.content;
        Article.findOneAndUpdate(
            { title: titleparams },
            { title: titlebody, content: contentbody },
            { overwrite: true },
            function (err) {
                if (!err) {
                    res.send("Successfully updated");
                }
                else {
                    console.log(titlebody);
                    console.log(contentbody);
                    console.log(titleparams);
                    res.send(err);
                }
            }
        );
    })
    .patch(function (req, res) {
        const titleparams = req.params.titles;
        Article.findOneAndUpdate(
            { title: titleparams },
            { $set: req.body },
            function (err) {
                if (!err) {
                    res.send("Updated");
                }
                else {
                    res.send("Error");

                }
            }
        );
    })
    .delete(function (req, res) {
        const titleparams = req.params.titles;
        Article.deleteOne({ title: titleparams }, function (err) {
            if (!err) {
                res.send("Deleted");
            }
            else {
                res.send("Not Deleted");
            } 
        });
    });
app.listen(3000, function () {
    console.log("listening to port 3000");
});

/*
     .put(function (req, res) {
        Article.update(
            { title: req.params.title },
            { title: req.body.title, content: req.body.content },
            { overwrite: true },
            function (err) {
                if (!err) {
                    res.send("Successfully updated");
                }
                else {
                    res.send("Error");
                }
            }
        );
    });
    This function will completely update the title and content
 * 
 * 
 * 
 app.route("/articles/:title")
    .get(function (req, res) {
        Article.findOne({ title: req.params.title }, function (err, foundtitle) {
            if (!err) {
                res.send(foundtitle);
            }
            else {
                res.send("Data not Found");
            }
        });
    });
    This function is used to find specific data inside articles using params
 * 
 * 
 app.route("articles")

    .get(function (req, res) {
    Article.find({}, function (err, founditems) {
        if (!err) {
            res.send(founditems);
        }
        else {
            console.log("Error");
        }
    });
    })

    .post(function (req, res) {
    const title = req.body.title;
    const content = req.body.content;
    const newarticle = new Article({
        title: title,
        content: content
    });
    newarticle.save(function (err) {
        if (!err) {
            res.send("Successfully added");
        }
        else {
            console.log(err);
        }
    });
    })

    .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
        if (!err) {
            res.send("All items deleted");
        }
        else {
            res.send("Error");
        }
    });
});
app.route(), this function lets us merge get post delete who have similar articles
 * 
 * 
 * 
 app.delete("/articles", function (req, res) {
    Article.deleteMany({}, function (err) {
        if (!err) {
            res.send("All items deleted");
        }
        else {
            res.send("Error");
        }
    });
});
This will delete all data in articles using Postman
 * 
 * 
 app.post("/articles", function (req, res) {
    const title = req.body.title;
    const content = req.body.content;
    const newarticle = new Article({
        title: title,
        content: content
    });
    newarticle.save(function (err){
        if (!err) {
            res.send("Successfully added");
        }
        else {
            console.log(err);
        }
    });
});
This function using Postman we can add new posts 
 * 
 * 
 * 
 app.get("/articles", function (req, res) {
    Article.find({}, function (err, founditems) {
        if (!err) {
            res.send(founditems);
        }
        else {
            console.log("Error");
        }
    });
});
This function will find all related data to articles collection
 * 
 * 
 * 
 * */