import { useState } from "react";
import { MyForm } from "./myForm";

export default function App() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Form Demo</h1>
      {/* Simple input
      <form>
        <input
          type="text"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </form>
      <p>You inputted: {input}</p>
        */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Input: </label>
        <input type="text" id="input" name="input" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p>You inputted: {input}</p>

      <h2>Multiple Forms</h2>
      <MyForm />
    </div>
  );
}
