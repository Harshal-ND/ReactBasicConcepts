import React from 'react'
import { useState } from 'react';
import { useTodo} from '../contexts/ToDoContext'

const TodoForm = () => {

    const [todo, setTodo]=useState([]);

    const {addTodo}=useTodo();

  return (
    
    <div>TodoForm</div>
  )
}

export default TodoForm;