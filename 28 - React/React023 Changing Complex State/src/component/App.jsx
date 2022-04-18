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