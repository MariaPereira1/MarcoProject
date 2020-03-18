import React, { useState } from "react";

export function RegisterAccount({ handleInput }) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                handleInput(text, amount);
                setText("");
                setAmount("");
            }}
        >
            <span>Enter title</span>
            <input
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <span>Enter amount</span>
            <input
                type="number"
                value={amount}
                onChange={event => setAmount(event.target.value)}
            />
            <br />
            <button>Submit</button>
        </form>
    );
}
