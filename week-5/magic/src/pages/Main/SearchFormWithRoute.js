
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";

function SearchForm() {
  const [search, setSearch] = useState("");
  // const [queryParams, setQueryParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: "/home",
      search: `?${createSearchParams({ rarity: search })}`, 
    });
    // const searchURL = `https://api.magicthegathering.io/v1/cards?rarity=${search}`
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