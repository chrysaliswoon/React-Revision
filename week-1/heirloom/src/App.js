import './App.css';
import React, {useState} from 'react'
import Furniture from './Furniture'

function App() {
  const [ state, setState ] = useState("Grandma's Favorite Chair" )


  return (
    <div className="container">
      <h1 className="shop-name">Heirloom Funiture Restoration</h1>
      <Furniture chair={state}/>
    </div>
  );
}

export default App;
