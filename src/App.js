import logo from "./logo.svg";
import "./App.css";
import {
  useCallback,
  useMemo,
  useReducer,
  useState,
  useTransition,
} from "react";
import List from "./List";
// import Todo from "./Todo";

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
}

export default App;
