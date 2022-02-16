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

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    
    <div class="App">
      <h1>Counter</h1>
      {counter}
      </div>
  )
}

export default App