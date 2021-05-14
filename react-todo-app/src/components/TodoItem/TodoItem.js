import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  return <>{content}</>;
}

export default Todo;
