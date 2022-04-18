import React from "react";
import Login from "./Login";
var loggedincondition = false;
const date = new Date();
const time = date.getHours();
function App() {
  return (
    <div className="container">
    {loggedincondition === true ?  (<h1>Hello</h1>) : <Login />}
    </div>
  );
}

/*
{loggedincondition === false &&  <h1>Hello</h1>}
this will check if true and will continue with the statement
it checks if false and if it is, it continues to the and statement
but if not for example:
 {loggedincondition === true &&  <h1>Hello</h1>}
 it will stop the statement right after the 1st statement was false



______________________________________________________
{loggedincondition === true ?  (<h1>Hello</h1>) : null}
this is an if statement using ternary operator, if true it will
display hello, else nothing

___________________________________________________
loggedincondition === true ?  (<h1>Hello</h1>) : <Login />
this can be used as an if statement and would work

*/

export default App;
