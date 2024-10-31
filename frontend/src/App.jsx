import React from 'react'
import Login from './pages/login/Login'
import SignUp from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App