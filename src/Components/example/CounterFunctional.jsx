import React, { useState } from "react";

export function CounterFunctional() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h2>
                Counter: <b>{counter}</b>
            </h2>
            <button onClick={() => setCounter(counter + 1)}>Sum</button>
            <button onClick={() => setCounter(counter - 1)}>Sub</button>
        </div>
    );
}
