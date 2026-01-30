import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Support from './Pages/Support'
import About from './Pages/About'
import Header from './Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App