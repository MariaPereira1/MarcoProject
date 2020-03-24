import React, { useState } from "react";
import RegisterAccount from "./Components/RegisterAccount";
import RegisterList from "./Components/RegisterList";

let nextId = 1;

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Total list={list} />
      <RegisterAccount
        addRegister={item =>
          setList(registerList =>
            registerList.concat([{ ...item, id: nextId++ }])
          )
        }
      />
      <RegisterList
        list={list}
        onDelete={id =>
          setList(registerList => registerList.filter(item => item.id !== id))
        }
      />
    </div>
  );
}

function Total({ list }) {
  const total = list.reduce((acc, { amount }) => acc + amount, 0);
  return <div>Total: {total}</div>;
}

export default App;
