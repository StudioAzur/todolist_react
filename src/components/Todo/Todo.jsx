import React from "react";

function Todo({task}) {
  return (
    <li>
      {task.titre} {task.isDone ? "✔" : "❌"}
    </li>
  );
}

export default Todo;
