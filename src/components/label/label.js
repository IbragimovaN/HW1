import styles from "./label.module.css";

export const Label = ({ color, children }) => {
  return (
    <label className={`${styles.label} ${styles[color]}`}>{children}:</label>
  );
};
