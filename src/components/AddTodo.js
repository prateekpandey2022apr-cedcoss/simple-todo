import React, { useState } from "react";

const AddTodo = (_props) => {
  const { todos, setTodos } = _props;

  const [input, setInput] = useState("");

  /**
   *
   * @param {*} newTodo
   * @returns void
   *
   *  Create a new array with the new todo
   *
   */

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  /**
   * @returns void
   * Clear the input
   *
   */

  function clearInput() {
    setInput("");
  }

  /**
   *
   * @param {*} e
   * @returns void
   *
   * 1. Prevent the default behavior of the form
   * 2. Check if the input is empty
   * 3. Create a new todo object
   * 4. Add the new todo to the todos array
   * 5. Clear the input
   *
   */

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!input) {
      return;
    }

    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input.trim(),
      isCompleted: false,
    });

    clearInput();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        data-testid="input"
      />
      <button
        type="submit"
        disabled={input === ""}
        data-testid="addTodo"
        data-cy="addTodo"
      >
        Add Todo [@]
      </button>
    </form>
  );
};

export default AddTodo;
