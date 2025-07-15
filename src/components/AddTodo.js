import React from 'react'
import { useState } from 'react'

function AddTodo({ addTodo }) {

  const [value, setValue] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }
  
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='TodoItem' value={value} placeholder='Add New Task...' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='Todo-btn'>Add Now</button>
    </form>
  )
}

export default AddTodo