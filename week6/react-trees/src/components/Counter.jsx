import { useState } from "react";

export default function Counter() {
  let [myCounterState, setMyCounterState] = useState(0);

  function incrementCounter() {
    setMyCounterState(myCounterState + 1);
  }

  function decreaseCounter() {
    setMyCounterState(myCounterState - 1);
  }

  function resetCounter() {
    setMyCounterState((myCounterState = 0));
  }

  return (
    <div>
      <p>{myCounterState} cookies.</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      {/* Same as: button.addEventListener('click', incrementCounter) */}
      <button onClick={decreaseCounter}>Remove a cookie</button>
      <button onClick={resetCounter}>Reset cookies</button>
    </div>
  );
}
