import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [btns, setBtns] = useState([
    { id: "001", value: "" },
    { id: "002", value: "" },
    { id: "003", value: "" },
    { id: "004", value: "" },
    { id: "005", value: "" },
    { id: "006", value: "" },
    { id: "007", value: "" },
    { id: "008", value: "" },
    { id: "009", value: "" },
  ]);

  const [counter, setCounter] = useState(0);

  function onClick(currentId) {
    console.log(currentId);
    setCounter(counter + 1);
    let newArray = [...btns];

    if (counter % 2 === 0) {
      newArray = newArray.map((btn) => {
        if (btn.id === currentId) {
          return { ...btn, value: "X" };
        }
        return btn;
      });
    } else if (counter % 2 !== 0) {
      newArray = newArray.map((btn) => {
        if (btn.id === currentId) {
          return { ...btn, value: "0" };
        }
        return btn;
      });
    }
    setBtns(newArray);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {btns.map(({ id, value }) => (
          <button onClick={() => onClick(id)} id={id}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
export default App;
