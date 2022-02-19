import React from 'react'
import useLocalStorage from './useLocalStorage';

export default function Counter() {
    // const [count, setCount] = useState(0)
    // setCount(count + 1)

    // const handleIncrement = () => {
    //     setCount(count + 1)
    // }

    // const handleDecrement = () => {
    //     setCount(count - 1)
    // }

    // const handleReset = () => {
    //     setCount(0)
    // }

    const [count, setCount] = useLocalStorage('counter', 10)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
      <div className="Counter">
          <span>Current Count: {count}</span>
          <section>
              <button onClick={handleIncrement}>+</button>
              <button onClick={handleDecrement}>-</button>
              <button onClick={handleReset}>Reset</button>
          </section>
      </div>
    );
  }