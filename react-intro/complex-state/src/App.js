import {useState} from 'react'
import './App.css';
import History from './History'
import Button from './Button';

// function App() {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div className="App">
//       {left}
//       <button onClick={() => setLeft(left + 1)}> Left </button>
//       <button onClick={() => setRight(right + 1)}> Right </button>
//       {right}
//     </div>
//   );
// }

// export default App;

export default function App() {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1,
  //     // right: clicks.right
  //   }
  //   setClicks(newClicks)
  // }

  // const handleRightClick = () => {
  //   const newClicks = {
  //     // left: clicks.left,
  //     ...clicks,
  //     right: clicks.right + 1
  //   }
  //   setClicks(newClicks)
  // }

  // const handleLeftClick = () =>
  // setClicks({...clicks, left: clicks.left + 1})

  // const handleRightClick = () =>
  // setClicks({...clicks, right: clicks.right + 1})

  return (
    <div className = "App">
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {clicks.right}
      <History allClicks={allClicks}/>
    </div>
  )
}