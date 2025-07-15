import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ todo, onDelete, onComplete, onEdit }) {

  const [isEditing, setIsEditing] = useState(false)
  const [editInput, setEditInput] = useState(todo.task)

  const handleSave = () => {
    onEdit(todo.id, editInput)
    setIsEditing(false)
  }

  return (
    <div className='todoItem'>
      {isEditing ? (
        <input type='text' value={editInput} onChange={(e) => 
          setEditInput(e.target.value)
        } onKeyDown={(e) => {
          if (e.key === "Enter")
            handleSave()
        }}
        autoFocus
        />
      ) : (
      <span className= {todo.completed ? "completed" : ""}>
        {todo.task}
      </span>
      )}
      
      <div className='action-btn'>
        {isEditing ? (<button onClick={handleSave} title='Save'><FontAwesomeIcon icon={faSave} /></button>) : (
        <button onClick={() =>setIsEditing(true)} title='Edit'><FontAwesomeIcon icon={faEdit} /></button>)}
        <button onClick={() =>onComplete(todo.id)} title='Completed'><FontAwesomeIcon icon={faCheck} /></button>
        <button onClick={() =>onDelete(todo.id)} title='Delete'><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </div>
  )
}

export default TodoItem