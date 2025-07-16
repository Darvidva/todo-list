import React, { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './TodoList'

uuidv4()
function TodoWrap() {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
    })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleEdit = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, task: newText } : todo
      )
    )
  }

  const handleComplete = (id) => {
    setTodos((prev) => 
      prev.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed} : todo
      )
    )
  }

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  
  const handleAdd = (text) => {
    setTodos([...todos, {id: uuidv4(), task: text, completed: false}])
  }

  return (
    <div>
        <AddTodo addTodo={handleAdd} />
        <TodoList todos={todos} 
        onEdit={handleEdit} 
        onComplete={handleComplete} 
        onDelete={handleDelete} />
    </div>
  )
}

export default TodoWrap