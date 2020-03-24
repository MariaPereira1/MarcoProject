import React, { useState } from "react";

const RegisterAccount = ({ addRegister }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addRegister({ text, amount: Number(amount) });
        setText("");
        setAmount("");
      }}
    >
      <label>
        <span>Title: </span>
        <input
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </label>
      <label>
        <span>Amount: </span>
        <input
          type="number"
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />
      </label>
      <button disabled={!text || !amount || Number.isNaN(Number(amount))}>
        Add
      </button>
    </form>
  );
};

export default RegisterAccount;
