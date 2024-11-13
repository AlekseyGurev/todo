import { CheckBox } from '../checkBox/CheckBox';
import styles from './Todo.module.css';

export const Todo = ({
  text,
  completed,
  id,
  handleCompleted,
}: {
  text: string;
  completed: boolean;
  id: string;
  handleCompleted: (id: string) => void;
}) => {
  return (
    <li className={styles.todo}>
      <CheckBox
        completed={completed}
        handleCompleted={handleCompleted}
        id={id}
      />
      <p
        className={
          completed
            ? [styles.textCompleted, styles.text].join(' ')
            : `${styles.text}`
        }
      >
        {text}
      </p>
    </li>
  );
};
