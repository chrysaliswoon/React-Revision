import React from "react";
import Counter from './Counter'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import counterReducer from "./Reducer";

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="nes-text is-primary">
        <Counter />
      </div>
      </Provider>
  );
}

export default App
