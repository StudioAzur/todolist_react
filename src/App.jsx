import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";


function App() {
  return (
    <div className="todo__app">
      <h1>My To do List</h1>
      <TodoForm />
    </div>
  );
}

export default App;
