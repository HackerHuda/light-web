import React from 'react'
import { Link } from "react-router-dom";
import './App.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='a'>Home</Link>
      <Link to="/about" className='a'>About</Link>
      <Link to="/project" className='a'>Projects</Link>
      <Link to="/contact" className='a'>Contact</Link>
      
    </div>
  )
}

export default Navbar
