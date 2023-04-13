import React from "react";
import Todo from "./Todo";

/**
 *
 * @param {*} _props
 * @returns  JSX.Element
 * 1. Destructure the todos array from the props
 * 2. Return the TodoList component
 * 3. Map over the todos array and return a Todo component for each todo
 */

const TodoList = (_props) => {
  const { todos } = _props;
  return (
    <div>
      <div>TodoList</div>
      {todos.map((singleTodo) => (
        <Todo key={singleTodo.id} singleTodo={singleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
