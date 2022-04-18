import React from "react";
import reactDom from "react-dom";
const rootElement = document.getElementById("root");
reactDom.render(<div>
  <h1>Hello World!</h1>
  <p>This is a paragraph</p></div>,rootElement);




/* 
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