import React from "react";
import animals, {useAnimals} from "./data";


const [cat ,dog] = animals;
const [animal,makeSound] = useAnimals(cat)
console.log(animal);
makeSound();

/* 
const [animal,makeSound] = useAnimals(cat)
console.log(animal);
makeSound();
animal will take animal.name useAnimals(cat) 
and makeSound will take function in useAnimals(cat)



const [cat ,dog] = animals;
console.log(useAnimals(cat));
This will use function inside data using
import animals, {useAnimals} from "./data";
useAnimals(cat) will give data to function


const {name, sound: catSound, FeedingandWatering} = cat;
const {feed, water}= FeedingandWatering;
console.log(water);
this will give water result inside object
we can also add it together with original const like this
const {name, sound: catSound, FeedingandWatering:{feed,water}} = cat;
console.log(water);



const {name, sound: catSound, FeedingandWatering} = cat;
console.log(FeedingandWatering);
this will show feeding water objects

const {name="Fluffy", sound: catSound} = cat;
console.log(name);
This will give the name fluffy if name wasnt added in the array of data



const {name: catName, sound: catSound} = cat;
console.log(catName);
this will replace name with catName so name cant be used anymore


const {name="Fluffy", sound} = cat;
console.log(name);
this will give cat name fluffy if the name isnt added 


const {name, sound} = cat;
console.log(name);
this will take object names and sound accordingly

const [cat,dog] = animals;
console.log(cat.sound);
this will give cat sound without using complicated arrays
*/
// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
