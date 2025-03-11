import React from 'react'

const Header = (props) => {

    const {todos} = props
    const todoLength = todos.length
    const isTaskPlural = todos.length != 1

    const taskOrTasks = isTaskPlural ? 'tasks' : 'task'

  return (
    <header>
        <h1 className='text-gradient'>You have {todoLength} open {taskOrTasks}</h1>
    </header>
  )
}

export default Header