import react from "react";
import reactDom from "react-dom";
var rootelement = document.getElementById("root");
const fname = "Ali";
const lname= "Mohsen";
const number = Math.floor(Math.random()*10)+1;
reactDom.render(<div>
  <h1>Hello {fname + " " + lname} </h1>
  <p>your lucky number is {number}</p>
</div>,rootelement);



/* 
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