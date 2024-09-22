import React, { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import { Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Home } from './components/pages/Home.jsx'
import AboutMe from './components/pages/AboutMe.jsx'
import Portfolio from './components/pages/Portfolio.jsx';
import Resume from './components/pages/Resume.jsx';
import Hobbies from './components/pages/Hobbies.jsx';
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path ="/" exact element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes> 
      <Footer />
    </div>
  )
}