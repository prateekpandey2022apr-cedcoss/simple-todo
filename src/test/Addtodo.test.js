import React, { useState } from "react";
import { render, cleanup, screen } from "@testing-library/react";
import AddTodo from "../components/AddTodo";

afterEach(cleanup);

it("should be empty", () => {
  render(<AddTodo />);
  expect(screen.getByTestId("input")).toHaveTextContent("");
});

it("should be disabled", () => {
  render(<AddTodo />);
  expect(screen.getByTestId("addTodo")).toBeDisabled();
});

// set input field value to "hello"
// check if the input value is "hello"
// check if the button is enabled
// when button is clicked todos array should have a new todo object
// push the new todo object to the todos array
it("should be enabled", () => {
  const addTodoComp = <AddTodo />;
  render(addTodoComp);
  const input = screen.getByTestId("input");
  const button = screen.getByTestId("addTodo");
  expect(button).toBeDisabled();
  input.value = "hello";

  // push the new todo to the todos array
  //   addTodoComp.todos.push({
  //     id: Math.floor(Math.random() * 10000),
  //     text: input.value.trim(),
  //     isCompleted: false,
  //   });

  expect(addTodoComp.todos).toHaveLength(10);
  expect(input).toHaveValue("hello");
  expect(button).toBeDisabled();
});
