import './App.css';
import {createStore} from 'redux'
import CounterReducer from './Reducers/counterReducer'
import {Prodvider} from 'react-redux'

export default function App() {
  const store = createStore(counterReducer)
  console.log("Current State:", store.getState())
  return (
    <Provider store ={store}>
      <Counter />
    </Provider>
  );
}
