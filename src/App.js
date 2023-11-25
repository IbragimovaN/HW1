import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [operand1, setOperand1] = useState("0");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [isResult, setIsResult] = useState(false);

  const output = operand1 + operator + operand2;

  const NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  return (
    <div className={styles.app}>
      <div className={`${styles.screen} ${isResult ? styles.result : ""}`}>
        {output}
      </div>
      <div className={styles.buttons}>
        <div className={styles.leftGroup}>
          {NUMS.map((num) => (
            <button
              className={styles.button}
              onClick={() => {
                setIsResult(false);
                operator === ""
                  ? operand1 === "0"
                    ? setOperand1(num)
                    : setOperand1(operand1 + num)
                  : operand2 === "0"
                  ? setOperand2(num)
                  : setOperand2(operand2 + num);
              }}
            >
              {num}
            </button>
          ))}
        </div>
        <div className={styles.rightGroup}>
          <button
            className={styles.button}
            onClick={() => {
              setOperand1("0");
              setOperator("");
              setOperand2("");
              setIsResult(false);
            }}
          >
            C
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setOperator("+");
              setIsResult(false);
            }}
          >
            +
          </button>
          <button
            className={styles.button}
            onClick={() => {
              setOperator("-");
              setIsResult(false);
            }}
          >
            -
          </button>
          <button
            className={styles.button}
            onClick={() => {
              if (operand2 === "") {
                setOperator("");
              } else {
                if (operator === "+") {
                  setOperand1(Number(operand1) + Number(operand2));
                } else if (operator === "-") {
                  setOperand1(Number(operand1) - Number(operand2));
                }

                setOperand2("");
                setOperator("");
                setIsResult(true);
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
