import './App.css';
import {useState} from 'react'

function App(props) {

    // const [counter, setCounter] = useState(0)
    const useCounter = () => {
      const [value, setValue] = useState(0)

      const increase = () => {
        setValue(value + 1)
      }

      const decrease = () => {
        setValue(value - 1)
      }

      const reset = () => {
        setValue(0)
      }

      return { // Change this to an Array instead of doing it as an Object
        value, 
        increase, 
        decrease, 
        reset
      }
    }

    const counter = useCounter()


  return (
    <div className="App">
      {/* <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <button onClick={() => setCounter(0)}>
        Reset
      </button> */}
      <div>{counter.value}</div>
      <button onClick={counter.increase}>
        +
      </button>
      <button onClick={counter.decrease}>
        -
      </button>
      <button onClick={counter.reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
