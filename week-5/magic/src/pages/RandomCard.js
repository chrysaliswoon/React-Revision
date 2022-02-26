import {useState} from 'react'
import NavBar from "../components/Navbar";
import initialCard from '../data/cards'

// console.log('card', card)

export default function RandomCard() {

    const [card, setCard] = useState(initialCard.card)

    return (
      <div className="MainPage">
          <h1>Random Card</h1>
          <NavBar />

        {/* <table border="">
        <thead>
          <tr>
            <th>Card Name</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><img src="" alt="Angelic Arbiter" /></td>
            <td>
                <p>Card Description Here</p>
            </td>
          </tr>
        </tbody>
        </table> */}

        <div>
            <img src={card.imageUrl} alt="warrior"></img>
        </div>
        <div>
            {card.name}
        </div>
      </div>
    );
  }
  
  