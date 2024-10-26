import React from "react";
import "./TodoCard.css";

function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo, creationDate } = props;

    return (
        <div className="todoCard-container">
            <li className="todoCard-item">
                {children}
                <p id="quote" >{new Date(creationDate).toLocaleString()}</p> 
                <div className="actionsContainer">
                    <button onClick={() => handleEditTodo(index)}>Edit</button>
                    <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                </div>
            </li>
        </div>
    );
}

export default TodoCard;