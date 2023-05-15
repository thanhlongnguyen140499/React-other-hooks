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
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }

      setList(l);
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <ul>
        {isPending
          ? "Loading..."
          : list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
      </ul>
    </>
  );
}

export default App;
