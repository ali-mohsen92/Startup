const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");
const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
const Fruit = mongoose.model("Fruit", fruitsSchema);
const fruit = new Fruit({
    name: "Apple1",
    rating: 7,
    review: "Good Enough!"
});

//fruit.save();
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "Ali Mohsen",
    age: 29
});
//person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 8,
    review: "Very Good"
});
const banana = new Fruit({
    name: "banana",
    rating: 9,
    review: "Excellent"
});
const strawberry = new Fruit({
    name: "strawberry",
    rating: 10,
    review: "The Best"
});

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(error);
    }
    else {
        mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
        
    }
});

/* 
 * 
 * 
 * 
 * 
 mongoose.connection.close();
 This will close the Conenction
 * 
 * 
 Fruit.find(function (err, fruits) {
    if (err) {
        console.log(error);
    }
    else {
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});
This function will look for all fruits names
 * 
 * 
 Fruit.find(function (err,fruits) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fruits);
    }
});
 This will find all fruits data
 * 
 Fruit.insertMany([kiwi, banana, strawberry], function (err) {
    if (err) {
        console.log("Failed to add to table");
    }
    else {
        console.log("Successfully added to table");

    }
});
This function is used to add more than 1 variable to a table, and we can insert as many as we want
 * 
 * 
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");
const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});


const Fruit = mongoose.model("Fruit", fruitsSchema);
const fruit = new Fruit({
    name: "Apple1",
    rating: 7,
    review: "Good Enough!"
});
fruit.save();
These commands will save data to a database called fruitsDB.
 *
 *
 */