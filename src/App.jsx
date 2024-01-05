import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter((prevCount) => prevCount - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <div className="counter">
        <button onClick={() => setCounter((count) => count + 1)}>+</button>
        <span>{counter}</span>
        <button onClick={() => setCounter((count) => count - 1)}>-</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
      <div>
        <button className="button" onClick={increase}>
          +
        </button>
        <span>{counter}</span>
        <button className="button" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
}

export default App;
