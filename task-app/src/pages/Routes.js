import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { Component, useContext } from 'react'
import Frontend from "./Frontend"
import Authentication from "./Authentication"
import Dashboard from "./Dashboard"
import { AuthContext } from "../context/AuthContext";
import PrivateRoute from "../components/PrivateRoute";
export default function Index() {

  const{ authentication } = useContext(AuthContext)
  const{ isAuthenticated}  = authentication
   console.log(isAuthenticated)

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/*" element ={<Frontend/>}/>
        <Route path="/authentication/*" element ={!isAuthenticated ? <Authentication/> : <Navigate to = "/dashboard"/>}/>
        <Route path="/dashboard/*" element ={<PrivateRoute Component={Dashboard}/>} />

    </Routes>
      
    </BrowserRouter>
  )
}
