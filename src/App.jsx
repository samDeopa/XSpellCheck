import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SpellCheck from "./SpellCheck";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SpellCheck></SpellCheck>
    </>
  );
}

export default App;
