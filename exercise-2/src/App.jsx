import React, {useState} from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [textConvert, setState] = useState("");
  /* You will need a function to handle a key pressed on the first input and update the state*/
  function handleText (event) {
    console.log ("Text enter: ", event.target.value);
    setState(event.target.value);
  }
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input type="text" value={textConvert} onChange={handleText}/>

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input type="text" value={textConvert.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
