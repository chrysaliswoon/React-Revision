// import useState
import React, { useState } from 'react';
import './App.css';

// import the required components
import AllTheThings from './AllTheThings';
import MyShoppingCart from './MyShoppingCart';
import Form from './Form';
// import the products array from products.js
import productsArr from './products';

export default function App() {
  // add state for products and cart, both of which are empty arrays
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  // create a addToCart function that takes in an item as a param
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  // create a removeFromCart function that takes in an index as a param
  const removeFromCart = (index) => {
    const cartArr = cart.filter((d, i) => i !== index);
    setCart(cartArr);
  };

  const addToProducts = (product) => {
    setProducts([product, ...products]);
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form handleSubmit={addToProducts} />
      <div className="products">
        <AllTheThings products={products} handleClick={addToCart} />
        <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
