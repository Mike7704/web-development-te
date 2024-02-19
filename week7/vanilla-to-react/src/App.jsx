import Button from "./components/Button";
import "./App.css";

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h2>React</h2>
      <Button />
      {isLoggedIn ? <p>Welcome back</p> : <p>Please log in</p>}
    </div>
  );
}

export default App;
