import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
    const {todos, selectedTab} = props
    
    const filterTodoList = selectedTab === 'All' ? todos :
    selectedTab === 'Completed' ? todos.filter(val => val.completed) :
    todos.filter(val => !val.completed)

  return (
   <>
   {filterTodoList.map((todo, todoIndex) => {
    return (
        <TodoCard 
        key={todoIndex} 
        todoIndex={todos.findIndex(val => val.input === todo.input)}
        {...props}
        todo={todo}/>
    )
   })    }
   </>
  )
}

export default TodoList