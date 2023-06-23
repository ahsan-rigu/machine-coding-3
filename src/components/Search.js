import React, { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContext";

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(ItemsContext);

  return (
    <label>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        placeholder="Search with Products or Ingredients"
      />
    </label>
  );
};

export default Search;
