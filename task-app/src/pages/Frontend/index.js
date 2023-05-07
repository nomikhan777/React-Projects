import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Footer from './components/Footer';
import Header from './components/Header';

export default function index() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/'>
            <Route index element ={< Home />}/>

        </Route>

    </Routes>
    <Footer/>
      
    </>
  )
}
