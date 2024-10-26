import React from "react";
import TodoCard from "./TodoCard";
import "./TodoList.css";

function TodoList(props) {
    const { todos } = props;

    return (
        <div className="todoList-container">
            <ul className="todoList-list">
                {todos.map((todo, todoIndex) => {
                    return (
                        <TodoCard {...props} key={todoIndex} index={todoIndex} creationDate={todo.creationDate}>
                            <h3>{todo.title}</h3>
                            <p>{todo.body}</p>
                            <p>Importance: {'★'.repeat(todo.importance)}{'☆'.repeat(3 - todo.importance)}</p>
                        </TodoCard>
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList;