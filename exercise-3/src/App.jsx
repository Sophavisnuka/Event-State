import React from "react";
import {useState} from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [inputA, setA] = useState("");
  const [inputB, setB] = useState("");
  const [result, setRes] = useState("");
  /* You will need some function to handle the key pressed and button events */
  function calculate () {
    const numA = parseFloat(inputA);
    const numB = parseFloat(inputB);

    if (isNaN(numA) || isNaN(numB) ) {
      setRes("A and B shall be numbers!");
    } else {
      setRes(numA + numB);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={inputA} onChange={onA => setA(onA.target.value)} />

      <label>B =</label>
      <input value={inputB} onChange={onB => setB(onB.target.value)} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} disabled />
      <button onClick={calculate}>Compute</button>
    </main>
  );
}

export default App;
