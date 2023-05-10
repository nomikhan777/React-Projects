import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import Frontend from "./Frontend"
import Authentication from "./Authentication"
import Dashboard from "./Dashboard"
export default function index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/*" element ={<Frontend/>}/>
        <Route path="/authentication/*" element ={<Authentication/>}/>
        <Route path="/dashboard/*" element ={<Dashboard/>}/>

    </Routes>
      
    </BrowserRouter>
  )
}
