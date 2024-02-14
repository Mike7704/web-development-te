import { useState, useEffect } from "react";

export default function Timer() {
  // UseState will set the initial state of something as its argument
  // Returns an array [value, functionToUpdate]
  const [count, setCount] = useState(0);

  // Run once (only when timer is created).
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Return the callback function (to clean up function)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
    </>
  );
}
