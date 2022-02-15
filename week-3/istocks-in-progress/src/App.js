import './App.css';
import {Outlet, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="Home"> iStocks </Link> {" "}
      <Link to="Stocks"> Stocks </Link> {" "}
      <Link to="About"> About </Link>
      <Outlet />
    </div>
  );
}

export default App;
