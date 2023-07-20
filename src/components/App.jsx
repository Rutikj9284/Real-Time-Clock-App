import React from "react";
import Image from "./Image";
function App() {

  const [currTime, setTime] = React.useState(new Date().toLocaleTimeString());
  function updateTime(){
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime,1000); //1000milisec = 1sec
  //every sec updateTime will be called
  return (
    <div className="container">
      <h1>{currTime}</h1>
      <Image />
      <br/>
      <button onClick={updateTime}></button>
    </div>
  );
}

export default App;


