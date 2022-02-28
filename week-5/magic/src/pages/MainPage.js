import { useEffect, useState } from "react";
import CardRow from "./CardRow";
import SearchForm from "./SearchForm";

function MainPage() {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState("idle");

  const url = `https://api.magicthegathering.io/v1/cards/`;
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
  }, []);

  if (status === "loading") {
    return "Loading";
  }

  if (status === "error") {
    return "Error";
  }

  return (
    <>
      <SearchForm />
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
