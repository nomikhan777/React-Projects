import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Login from '../pages/Authentication/login/Login'

export default function PrivateRoute(props) {

    const {authentication} = useContext(AuthContext)
    const{isAuthenticated} = authentication

    const {Component} = props

    if (!isAuthenticated)
    return <Login/>
  return (
    <Component/>
  )
}
