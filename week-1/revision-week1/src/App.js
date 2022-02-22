import './App.css';
import Intro from './components/Intro'

export default function App() {

  // const n1 = 123
  // const doubleIt = (n) => 2 * n

  return (
    <div className="App">
      <h1>Welcome!</h1>
      {/* <p>{doubleIt(n1)}</p> */}
      <Intro />
    </div>
  );
}