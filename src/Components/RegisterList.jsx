import React from "react";
import { RegisterItem } from "./";

export function RegisterList({ list, handleRemove }) {
    return (
        <ul>
            {list.map((e, index) => (
                <div>
                    <RegisterItem text={e.text} amount={e.amount} />
                    <button onClick={() => handleRemove(index)}>X</button>
                </div>
            ))}
        </ul>
    );
}
