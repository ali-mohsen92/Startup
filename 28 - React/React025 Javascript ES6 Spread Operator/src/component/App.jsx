import React, { useState } from "react";

function App() {


  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return ({...prevValue, [name]: value})
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

/* 
  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return ({...prevValue, [name]: value})
    });
  }
  by using spread operator, ...prevValue will push all names and [name] 
  is assigned in input function so we if name=fName the assigned value 
  will be put inside fName value, if name=lName the assigned value 
  will be put inside lName value, name must be in array such as this [name]
  


const Data = ["Data1","Data2","Data3"];
const Array = [...Data,"Array1","Array2","Array3"];
const Object1 = {data1: "data1", data2:"data2"}
const Object2 = {data3: "data3", data4:"data4",...Object1}
console.log(Array);
console.log(Object2);
This will push data in array using react spread operator and we can do
the same with object



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