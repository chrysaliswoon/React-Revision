import React from 'react';

export default function MyShoppingCart({cartItems}) {

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>
          {cartItems.map(cart => 
          <li>
               {cartItems.name} - ${cartItems.price}
               <br/>
               [{cartItems.description}]
          </li>
          )}
      </ul>
    </div>
  );
}