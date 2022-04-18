import React, {useState} from "react";


function App() {

  setInterval(whattimeisit,1000);
  let now = new Date().toLocaleTimeString();

  const [time, settime] = useState(now);

function whattimeisit(){
const Time01 = new Date().toLocaleTimeString();
return settime(Time01);
}

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={whattimeisit}>Get Time</button>
    </div>
  );
}

export default App;
