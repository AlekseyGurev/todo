import { useState } from 'react';

import styles from './Form.module.css';
import { ITodo } from '../../pages/mainPage/MainPage';

export const Form = ({
  setTodos,
}: {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.random().toString(16).slice(2),
        text,
        completed: false,
      },
    ]);
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
        placeholder="What needs to be done?"
        required
      />
    </form>
  );
};
