import React from 'react';

export default function AllTheThings(props) {
    const {products} = props
    console.log(props)

  return (
    <div className="AllTheThings">
       <h2>Put these in your cart!</h2>
       <ul>
           {/* <li>{products[0].name}</li>
           <li>{products[1].name}</li> */}
           {products.map(product => 
           <li>
               {product.name} - ${product.price}
               <br/>
               [{product.description}]
            </li>
           )}
       </ul>
    </div>
      

  );
}
