import React from "react";

function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props

    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer" >
                <button onClick={() => {
                    handleEditTodo(index)
                }} >
                    edit
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }} >
                    delete
                </button>
            </div>
        </li>
    )
}

export default TodoCard;