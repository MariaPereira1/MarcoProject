import React from "react";

const RegisterItem = ({ item, onDelete }) => {
  return (
    <li>
      <b>Title:</b> <span>{item.text} </span>
      <b>Amount:</b> <span>{item.amount} </span>
      <button onClick={() => onDelete(item.id)}>x</button>
    </li>
  );
};

export default RegisterItem;
