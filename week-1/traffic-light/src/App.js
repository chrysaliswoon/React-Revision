import './App.css';
import TrafficLight from './TrafficLight'

function App() {
  const colors = ["red", "yellow", "green"]

  return (
    <div className="App">
      <h1>Traffic Light</h1>
      {colors.map((element)=> (
        <TrafficLight LightColors={element}/>
      ))}
    </div>
  );
}

export default App;
