import React from "react";
import RegisterItem from "./RegisterItem";

const RegisterList = ({ list, onDelete }) => {
  return (
    <ul>
      {list
        .sort((a, b) => b.amount - a.amount)
        .map(item => (
          <RegisterItem key={item.id} item={item} onDelete={onDelete} />
        ))}
    </ul>
  );
};

export default RegisterList;
