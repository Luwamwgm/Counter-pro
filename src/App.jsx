import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>

      <div className="counter">
        <button onClick={() => setCounter((count) => count + 1)}>+</button>
        <span>{counter}</span>
        <button onClick={() => setCounter((count) => count - 1)}>-</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
