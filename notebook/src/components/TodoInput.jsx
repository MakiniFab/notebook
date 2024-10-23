import React, { useState } from "react";
import "./TodoInput.css";

function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue, setIsEditing, isEditing } = props;
    

    const handleAddClick = () => {
        handleAddTodos(todoValue);
        resetFields();
    };

    const resetFields = () => {
        setTodoValue({ title: "", body: "", importance: 0 });
        setIsEditing(false);
    };

    return (
        <header className="input-div">
            {!isEditing ? (
                <>
                    <svg
                        className="input-div-add-svg"
                        onClick={() => setIsEditing(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                    >
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                    <span className="input-div-span-txt" >Add New Note</span>
                </>
            ) : (
                <>
                    <svg
                        className="input-div-close-svg"
                        onClick={resetFields}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                    <input
                        className="input-div-input"
                        value={todoValue.title}
                        onChange={(e) => setTodoValue({ ...todoValue, title: e.target.value })}
                        placeholder="Add note title..."
                    />
                    <textarea
                        className="input-div-txt"
                        value={todoValue.body}
                        onChange={(e) => setTodoValue({ ...todoValue, body: e.target.value })}
                        placeholder="Add note..."
                    />
                    <div className="input-div-stars">
                        {Array.from({ length: 3 }, (_, index) => (
                            <span
                                className="input-div-span"
                                key={index}
                                onClick={() => setTodoValue({ ...todoValue, importance: index + 1 })}
                                style={{ cursor: 'pointer', color: todoValue.importance > index ? 'gold' : 'gray' }}
                                role="button"
                                aria-label={`Importance level ${index + 1}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <button className="input-div-btn" onClick={handleAddClick}>Add</button>
                </>
            )}
        </header>
    );
}

export default TodoInput;