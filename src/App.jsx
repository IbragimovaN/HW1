import styles from "./App.module.css";
import { useState } from "react";

// function App() {
//   const btnNumbers = [
//     { id: "001", name: 1 },
//     { id: "002", name: 2 },
//     { id: "003", name: 3 },
//     { id: "004", name: 4 },
//     { id: "005", name: 5 },
//     { id: "006", name: 6 },
//     { id: "007", name: 7 },
//     { id: "008", name: 8 },
//     { id: "009", name: 9 },
//     { id: "010", name: 0 },
//   ];


//   const [currentNumberFirst, setCurrentNumberFirst] = useState("");
//   const [currentNumberSecond, setCurrentNumberSecond] = useState("");
//   const [operator, setOperator] = useState("");

//   const [res, setRes] = useState("");

//   const onClickBtn = (event) => {
//     if (operator === "") {
//       setCurrentNumberFirst(currentNumberFirst + event.target.innerText);
//     } else {
//       setCurrentNumberSecond(currentNumberSecond + event.target.innerText);
//     }
//   };

//   const onClickPluse = () => {
//     setOperator("+");
//     if (res !== "") {
//       setCurrentNumberFirst(res);
//       setRes("");
//       setCurrentNumberSecond("");
//     }
//   };

//   const onClickMinus = () => {
//     setOperator("-");
//     if (res !== "") {
//       setCurrentNumberFirst(res);
//       setRes("");
//       setCurrentNumberSecond("");
//     }
//   };

//   const onClickResult = () => {
//     if (operator === "+") {
//       setRes(Number(currentNumberFirst) + Number(currentNumberSecond));
//     } else if (operator === "-") {
//       setRes(Number(currentNumberFirst) - Number(currentNumberSecond));
//     }
//   };

//   const onClickReset = () => {
//     setRes("");
//     setCurrentNumberFirst("");
//     setCurrentNumberSecond("");
//     setOperator("");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.calculator}>
//         <div className={res !== "" ? styles.displayRes : styles.display}>
//           {" "}
//           {res !== ""
//             ? res
//             : currentNumberFirst + operator + currentNumberSecond}
//         </div>
//         {btnNumbers.map(({ id, name }) => (
//           <button onClick={onClickBtn} key={id}>
//             {name}
//           </button>
//         ))}

//         <button onClick={onClickPluse}>+</button>
//         <button onClick={onClickMinus}>-</button>
//         <button onClick={onClickResult}>=</button>
//         <button className={styles.resetBtn} onClick={onClickReset}>
//           C
//         </button>
//       </div>
//     </div>
//   );
// }
// export default App;

function App() {
  const btnNumbers = [
    { id: "001", name: 1 },
    { id: "002", name: 2 },
    { id: "003", name: 3 },
    { id: "004", name: 4 },
    { id: "005", name: 5 },
    { id: "006", name: 6 },
    { id: "007", name: 7 },
    { id: "008", name: 8 },
    { id: "009", name: 9 },
    { id: "010", name: 0 },
    { id: "011", name: "-" },
    { id: "012", name: "+" },
    { id: "013", name: "=" },
    { id: "014", name: "c" },
  ];

  const [currentNumberFirst, setCurrentNumberFirst] = useState("");
  const [currentNumberSecond, setCurrentNumberSecond] = useState("");
  const [operator, setOperator] = useState("");
  const [res, setRes] = useState("");

  const onClickPluse = () => {
    setOperator("+");
    if (res !== "") {
      setCurrentNumberFirst(res);
      setRes("");
      setCurrentNumberSecond("");
    }
  };

  const onClickMinus = () => {
    setOperator("-");
    if (res !== "") {
      setCurrentNumberFirst(res);
      setRes("");
      setCurrentNumberSecond("");
    }
  };

  const onClickResult = () => {
    if (operator === "+") {
      setRes(Number(currentNumberFirst) + Number(currentNumberSecond));
    } else if (operator === "-") {
      setRes(Number(currentNumberFirst) - Number(currentNumberSecond));
    }
  };

  const onClickReset = () => {
    setRes("");
    setCurrentNumberFirst("");
    setCurrentNumberSecond("");
    setOperator("");
  };

  const onClickBtn = (event) => {          
    if(event.target.innerText === "+"){
      onClickPluse()
    } else if(event.target.innerText === "-"){
      onClickMinus()
    } else if(event.target.innerText === "="){
      onClickResult()
    } else if(event.target.innerText === "c"){
      onClickReset()
    } else {
      if (operator === "") {
        setCurrentNumberFirst(currentNumberFirst + event.target.innerText);
      } else {
        setCurrentNumberSecond(currentNumberSecond + event.target.innerText);
      }
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={res !== "" ? styles.displayRes : styles.display}>
            {res !== "" ? res : currentNumberFirst + operator + currentNumberSecond}
        </div>
        {btnNumbers.map(({ id, name }) => (
          <button
          key={id} onClick={onClickBtn}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
export default App;
