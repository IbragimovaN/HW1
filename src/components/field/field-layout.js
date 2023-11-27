import { PLAYER_SIGN } from "../../constants";
import styles from "./field.module.css";
import { WIN_COMBS } from "../../constants";

export const checkWin = (field, currentPlayer) => {
  WIN_COMBS.some((item) => {
    return item.every((cellIndex) => field[cellIndex] === currentPlayer);
  });
};

export const FieldLayout = ({ field, onCellClick }) => {
  return (
    <div className={styles.field}>
      {field.map((cellPlayer, index) => (
        <button
          key={index}
          onClick={() => onCellClick(index)}
          className={WIN_COMBS.forEach((item) => {
            item.forEach((cellIndex) =>
              cellPlayer === field[cellIndex] ? styles.win : "",
            );
          })}
        >
          {PLAYER_SIGN[cellPlayer]}
        </button>
      ))}
    </div>
  );
};
