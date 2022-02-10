import React, { useState, useReducer } from "react";

// Action --> {type, payload}
// Action {type:"INCREMENT", payload: state+1}

// const myReducer = (state, action) => {
//   switch (action) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "RESET":
//       return 0;
//     default:
//       return 0;
//   }
// };

const myReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;
      case "DECREMENT":
        return state - action.payload;
      case "RESET":
        return action.payload;
      default:
        return 0;
    }
  };

function CounterHooks() {
//   const [count, setCount] = useState(88);
  const [count2, dispatch] = useReducer(myReducer, 199);

  const increment = () => {
    // setCount((count) => count + 1);
    dispatch({type: "INCREMENT", payload: 1});
  };
  const decrement = () => {
    // setCount((count) => count - 1);
    dispatch({type: "DECREMENT", payload: 2});
  };
  const reset = () => {
    // setCount((count) => 0);
    dispatch({type: "RESET", payload: 0});
  };

  return (
    <section>
      {/* <h2>Count:{count}</h2> */}
      <h2>Count2:{count2}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
}

export default CounterHooks;