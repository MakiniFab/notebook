import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState({ title: "", body: "", importance: 0 });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = editingIndex !== null
        ? todos.map((todo, index) => index === editingIndex ? newTodo : todo)
        : [...todos, newTodo];

    persistData(newTodoList);
    setTodos(newTodoList);
    if (editingIndex !== null) {
        resetEditing(); 
    }
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const todoToEdit = todos[index];
    setTodoValue(todoToEdit);
    setIsEditing(true)
    setEditingIndex(index); 
  }

  function resetEditing() {
    setEditingIndex(null);
    setTodoValue({ title: "", body: "", importance: 0 }); 
  }

  useEffect(() => {
    if (!localStorage) return;

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) return;

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        setIsEditing={setIsEditing}
        isEditing={isEditing}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;