import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'

export default function index() {
  return (
    <Routes>
        <Route path='/'>
            <Route path='login' element = {<Login/>} />
            <Route path='register' element = {<Register/>}/>
            <Route path='forgot-password' element = {<ForgotPassword/>}>

        </Route>
      
    </Routes>
  )
}
