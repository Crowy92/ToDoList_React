import React from "react";
//Import components
import Todo from "./Todo";

const ToDoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo key={todo.id} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;