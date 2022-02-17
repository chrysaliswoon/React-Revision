import React, { useState } from 'react';
import {createStore} from 'redux'
import counterReducer from './Reducer'
import {connect} from 'react-redux'

// const store = createStore(counterReducer)
// console.log('store', store)
// console.log('store getState', store.getState())
// store.dispatch({type: 'INCREMENT', payload: 10})
// console.log('store getState', store.getState())


function Counter(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section>
      <h2>Count:{props.count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(Counter)

// export default CounterHooks;
