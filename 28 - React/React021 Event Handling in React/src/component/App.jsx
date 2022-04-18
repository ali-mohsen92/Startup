import React, { useState } from "react";

function App() {
    const [text,changeText] = useState("Hello");
    const [changecolor, setColor] = useState(false);
    function changingText(){
    changeText("Welcome");
    }

    function setColorBlack(){
        return setColor(true);
    }
    function setColorWhite(){
        return setColor(false);
    }
  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={changingText}
      style={{backgroundColor: changecolor ? "black" : "white"}}
      onMouseOver={setColorBlack}
      onMouseOut={setColorWhite}
      >Submit</button>
    </div>
  );
}

export default App;
 /* 
 function App() {
    const [text,changeText] = useState("Hello");
    const[isMousedOver, setMouseOver] = useState(false);

    function changingText(){
    changeText("Welcome");
    }
function changeColor(){
    return setMouseOver(true);
}
function removeColor(){
    return setMouseOver(false);
}

  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor: isMousedOver ? "black" : "white"}} 
      onClick={changingText}
      onMouseOver={changeColor}
      onMouseOut={removeColor}
      >Submit</button>
    </div>
  );
}

export default App;
onMouseOver and onMouseOut are handles to change color when moving cursor
 */