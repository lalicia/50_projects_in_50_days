import React from "react";

import "./TodoList.css";

function Todo({id, todoText, handleDeleteTodo, handleCrossed, isCrossed}) {

    return (
        <li id={id} className={isCrossed ? "todo-todo todo-completed" : "todo-todo"}
        onClick={handleCrossed}
        onContextMenu={(e) => handleDeleteTodo(e, id)}>
            {todoText}
        </li>
    )
}

export default Todo;