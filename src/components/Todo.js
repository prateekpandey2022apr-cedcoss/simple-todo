import React from "react";

const Todo = (_props) => {
  const { singleTodo } = _props;

  return <div>{singleTodo.text}</div>;
};

export default Todo;
