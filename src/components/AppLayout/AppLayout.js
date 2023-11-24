import { GameOver } from "../GameOverLayout/GameOver";
import { InfoLayout } from "../InfoLayout/InfoLayout";
import styles from "./AppLayout.module.css";
import PropTypes from "prop-types";

export const AppLayout = ({
  setBtns,
  btns,
  onClick,
  info,
  isGameOver,
  setIsGameOver,
  setInfo,
}) => {
  return (
    <div className={styles.container}>
      <GameOver
        btns={btns}
        setBtns={setBtns}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        setInfo={setInfo}
      />
      <InfoLayout info={info} isGameOver={isGameOver} />
      <div className={styles.wrapper}>
        {btns.map((item, index) => (
          <button
            onClick={() => onClick(item, index)}
            id={index}
            key={index}
            value={item}
            className={
              item === "X"
                ? styles.strokeX
                : item === "0"
                ? styles.stroke0
                : styles.btnBg
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  setBtns: PropTypes.func,
  btns: PropTypes.array,
  onClick: PropTypes.func,
  info: PropTypes.string,
  isGameOver: PropTypes.bool,
  setIsGameOver: PropTypes.func,
  setInfo: PropTypes.func,
};
