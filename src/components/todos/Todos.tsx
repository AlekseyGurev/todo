import { ITodo } from '../../pages/mainPage/MainPage';
import { Todo } from '../todo/Todo';
import styles from './Todos.module.css';

export const Todos = ({
  todos,
  handleCompleted,
}: {
  todos: ITodo[];
  handleCompleted: (id: string) => void;
}) => {
  return (
    <div>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            handleCompleted={handleCompleted}
          />
        ))}
      </ul>
    </div>
  );
};
