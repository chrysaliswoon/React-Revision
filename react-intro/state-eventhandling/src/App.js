// function App(props) {
//   const {counter} = props

//   return (
//     <div className="App">
//       <h1>Counter</h1>
//       {counter}
//     </div>
//   );
// }

// export default App;

import './App.css';
import { useState } from 'react'
import Display from './Display'
import Button from './Button';

export default function App () {
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // const handleAddClick = () => {
  //   setCounter(counter + 1)
  // }

  // const handleReset = () => {
  //   setCounter(0)
  // }

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    
    <div className="App">
      <h1>Counter</h1>
      <Display counter={counter}/>
      <br></br>
      <Button onClick={increaseByOne} text='+'/>
      <Button onClick={decreaseByOne} text='-'/>
      <Button onClick={setToZero} text='reset'/>
      </div>
  )
}
