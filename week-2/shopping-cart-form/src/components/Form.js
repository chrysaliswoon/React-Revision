import React, { useState } from 'react';

export default function Form() {
    // console.log(products)
    const addItem = (event) => {
        // event.preventDefault()
        console.log(event.target.value)
        setNewItem(event.target.value)
    }

    const [newItem, setNewItem] = useState('description')

  return (
    <div className="Form">
       <form onSubmit={addItem}>
           <input 
           value={newItem}
           onChange={addItem}
           />
           <button type="submit">Submit</button>
       </form>
    </div>
  );
}
