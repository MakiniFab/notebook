import React from "react";

function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props

    return (
        <div className="todoCard-conatiner" >
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
        </div>
    )
}

export default TodoCard;