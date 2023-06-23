import React, { useContext } from "react";
import Search from "../components/Search";
import TableRow from "../components/TableRow";
import { ItemsContext } from "../contexts/ItemContext";
import { BiSolidSortAlt, IconName } from "react-icons/bi";

const Home = () => {
  const { filteredSortedSnacks, dispatchSort } = useContext(ItemsContext);

  const keys = [
    "id",
    "product_name",
    "product_weight",
    "price",
    "calories",
    "ingredients",
  ];
  return (
    <div>
      <Search />
      <table>
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>
                <button onClick={() => dispatchSort(key)}>
                  {key.replace("_", " ")} <BiSolidSortAlt />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredSortedSnacks.map((snack) => (
            <TableRow snack={snack} key={snack.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
