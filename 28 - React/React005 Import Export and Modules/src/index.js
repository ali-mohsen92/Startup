import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import {add,multiply,substract,divide} from "./components/calculator";
const rootelement = document.getElementById("root");

ReactDom.render(<div><ul>
  <li>{add(1,2)}</li>
  <li>{multiply(2,3)}</li>
  <li>{substract(7,2)}</li>
  <li>{divide(5,2)}</li>
  </ul></div>,rootelement);

/*
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import calculator, {add,multiply,substract,divide} from "./components/calculator";
const rootelement = document.getElementById("root");

ReactDom.render(<div><ul>
  <li>{add(1,2)}</li>
  <li>{multiply(2,3)}</li>
  <li>{substract(7,2)}</li>
  <li>{divide(5,2)}</li>
  </ul></div>,rootelement);

  This will import calculator to and add all functions in there
  we can also user "import * as calculator" and replace add with calculator.add instead
  


_________________________________________________________________________
import * as datapi from "./components/Math";
const rootelement = document.getElementById("root");

ReactDom.render(<div><ul>
  <li>{datapi.default}</li>
  <li>{datapi.doublePI()}</li>
  <li>{datapi.triplePI()}</li>
  </ul></div>,rootelement);
  we can import all constants and use datapi.default datapi.doublePI() and etc
  it gives the same result



_____________________________________________________
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import datapi, { doublePI, triplePI } from "./components/Math";
const rootelement = document.getElementById("root");

ReactDom.render(<div><ul>
  <li>{datapi}</li>
  <li>{doublePI()}</li>
  <li>{triplePI()}</li>
  </ul></div>,rootelement);

import datapi, { doublePI, triplePI } from "./components/Math";
This is what is needed to import more than one function
________________________________________________________________
ReactDom.render(<div><App /></div>,rootelement);
to make it cleaner we can import from App only and inside the app we
add a return function and import heading and lists so we get less codes and
the code is cleaner





_____________________________________________________
import Heading from "./Heading";


function Heading(){
  return <h1>My Favorite Foods</h1>
}
<Heading> </Heading> or   <Heading /> will return h1 function



______________________________________________________________
import React from "react";
import ReactDom from "react-dom";
const date = new Date();
const time = date.getHours();
const rootelement = document.getElementById("root");
const data = {color: "red"};
var Text = "Hi";
if(time<12){
  data.color = "red";
  Text = "Good Morning";
}
else if(time<18){
  data.color = "green";
  Text = "Good Afternoon";
}
else{
  data.color = "blue";
  Text = "Good Evening";
}
ReactDom.render(<h1 style={data} className="heading">{Text + " The time is " + time}</h1>,rootelement)
This will change color depending on time

______________________________
import React from "react";
import reactDom from "react-dom";
var rootelement = document.getElementById("root");
const fname = "Ali";
const lname= "Mohsen";
const number = Math.floor(Math.random()*10)+1;
const year = new Date().getFullYear();
const image = "https://picsum.photos/id/237/200/300";
const redcolor =  {color: "red",fontSize:"20px", border:"1px solid black"}
redcolor.color= "blue";
reactDom.render(<div>
<h1 className="heading" style={redcolor}>Color is not red</h1></div>,rootelement);
This is old data incase we need it

const redcolor =  {color: "red",fontSize:"20px", border:"1px solid black"}
redcolor.color= "blue";
reactDom.render(<div>
<h1 className="heading" style={redcolor}>Color is red</h1></div>,rootelement);
using const red color we can change style, we cant change style by simply
adding style= color:red, and if we add redcolor.color= "blue" it will 
overwrite color to red

    <img className="random-img" src={image + "?grayscale"}></img>
{image + "?grayscale"} will turn image to grayscale

const image = "https://picsum.photos/id/237/200/300";
reactDom.render(<div>
  <h1 className="heading">My Favorite Foods</h1>
  <ul>
    <img className="random-img" src={image + "?grayscale"} src={image}></img>
    <img className="random-img" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
    <img className="random-img" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" ></img>
  </ul>
</div>,rootelement);

to add image we can add const string to connect images


<h1 className="heading" contentEditable="true" spellCheck="false">My Favorite Foods</h1>
This checks if content can be edited
spellCheck="false" will not let it to spell check


<h1 className="heading">My Favorite Foods</h1>
reactDom uses classname instead of class

const fname = "Ali";
const lname= "Mohsen";
const number = Math.floor(Math.random()*10)+1;
const year = new Date().getFullYear();
reactDom.render(<div>
  <h1>Created by {fname + " " + lname} </h1>
  <p>Copyright {year}</p>
</div>,rootelement);
This is how we copyright a name

{name+ " " + lname} 
 <h1>Hello {fname} {lname}</h1>
we can add both of them or separetly {}

reactDom.render(<div>
  <h1>Hello {name}</h1>
  <p>your lucky number is {number}</p>
</div>,rootelement);
we can add multiple variables in reactDom.render
using {} we can also add an expression inside such as 
{Math.floor(Math.random()*10)+1}

reactDom.render(<h1>Hello {name}</h1>,rootelement);
using {} will let us add a variable or constant

import react from "react";
import reactDom from "react-dom";
var rootelement = document.getElementById("root");
reactDom.render(<div>
  <h1>My Favorite Foods</h1>
  <ul>
    <li>Bacon</li>
    <li>Noodles</li>
    <li>Stake</li>
  </ul>
</div>,rootelement);
This is used to add multiple structures such as lists

reactDom.render(<div>
  <h1>Hello World!</h1>
  <p>This is a paragraph</p></div>,rootElement);
  using div to add add more than 1 structure

reactDom.render(<h1>Hello World1!</h1>,rootElement);
This is used to render h1 in index.html


to install react type in the command: npx create-react-app my-app
cd my-app
npm start
this is the method to get started
*/