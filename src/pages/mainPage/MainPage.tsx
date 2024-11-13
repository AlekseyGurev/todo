import { useEffect, useState } from 'react';
import { Title } from '../../components/title/Title';
import styles from './MainPage.module.css';
import { Form } from '../../components/from/Form';
import { Todos } from '../../components/todos/Todos';
import { TODOS } from '../../mocks/db';
import { Menu } from '../../components/menu/Menu';
import { ArrowButton } from '../../components/arrowButton/ArrowButton';

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export function MainPage() {
  const [isShow, setIsShow] = useState(true);
  const [todos, setTodos] = useState<ITodo[]>(TODOS);
  const [sortTodos, setSortTodos] = useState(todos);

  useEffect(() => {
    setSortTodos(todos);
  }, [todos]);

  const handleCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleSort = (flag: string) => {
    switch (flag) {
      case 'All':
        setSortTodos(todos);
        break;
      case 'Active':
        setSortTodos(todos.filter((todo) => !todo.completed));
        break;
      case 'Completed':
        setSortTodos(todos.filter((todo) => todo.completed));
        break;
    }
  };

  return (
    <section className={styles.container}>
      <Title title="todos" />
      <div className={styles.todoContainer}>
        <div className={styles.formWrapper}>
          <ArrowButton open={isShow} onClick={() => setIsShow(!isShow)} />
          <Form setTodos={setTodos} />
        </div>
        {isShow && todos.length > 0 && (
          <>
            <Todos todos={sortTodos} handleCompleted={handleCompleted} />
            <Menu
              setTodos={setTodos}
              todos={sortTodos}
              handleSort={handleSort}
            />
          </>
        )}
      </div>
    </section>
  );
}
