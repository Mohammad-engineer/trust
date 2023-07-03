import React from 'react'
import './App.css'
import Login from './components/login'
import Projects from './components/projects'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Login />}/>
      <Route path='/projects' element={ <Projects />}/>
    </Routes>

     
    </>
  )
}

export default App
