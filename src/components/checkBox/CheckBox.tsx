import styles from './CheckBox.module.css';

export const CheckBox = ({
  completed,
  handleCompleted,
  id,
}: {
  completed: boolean;
  handleCompleted: (id: string) => void;
  id: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => handleCompleted(id)}
        className={
          completed
            ? [styles.checkBox, styles.check].join(' ')
            : styles.checkBox
        }
      />
    </div>
  );
};
