import React from 'react'
import './App.css'
import Login from './components/login'
import Projects from './components/projects'
import { Routes,Route } from 'react-router-dom'
import Users from './components/users'
import New_project from './components/add_new_project'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Login />}/>
      <Route path='/projects' element={ <Projects />}/>
      <Route path='/add-new-project' element={ <New_project />}/>
      <Route path='/users' element={ <Users />}/>
    </Routes>

     
    </>
  )
}

export default App
