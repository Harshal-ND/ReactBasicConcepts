import { useState } from 'react'
import './App.css'
import './index.css';
import { TodoProvider } from './contexts';
import { useEffect } from 'react';
function App() {

  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now, ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((currentTodo) => (currentTodo.id === id ? todo : currentTodo)));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    );
  }

  useEffect(
    () => {

      const todos = JSON.parse(localStorage.getItem("todos"));
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    }, []
  )

  useEffect(

    () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, []
  )


  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>

      <h1>ToDo Application</h1>
    </TodoProvider>
  )
}

export default App
