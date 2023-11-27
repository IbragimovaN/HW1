import styles from "./game.module.css";
import { Info } from "./components/info/info";
import { Field } from "./components/field/field";

export function GameLayout({
  status,
  currentPlayer,
  field,
  onCellClick,
  onClickRestart,
}) {
  return (
    <div className={styles.game}>
      <Info status={status} currentPlayer={currentPlayer} />
      <Field field={field} onCellClick={onCellClick} />
      <button onClick={() => onClickRestart()}>начать заново</button>
    </div>
  );
}
