import React, { useState } from 'react'
import ToDoForm from './components/ToDoForm'
import './components/ToDoForm.css'

const App = () => {
  return (
    <div className="to-do-form">
      <h2>To Do List</h2>
      <ToDoForm />
      
    </div>
  )
}

export default App