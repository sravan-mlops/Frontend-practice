import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // state variable

  return (
    <div className="app">
      <h1>Welcome to React Practice 🚀</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default App;
