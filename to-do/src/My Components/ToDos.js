import React from 'react'
import{TodoItem} from "../My Components/TodoItem"

export const ToDos = (props) => {
  return (
      <div className='container'>
      <h3 className=' my -3'>ToDos List</h3>
      {props.todos.length === 0 ? "no items to display" :
        props.todos.map((todo, i) => {
          return <TodoItem key={i} todos={todo} onDelete={props.onDelete} />
        })
    }
      
    </div>
  )
}
