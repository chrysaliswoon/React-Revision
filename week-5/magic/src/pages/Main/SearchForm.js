import { useState } from "react";

function SearchForm(props) {
  const searchUrlFn = props.searchUrlFn;
  const [search, setSearch] = useState("");

  //? React => One way data flow => Parent -> Child (props)
  //? Child -> Parent, Child-> Sibling

  const handleClick = () => {
    const searchURL = `https://api.magicthegathering.io/v1/cards?rarity=${search}`
    searchUrlFn(searchURL);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </>
  );
}

export default SearchForm;