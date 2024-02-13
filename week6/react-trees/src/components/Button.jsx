export default function Button() {
  function handleClick() {
    console.log("Click");
  }

  return <button onClick={handleClick}>Click me!</button>;
}
