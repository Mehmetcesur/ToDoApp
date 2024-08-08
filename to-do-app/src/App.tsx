import { useState } from 'react'

import './App.css'
import TodoCreaate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
      <div>
        <TodoCreaate/>
        <TodoList/>
      </div>
      
    </>
  )
}

export default App
