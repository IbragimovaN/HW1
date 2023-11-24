import styles from "./InfoLayout.module.css";
import PropTypes from "prop-types";

export const InfoLayout = ({ info, isGameOver }) => {
  return (
    <div className={isGameOver ? styles.winnerText : styles.info}>{info}</div>
  );
};

InfoLayout.propTypes = {
  info: PropTypes.string,
};
