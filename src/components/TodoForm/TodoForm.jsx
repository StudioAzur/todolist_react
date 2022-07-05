import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

function TodoForm() {
  const [tasks, setTasks] = useState([
    { titre: "Faire une app", isDone: true },
    { titre: "Faire les composants", isDone: true },
    { titre: "Faire les modèles", isDone: false },
  ]);

  const handleClick = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setTasks(e.target.value);
  };

  return (
    <>
      <form action="" className="form__todo" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="add a todo"
          name="text"
          className="form__input"
          onChange={handleChange}
        ></input>
        <button className="form__button">Add a task</button>
      </form>
      <TodoList tasks={tasks}></TodoList>
    </>
  );
}
export default TodoForm;
