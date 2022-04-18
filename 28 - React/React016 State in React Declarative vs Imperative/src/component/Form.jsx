import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userIsRegistered===false && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.userIsRegistered=== true ?
    "Login" : "Register"  
    }</button>
    </form>
  );
}

export default Form;

/* 
import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type={props.type} placeholder={props.placeholder} />
      <button type="submit">{props.Register}</button>
    </form>
  );
}

export default Form;
This is one way to do it
*/
