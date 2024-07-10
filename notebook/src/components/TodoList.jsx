import React from "react";
import TodoCard from "./TodoCard";

function TodoList (props) {
    const {todos} = props

    return (
        <div className="todoList-container" >
            <ul className="todoList-list" >
            {todos.map((todo, todoIndex) => {
                    return (
                        <TodoCard {...props} key={todoIndex} index={todoIndex}>
                            <p>{todo}</p>
                        </TodoCard>
                    )
            })}
            </ul>
        </div>
    )
}

export default TodoList;