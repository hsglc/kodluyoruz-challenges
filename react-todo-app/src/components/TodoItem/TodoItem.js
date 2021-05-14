import React from "react";
import "./TodoItem.css";

function Todo(props) {

  

  const { content } = props;
  return (
    <>
      {content}

      <button onClick={props.deleteHandler}>X</button>
    </>
  );
}

export default Todo;
