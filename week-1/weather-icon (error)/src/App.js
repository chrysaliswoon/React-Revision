import React from 'react'
import './App.css';
import weatherData from './weatherData'
import weatherIcons from './weatherIcons';

function App() {
  return (
    <div className="App">
      <h1>Weather Icons</h1>
      <weatherIcons />
    </div>
  );
}

export default App;
