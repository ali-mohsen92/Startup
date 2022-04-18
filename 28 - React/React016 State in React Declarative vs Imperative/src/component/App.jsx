import React from "react";
import Form from "./Form";

var linethrough = false;


function ClickDeclarative(){
  return document.getElementById("root").style.textDecoration = "line-through";
}
function ClickDeclarative1(){
  return document.getElementById("root").style.textDecoration = null;
}

function ClickImperatives(){
return linethrough = true;
}
function ClickImperatives1(){
  return linethrough = false;
  }
function App() {
  return (<div>
    <p style={linethrough ? {textDecoration:  "line-through"} : null}>Imperative and derivative</p>
    <button onClick={ClickDeclarative}>Click me to line through text</button>
    <button onClick={ClickDeclarative1}>Click me to remove line through</button>
    <button onClick={ClickImperatives}>Click me to add line through text but wont work</button>
    <button onClick={ClickImperatives1}>Click me to remove line through text but wont work</button>
  </div>);
}

export default App;

/* 
declarative lets style={colorfunction()}
imperatives lets style={document.getElementById}

imperatives work to change style in functions using react when using button
function but declaratives dont work

function App() {
  return (
    <div className="container">
      {userIsRegistered===true ? 
      <Form type={"hidden"} placeholder={null} Register={"Login"}/> 
      : <Form type={"password"} placeholder={"Confirm Password"} Register={"Register"}/>}
    </div>
  );
}

export default App;
This is one way to do it
*/