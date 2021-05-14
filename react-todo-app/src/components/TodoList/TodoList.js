import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <>
              <li
                className={
                  !todo.isCompleted ? "list-group-item" : "list-group-item line"
                }
                key={todo.id}
                onClick={props.styleHandler.bind(null, todo.id)}
              >
                <TodoItem {...todo} key={todo.id} />
              </li>
              <button className="button" onClick={props.deleteHandler.bind(null, todo.id)}>
                X
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
