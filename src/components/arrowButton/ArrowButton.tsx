import arrowDown from '../../assets/arrowdown.svg';
import arrowRight from '../../assets/arrowright.svg';
import styles from './ArrowButton.module.css';

export const ArrowButton = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className={styles.arrowButton} onClick={handleClick}>
      <img src={`${open ? arrowDown : arrowRight}`} alt="arrow" />
    </button>
  );
};
