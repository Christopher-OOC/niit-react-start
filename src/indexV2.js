import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
      <p>You click me {count} times!</p>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      <p>
        Your message is: <span style={{ color: "red" }}>{message}</span>
      </p>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
