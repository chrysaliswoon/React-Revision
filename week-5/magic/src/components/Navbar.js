import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/random">Random</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;