import styles from "./GameOverLayout.module.css";
import PropTypes from "prop-types";

export const GameOverLayout = ({ clickNewGame, isGameOver }) => {
  if (isGameOver) {
    return (
      <button className={styles.gameOver} onClick={() => clickNewGame()}>
        Начать игру заново
      </button>
    );
  }
};

GameOverLayout.propTypes = {
  clickNewGame: PropTypes.func,
  isGameOver: PropTypes.bool,
};
