import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardRow from "./CardRow";
import SearchFormWithRoute from "./SearchFormWithRoute";

const startURL = `https://api.magicthegathering.io/v1/cards/`;

function MainPage() {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState("idle");
  const [url, setUrl] = useState(startURL); 

  const location = useLocation({});


  //? How to get the info From SearchForm
  useEffect(() => {
    setStatus("loading");

    const fetchCards = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStatus("success");
        setCards(data.cards);
      } catch (error) {
        setStatus("error");
        console.log(error);
      }
    };
    fetchCards();
  }, [location]); //? Trigger the state change

  if (status === "loading") {
    return "Loading";
  }

  if (status === "error") {
    return "Error";
  }

  return (
    <>
      {/* <SearchForm searchUrlFn={setUrl} /> */}
      <SearchFormWithRoute />
      {/* <button onClick={handleClick}>Try</button> */}
      <table border="1">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <CardRow key={card.id} card={card} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MainPage;