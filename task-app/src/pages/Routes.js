import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import Frontend from "./Frontend"
export default function index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index="/*" element ={<Frontend/>}/>

    </Routes>
      
    </BrowserRouter>
  )
}
