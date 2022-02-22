import React from 'react';
import products from '../Products';

export default function MyShoppingCart({cartItems, handleClick}) {

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>
          {cartItems.map(cart => 
          <li key={cart.name} onClick={() => handleClick(cart)}>
               {cart.name} - ${cart.price}
               <br/>
               [{cart.description}]
          </li>
          )}
      </ul>
    </div>
  );
}