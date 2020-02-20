import React from "react";
import "./App.css";

function App() {
  const FunctionC = prop => {
    console.log(prop.name);
    return (
      <h1>
        <center style={{ color: "red" }}>{prop.name}</center>
      </h1>
    );
  };
  return (
    <div>
      <h1>
        <center style={{ color: "green" }}>I am class component</center>
      </h1>

      <FunctionC name="I am functional component"></FunctionC>
    </div>
  );
}

export default App;
