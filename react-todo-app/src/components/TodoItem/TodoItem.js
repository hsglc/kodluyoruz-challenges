import React from "react";
import classes from './TodoItem.module.css';

function Todo({ content, id, isCompleted, onDelete, onComplete, index }) {
  const todoItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
  };

  const BtnStyle = {
    padding: ".5rem",
    margin: ".5rem",
    borderRadius: ".4rem",
    border: "none",
    cursor: "pointer",
    
  };

  

  return (
    <div style={todoItemStyle} className={isCompleted ? classes.todo : "" }>
      <p>{content}</p>
      <div>
        <button style={BtnStyle} onClick={onDelete.bind(null, id)} className={classes.delete}>
          X
        </button>
        <button style={BtnStyle} onClick={onComplete.bind(null,index)} className={classes.complete} >Complete</button>
      </div>
    </div>
  );
}

export default Todo;
