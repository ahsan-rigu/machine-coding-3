import React from "react";

const TableRow = ({
  snack: { id, product_name, product_weight, price, calories, ingredients },
}) => {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{product_name}</td>
      <td>{product_weight}</td>
      <td>{price}</td>
      <td>{calories}</td>
      <td>{ingredients.join(", ")}</td>
    </tr>
  );
};

export default TableRow;
