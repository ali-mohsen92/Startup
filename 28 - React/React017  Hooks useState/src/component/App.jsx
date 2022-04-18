import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase(){
  return setCount(count+1);
  }
  function decrease(){
    return setCount(count-1);
  }
  return(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>);
}

export default App;

/* 
function App() {
  const [count, setCount] = useState(0);

  function increase(){
  return setCount(count+1);
  }
  function decrease(){
    return setCount(count-1);
  }
  return(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={decrease}>-</button>
    <button onClick={increase}>+</button>
  </div>);
}

export default App;
we use useState hook and it can only be used inside of react function App
or it wont work, const [count, setCount] = useState(0); will make count
start as 0 and setCount(count+1) will increase it count by 1
*/