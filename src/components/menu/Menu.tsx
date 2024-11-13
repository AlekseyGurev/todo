import { ITodo } from '../../pages/mainPage/MainPage';
import { NavButton } from '../navButton/NavButton';
import { TotalLeft } from '../totalLeft/TotalLeft';
import styles from './Menu.module.css';

interface IMenuProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  handleSort: (flag: string) => void;
}

export const Menu = ({ setTodos, todos, handleSort }: IMenuProps) => {
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const getTotalLeft = (todos: ITodo[]) => {
    return todos.reduce(
      (total: number, todo: ITodo): number =>
        !todo.completed ? total + 1 : total,
      0
    );
  };

  return (
    <div className={styles.menu}>
      <TotalLeft totalLeft={getTotalLeft(todos)} />
      <div>
        <NavButton title="All" onClick={() => handleSort('All')} />
        <NavButton title="Active" onClick={() => handleSort('Active')} />
        <NavButton title="Completed" onClick={() => handleSort('Completed')} />
      </div>
      <NavButton title="Clear completed" onClick={clearCompleted} />
    </div>
  );
};
