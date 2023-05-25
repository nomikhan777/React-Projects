import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Footer from './components/Footer';
import Header from './components/Header';
import Todoss from '../Frontend/Todoss'

export default function index() {
  return (
    <>
    <Header/>
    <main>
    <Routes>
        <Route path='/'>
            <Route index element ={< Home />}/>
            <Route path="todoss" element ={<Todoss/>}/>
            <Route path="about" element ={< About />}/>
            <Route path="contact" element ={<Contact/>}/>

        </Route>

    </Routes>
    </main>
    <Footer/>
      
    </>
  )
}
