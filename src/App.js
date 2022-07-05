import "./App.css";
import React from "react";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <div className="todo__app">
      <h1>My To do List</h1>
      <TodoForm />
    </div>
  );
}

export default App;
