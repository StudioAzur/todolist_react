import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({tasks}) => {
  return (
    <>
      <p>il reste {tasks.length} tâches à faire</p>
      <ul>
        {tasks.map((task) => {
          return <Todo key={task.titre} task={task} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
