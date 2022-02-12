import './App.css';
import {Outlet, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | {" "}
      <Link to="/procedures">Procedures</Link> | {" "}
      <Link to="/contact">Contact</Link>
      <Outlet />
    </div>
  );
}

export default App;
