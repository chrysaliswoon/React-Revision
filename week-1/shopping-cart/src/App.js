// import useState
import React, { useState } from 'react';
import './App.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import productsArr from './Products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  // create an addToCart function that takes in a product as a param and using the ...spread operator add the product to the cart array
  const addToCart = items => {
    setCart([...cart,items])
  }

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  return (
    <div className="App">
      <h1>Chrysalis Shopping Mart</h1>
      <div className="products">
        <AllTheThings products = {products} handleClick={addToCart}/>
        <MyShoppingCart cartItems = {cart}/>
      </div>
    </div>
  );
}
