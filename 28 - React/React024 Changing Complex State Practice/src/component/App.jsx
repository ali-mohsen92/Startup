import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  
function setData(event){
const {value, name} = event.target;
setContact((prevData) => {
if(name === "fName"){
  return ({fName: value, lName: prevData.lName, email: prevData.email});

}
if(name === "lName"){
  return ({fName: prevData.fName, lName: value, email: prevData.email});
}
if(name === "email"){
  return ({fName: prevData.fName, lName: prevData.lName, email: value});
}
});
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={setData} name="fName" value={contact.fName} placeholder="First Name" />
        <input onChange={setData} name="lName" value={contact.lName} placeholder="Last Name" />
        <input onChange={setData} name="email" value={contact.email} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events


/* 
import React, {useState} from "react";
function App() {

const [FullName, setFullName] = useState({fName: "", lName: ""});

function setfullNames(event){
const {value, name} = event.target;
setFullName((prevValue) => {
if(name === "fName"){
  return ({fName: value, lName: prevValue.lName});
}
if(name === "lName"){
  return ({fName: prevValue.fName, lName: value}); }
});
}
  return (
    <div className="container">
      <h1>Hello {FullName.fName} {FullName.lName}</h1>
      <form>
        <input name="fName" onChange={setfullNames} value={FullName.fName} placeholder="First Name" />
        <input name="lName" onChange={setfullNames} value={FullName.lName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
This will merge 1st name and last name in the same object using
complex state



___________________________________________________
import React, {useState} from "react";
function App() {

const [fName, setFirstName] = useState("");
const [lName, setLastName] = useState("");

function setfName(event){
  setFirstName(event.target.value);
}
function setlName(event){
  setLastName(event.target.value);
}

  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input name="fName" onChange={setfName} value={fName} placeholder="First Name" />
        <input name="lName" onChange={setlName}value={lName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
This will add first name and last name in hello but separate
*/