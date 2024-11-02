import React from 'react'
import Login from './pages/login/Login'
import SignUp from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <SignUp />} />
        <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App