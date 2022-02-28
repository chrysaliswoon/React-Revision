const Image = ({ card }) => {
    if (!card.imageUrl) {
      return "No Image there";
    }
    return <img height="100" src={card.imageUrl} alt={card.name} />;
  };
  
  export default Image;