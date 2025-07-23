import React from 'react'
import { useState } from 'react'

function AddTodo({ addTodo }) {

  const [value, setValue] = useState("")
  
  const handleSubmit = (e) => {
    if (handleError(value)) return
    e.preventDefault();
    addTodo(value)
    setValue("")
  }

  const [error, setError] = useState("")

  const handleError = (value) => {
    if (value.trim() === "") {
      setError("Please enter a task")
      setTimeout(() => setError(""), 3000);
      return true
    }
    setError("");
    return false
  }
  
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='TodoItem' value={value} placeholder='Add New Task...' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='Todo-btn'>Add Now</button>
        {error && <div className="error-message">{error}</div>}
    </form>
  )
}

export default AddTodo