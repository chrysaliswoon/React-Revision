import './App.css';
import React, {useState} from 'react'
import Furniture from './Furniture'


export default function App() {
  const [ item, setItem ] = useState("Grandma's Favorite Chair")
  const restore = () => setItem(`Paint ${item} white`)

  return (
    <div className="App">
      <h1 className="shop-name">Heirloom Funiture Restoration</h1>
      <Furniture item={item} advice={restore}/>
    </div>
  );
}


// Instructions
// let's fix this by only allowing the button to show up if recommendationMade is false
// Let's update our state to have a key recommendationMade with a property of false to start
// add a ternary operator to determine whether or not a button should be displayed in the Furniture component