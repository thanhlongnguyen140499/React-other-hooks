import logo from "./logo.svg";
import "./App.css";
import { useCallback, useMemo, useState } from "react";
import List from "./List";

function App() {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(1);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  const getItems = useCallback(
    (incrementor) => {
      return [number, number + 1 + incrementor, number + 2 + incrementor];
    },
    [number]
  );

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;
