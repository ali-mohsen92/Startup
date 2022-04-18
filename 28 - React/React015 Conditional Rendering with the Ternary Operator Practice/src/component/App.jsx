import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
    <Form userIsRegistered = {userIsRegistered} />
    </div>
  );
}

export default App;

/* 
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