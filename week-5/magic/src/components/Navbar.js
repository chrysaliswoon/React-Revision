import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
      <div className="NavBar">
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/random">Random</Link></li>
            </ul>
        </nav>
    </div>
    )
}
