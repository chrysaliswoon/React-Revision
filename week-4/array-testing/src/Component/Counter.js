import React, {useState} from 'react'

export default function Counter (props) {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <div>
                Current Count:
                <span className="counter">{counter}</span>
            </div>

            <section>
                <button className="plus" onClick={() => setCount(count + 1)}> + </button>
                <button className="minus" onClick={() => setCount(count - 1)}> - </button>
            </section>
        </div>
    )
}