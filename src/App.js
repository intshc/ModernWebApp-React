import "./App.css";
import React, { useState } from "react";
import useTitle from "./useTitle";

function App() {
  const [count, setCount] = useState(0);

  useTitle(`You clicked ${count} times.`);

  return (
    <div>
      <p>Counter = {count}</p>
      <button onClick={ () => setCount(count + 1) }>
        증가
      </button>
    </div>
  );
};

export default App;
