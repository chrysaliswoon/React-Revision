import './App.css';
import React, {useState} from 'react'
import Furniture from './Furniture'


function App() {
  const [ state, setState ] = useState("Grandma's Favorite Chair" )

  const restore = () => setState(`Paint ${state} white`)

  return (
    <div className="container">
      <h1 className="shop-name">Heirloom Funiture Restoration</h1>
      <li onClick={restore}>
        {state}
      </li>
    </div>
  );
}

export default App;

// let's fix this by only allowing the button to show up if recommendationMade is false