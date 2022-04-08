import logo from './logo.svg';
import './App.css';
import { counterMachine } from './counterMachine'
import {useMachine} from '@xstate/react'

function App() {
  const [state, send] = useMachine(counterMachine)

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{state.context.count}</h2>
      <button onClick={() => send('INCREMENT')}>INCREMENT</button>
      <button onClick={() => send('DECREMENT')}>DECREMENT</button>
    </div>
  );
}

export default App;
