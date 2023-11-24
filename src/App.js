import { useState } from "react";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { IsWinner } from "./components/IsWinner/IsWinner";

export function App() {
  const [btns, setBtns] = useState(["", "", "", "", "", "", "", "", ""]);
  const [counter, setCounter] = useState(0);
  const [info, setInfo] = useState("Ход крестиков");
  const [isGameOver, setIsGameOver] = useState(false);

  function onClick(item, index) {
    if (!isGameOver) {
      let newArray = btns;

      if (counter % 2 === 0 && newArray[index] === "") {
        setInfo("Xод ноликов");
        newArray[index] = "X";
        setCounter(counter + 1);
      } else if (counter % 2 !== 0 && newArray[index] === "") {
        setInfo("Xод крестиков");
        newArray[index] = "0";
        setCounter(counter + 1);
      }
      setBtns(newArray);
    }
  }

  return (
    <>
      <AppLayout
        setBtns={setBtns}
        btns={btns}
        onClick={onClick}
        info={info}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        setInfo={setInfo}
      />
      <IsWinner
        btns={btns}
        info={info}
        setInfo={setInfo}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      />
      ;
    </>
  );
}
