import styles from "./info.module.css";

export const InfoLayout = ({ info }) => {
  return <div className={styles.info}>{info}</div>;
};
