import { useState } from "react";
import { GameLayout } from "./game-layout";
import { STATUS, PLAYER } from "./constants";
import { checkWin } from "./utills/check-win";

export function Game() {
  const [status, setStatus] = useState(STATUS.TURN);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
  const [field, setField] = useState(new Array(9).fill(PLAYER.NOBODY));

  const onCellClick = (cellIndex) => {
    if (
      status === STATUS.WIN ||
      status === STATUS.DRAW ||
      field[cellIndex] !== PLAYER.NOBODY
    ) {
      return;
    }

    const newField = [...field];

    // if (currentPlayer === PLAYER.CROSS) {
    //   newField[cellIndex] = PLAYER.CROSS;
    //   setCurrentPlayer(PLAYER.NOUGHT);
    // } else if (currentPlayer === PLAYER.NOUGHT) {
    //   newField[cellIndex] = PLAYER.NOUGHT;
    //   setCurrentPlayer(PLAYER.CROSS);
    // }
    //эту запись можно заменить записью ниже:
    newField[cellIndex] = currentPlayer;
    setCurrentPlayer(
      currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
    );
    setField(newField);

    if (checkWin(newField, currentPlayer)) {
      setStatus(STATUS.WIN);
    } else if (newField.some((cellPlayer) => cellPlayer === PLAYER.NOBODY)) {
      setCurrentPlayer(
        currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
      );
    } else {
      setStatus(STATUS.DRAW);
    }
  };

  const onClickRestart = () => {
    setStatus(STATUS.TURN);
    setCurrentPlayer(PLAYER.CROSS);
    setField(new Array(9).fill(PLAYER.NOBODY));
  };

  return (
    <GameLayout
      status={status}
      currentPlayer={currentPlayer}
      field={field}
      onCellClick={onCellClick}
      onClickRestart={onClickRestart}
    />
  );
}
