import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RandomCard() {
  const [card, setCard] = useState({});
  const [status, setStatus] = useState("idle");
  const { id } = useParams();

  const url = `https://api.magicthegathering.io/v1/cards/${id}`;
  useEffect(() => {
    setStatus("loading");
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setStatus("error");
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCard(data.card);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        console.log(error);
      });
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error!</div>;
  }

  return (
    <>
      <div>
        <img src={card.imageUrl} alt={card.name} />
      </div>
      <div>{card.name}</div>
    </>
  );
}

export default RandomCard;