import React, {useState} from "react";

function App() {
const [input, setInput] = useState("");
const [Lists, setLists]= useState([]);

function handleChange(event){
const value = event.target.value;
setInput(value);
}

function AddList(){
  setLists((AllLists) => {
  return [...AllLists, input];
  });
  setInput("");
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="Lists" onChange={handleChange} value={input} type="text" />
        <button onClick={AddList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
{Lists.map(listitems => (<li>{listitems}</li>))}
</ul>
      </div>
    </div>
  );
}

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>

export default App;
