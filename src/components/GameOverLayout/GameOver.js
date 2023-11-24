import { GameOverLayout } from "./GameOverLayout";
import PropTypes from "prop-types";

export const GameOver = ({
  btns,
  setBtns,
  isGameOver,
  setIsGameOver,
  setInfo,
}) => {
  function clickNewGame() {
    setBtns(
      btns.map((item) => {
        return (item = "");
      }),
    );
    setIsGameOver(false);
    setInfo("Ход крестиков");
  }
  return <GameOverLayout clickNewGame={clickNewGame} isGameOver={isGameOver} />;
};

GameOver.propTypes = {
  setBtns: PropTypes.func,
  btns: PropTypes.array,
  isGameOver: PropTypes.bool,
  setIsGameOver: PropTypes.func,
  setInfo: PropTypes.func,
};
