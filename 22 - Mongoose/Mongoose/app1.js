const mongoose = require('mongoose');
const number = require('mongoose/lib/cast/number');
const error = require('mongoose/lib/error');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitsSchema = new mongoose.Schema({
    name: {type:String,required:[true,"You Must add a name"]},
    rating: {type:Number,min:1,max:10},
    review: String
});
const Fruit = mongoose.model("Fruit", fruitsSchema);
const pineapple = new Fruit({
    name: "pineapple",
    rating: 7.5,
    review: "Good Enough!"
});

//pineapple.save();

const Mango = new Fruit({
    name: "Mango",
    rating: 8.5,
    review: "Very Good!"
});

//Mango.save();
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitsSchema
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "Ali Mohsen",
    age: 29
});
//person.save();
const person1 = new Person({
    name: "Amy",
    age: 28,
    favouriteFruit: pineapple
});
//person1.save();

Person.updateOne({ name: "Ali Mohsen" }, { favouriteFruit: Mango }, function (err) {
    if (err) {
        console.log(error);
    }
    else {
        console.log("Susseccfully Update Favorite Fruit");
    }
});

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



/* 
 * 
 * 
 const Mango = new Fruit({
    name: "Mango",
    rating: 8.5,
    review: "Very Good!"
});

Mango.save();

 Person.updateOne({ name: "Ali Mohsen" }, { favouriteFruit: Mango }, function (err) {
    if (err) {
        console.log(error);
    }
    else {
        console.log("Susseccfully Update Favorite Fruit");
    }
});
This will update FavoritFruit and set it inside data with the name of Ali Mohsen
 * 
 * 
 const pineapple = new Fruit({
    name: "pineapple",
    rating: 7.5,
    review: "Good Enough!"
});
pineapple.save();
 * 
 const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitsSchema
});
const person1 = new Person({
    name: "Amy",
    age: 28,
    favouriteFruit: pineapple
});
person1.save();

This function will add relations between people and fruits


const person1 = new Person({
    name: "Amy",
    age: 28,
    favouriteFruit: pineapple
});
person1.save();
this function will add pinapple data inside favoriteFruit

 * 
 * 
 * 
 Person.deleteMany({ name: "Ali Mohsen" }, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("All names of Ali Mohsen deleted")
    }
});
This will delete all names related to Ali Mohsen
 * 
 * 
 * 
 Fruit.deleteOne({ _id: "61dee4097d32c92ec3dfec7a" }, function (err) {
    if (err) {
        console.log(error);
    }
    else {
        console.log("Susseccfully Deleted");
    }
});
This function will delete depending on the id, we can also select the name
 * 
 * 
 * 
 * 
 Fruit.updateOne({ _id: "61dee4097d32c92ec3dfec7a" }, { name: "Peach" }, function (err) {
    if (err) {
        console.log(error);
    }
    else {
        console.log("Updated Successfully");
    }
});
this function will update depending on the id 
 * 
 * 
 * 
 const fruitsSchema = new mongoose.Schema({
    name: {type:String,required:[true,"You Must add a name"]},
    rating: {type:Number,min:1,max:10},
    review: String
});
This function specifies that name is required and if not inputted it wont be added to database
 * 
 * 
 const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: {type:Number,min:1,max:10},
    review: String
});
This function spicifies the minimum and maximum rating allowed so if we try to add a rating not in the min and max
it wont be added
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