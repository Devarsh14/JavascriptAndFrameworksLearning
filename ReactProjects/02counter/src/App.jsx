import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] =  useState(10)

const addValue = () => {
    console.log("Value added", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("Value added", counter);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> React app</h1>
      <h2> Counter value: {counter} </h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
