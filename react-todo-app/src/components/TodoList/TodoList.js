import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li
              className={
                !todo.isCompleted ? "list-group-item" : "list-group-item line"
              }
              key={todo.id}
              onClick={props.styleHandler.bind(null, todo.id)}
            >
              <TodoItem
                {...todo}
                key={todo.id}
                deleteHandler={props.deleteHandler.bind(null, todo.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
