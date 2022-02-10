import './App.css';
import React, {useState} from "react"
import TrafficLight from './TrafficLight'

function App() {
  const colors = ["red", "yellow", "green"];
  const [lit, setLit] = useState("red")

  return (
    <div className="App">
      <h1>Traffic Light</h1>
      {colors.map((element)=> (
        <TrafficLight LightColors={element} LightStatus={lit}/>
      ))}
    </div>
  );
}

export default App;
