import "./App.css";
import React from "react";

function App() {
  const buttonPressed = ()=>{
    alert('Button pressed');
  }

  return (
    <div>
      <button onClick={buttonPressed}>
        버튼 누르기
      </button>
    </div>
  );
};

export default App;
