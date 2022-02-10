import React from 'react'
import './App.css';
import WeatherData from './WeatherData'
import WeatherIcons from './WeatherIcons';

function App() {
  return (
    <div className="App">
      <h1>Weather Icons</h1>
      {WeatherData.map((el, index) => (
        <WeatherIcons
        img={el.img}
        conditions={el.conditions}
        time={el.time}
        />
      ))}
    </div>
  );
}

export default App;
