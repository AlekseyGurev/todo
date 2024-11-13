import styles from './NavButton.module.css';

interface INavButton {
  onClick: () => void;
  title: string;
}

export const NavButton = ({ onClick, title }: INavButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};
