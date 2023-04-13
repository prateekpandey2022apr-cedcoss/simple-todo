import "./App.css";
import { useState } from "react";
import { render, cleanup } from "@testing-library/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  // todo usestate

  const [todos, setTodos] = useState([]);

  return (
    <>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
