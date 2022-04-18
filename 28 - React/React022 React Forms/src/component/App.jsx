import React, {useState} from "react";

function App() {
const [Name,setName] = useState("");
const [heading,setHeading] = useState("");

function setNameInput(event){
return(setName(event.target.value));

}

function Pressed(event){
  setHeading(Name);
  event.preventDefault();
}

  return (
      <form onSubmit={Pressed} className="container">
      <h1>Hello {heading} </h1>
      <input type="text" onChange={setNameInput} placeholder="What's your name?" />
      <button type="submit">Submit</button>
  </form>
  );
}

export default App;

/* 
function App() {
const [Name,setName] = useState("");
const [heading,setHeading] = useState("");

function setNameInput(event){
return(setName(event.target.value));

}

function Pressed(event){
  setHeading(Name);
  event.preventDefault();
}

  return (
      <form onSubmit={Pressed} className="container">
      <h1>Hello {heading} </h1>
      <input type="text" onChange={setNameInput} placeholder="What's your name?" />
      <button type="submit">Submit</button>
  </form>
  );
}

export default App;
Form can be used instead of button but we need to add on onSubmit in form
and inside the function we need to put even.preventDefault(); because
form auto refreshes after finishing a function

_______________________________________________________
const [Name,setName] = useState("");
const [heading,setHeading] = useState("");

function setNameInput(event){
return(setName(event.target.value));

}

function Pressed(){
  setHeading(Name);
}

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input type="text" onChange={setNameInput} placeholder="What's your name?" />
      <button onClick={Pressed}>Submit</button>
    </div>
  );
}

export default App;
This will let the button recognize input



const [Name,setName] = useState("");

function setNameInput(event){
  
setName(event.target.value);
};

  return (
    <div className="container">
      <h1>Hello {Name} </h1>
      <input type="text" onChange={setNameInput} placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
This will change the name of the input when typed using onChange and 
event.target.value

*/