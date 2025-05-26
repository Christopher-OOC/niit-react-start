import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const opearators = ["+", "-", "*", "/"];

function App() {
  const [expression, setExpression] = useState("");

  function acceptInput(input) {
    if (input === "C") {
      setExpression("");
    } else {
      const isSpace = opearators.includes(input) ? " " : "";
      setExpression(
        (expression) => `${expression}${isSpace}${input}${isSpace}`
      );
    }
  }

  return (
    <div className="app">
      <div className="calculator">
        <input
          value={expression}
          type="text"
          disabled
          className="calculator__screen"
        />
        <div className="calculator__keys">
          <div className="key__row">
            <span onClick={(e) => acceptInput(e.target.textContent)}>1</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>2</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>3</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>+</span>
          </div>
          <div className="key__row">
            <span onClick={(e) => acceptInput(e.target.textContent)}>4</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>5</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>6</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>-</span>
          </div>
          <div className="key__row">
            <span onClick={(e) => acceptInput(e.target.textContent)}>7</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>8</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>9</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>*</span>
          </div>
          <div className="key__row">
            <span onClick={(e) => acceptInput(e.target.textContent)}>C</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>0</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>=</span>
            <span onClick={(e) => acceptInput(e.target.textContent)}>/</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
