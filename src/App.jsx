import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

const App = () => {
  // const todos = [
  //   {input: 'Meditate Daily', completed: true},
  //   {input: 'Program Daily', completed: true},
  //   {input: 'Exercise Daily', completed: false},
  //   {input: 'Fasting', completed: false}
  // ]

  const [todos, setTodos] = useState([])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, { input: newTodo, completed: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleCompletedTodo(index){
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['completed'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleSaveData(currentTodos){
    localStorage.setItem('todo-app', JSON.stringify({todos : currentTodos}))
  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  useEffect(() => {
    if(!localStorage || !localStorage.getItem('todo-app')) { return }

    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
    
  }, [])

  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoList handleCompletedTodo={handleCompletedTodo} todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App