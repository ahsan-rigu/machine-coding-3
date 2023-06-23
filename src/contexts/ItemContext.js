import React, { createContext, useReducer, useState } from "react";
import snacks from "../data/data";

export const ItemsContext = createContext();

const sortReducer = (state, metric) => {
  if (metric === state.metric) {
    return {
      metric,
      ascending: !state.ascending,
    };
  } else {
    return {
      metric,
      ascending: false,
    };
  }
};

const ItemContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, dispatchSort] = useReducer(sortReducer, {
    ascending: true,
    metric: "id",
  });
  const filteredSnacks = snacks.filter(
    ({ ingredients, product_name }) =>
      ingredients.join(" ").toLowerCase().includes(searchQuery) ||
      product_name.toLowerCase().includes(searchQuery)
  );

  const filteredSortedSnacks = filteredSnacks.sort((a, b) =>
    typeof a[sort.metric] === "number"
      ? sort.ascending
        ? a[sort.metric] - b[sort.metric]
        : b[sort.metric] - a[sort.metric]
      : sort.ascending
      ? a[sort.metric].charCodeAt(0) - b[sort.metric].charCodeAt(0)
      : b[sort.metric].charCodeAt(0) - a[sort.metric].charCodeAt(0)
  );

  return (
    <ItemsContext.Provider
      value={{ setSearchQuery, dispatchSort, filteredSortedSnacks }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemContextProvider;
