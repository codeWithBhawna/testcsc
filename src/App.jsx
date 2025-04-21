import React from 'react'
import LoginForm from './pages/Login'
import Dashboard from './pages/Dashboard'
import Course from './pages/Course'
import CreateCourse from './pages/CreateCourse'; 
import './App.css'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<LoginForm/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/courses' element={<Course/>} />
    <Route path="/courses/create" element={<CreateCourse />} />
    </Routes>
  )
}

export default App
