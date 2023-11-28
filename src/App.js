import styles from "./App.module.css";
import { useState, useRef } from "react";

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  const onClickRefCount = () => {
    refCount.current += 1;
    console.log("refCount = " + refCount.current);
  };

  const onClickStateCount = () => {
    setStateCount(stateCount + 1);
    console.log("stateCount = " + stateCount + 1);
  };

  return (
    <div className={styles.App}>
      <p>refCount: {refCount.current}</p>
      <button onClick={onClickRefCount}>Прибавить к refCount</button>
      <p>stateCount: {stateCount}</p>
      <button onClick={onClickStateCount}>Прибавить к stateCount</button>
    </div>
  );
}
export default App;
