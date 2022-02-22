import React from 'react';

export default function AllTheThings({products, handleClick}) {
    // console.log(products)

  return (
    <div className="AllTheThings">
       <h2>Put these in your cart!</h2>
       <ul>
           {/* <li>{products[0].name}</li>
           <li>{products[1].name}</li> */}
           {products.map(product=> 
           <li key={product.name} onClick={() => handleClick(product)}>
               {product.name} - ${product.price}
               <br/>
               [{product.description}]
            </li>
           )}
       </ul>
    </div>
  );
}
