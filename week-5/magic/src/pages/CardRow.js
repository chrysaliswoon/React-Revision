import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Image from '../components/Image'

const CardRow = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${card.multiverseid}`);
  }

  return (
    <tr>
      <td>
        <Link to={`/card/${card.multiverseid}`}>
          <Image card={card} />
        </Link>
      </td>
      <td>
        <button onClick={handleClick}>{card.name}</button>
      </td>
    </tr>
  );
};

export default CardRow;
