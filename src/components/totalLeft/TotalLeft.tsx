import styles from './TotalLeft.module.css';

export const TotalLeft = ({ totalLeft }) => {
  return <p className={styles.text}>{totalLeft} items left</p>;
};
