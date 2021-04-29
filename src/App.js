import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  let [count, setCount] = useState(1);
  const handleIncrementCount = () => {
    setCount((prev) => (prev += 1));
  }
  const handleDecrementCount = () => {
    setCount((prev) => prev -= 1)
  }
  return (
    <div data-cy="container">
      <p data-cy="introText">Cypress in CRA</p>
      <p>Play text to break test</p>
      <p data-cy="count">{ count }</p>
      <button onClick={handleIncrementCount} data-cy="incrementCount">Increment Count</button>
      <button onClick={handleDecrementCount} data-cy="decrementCount">Decrement Count</button>
    </div>
  );
}

export default App;