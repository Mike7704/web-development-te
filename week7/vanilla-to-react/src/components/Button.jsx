export default function Button() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return <button onClick={handleClick}>React Button</button>;
}
