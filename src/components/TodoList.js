import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onDelete, onComplete, onEdit }) {
  return (
      <ul className='todoList'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id} todo={todo} onDelete={ onDelete } onComplete={onComplete} onEdit={onEdit}
          />
        ))}
      </ul>
  )
}

export default TodoList