import React, { useState } from "react";
import { RegisterAccount, RegisterList } from "./Components";

function App() {
    const [list, setList] = useState([]);
    const [balance, setBalance] = useState(0);

    return (
        <div className="App">
            <h3>Balance: {balance}</h3>
            <RegisterAccount
                handleInput={(text, amount) => {
                    setBalance(balance + Number(amount));

                    const newList = list.concat([{ text, amount }]);
                    newList.sort((a, b) => b.amount - a.amount);
                    setList(newList);
                }}
            />
            <RegisterList
                list={list}
                handleRemove={index => {
                    setBalance(balance - Number(list[index].amount));

                    const newList = [...list];
                    newList.splice(index, 1);
                    setList(newList);
                }}
            />
        </div>
    );
}

export default App;
