import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './../index.css'
import './../pages/Pages.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();

  return(
    <nav className="navbar">
      <Link to="/" className="logo">TIDEFORM STUDIO</Link>
      
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {location.pathname !== '/' &&(
          <li><NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink></li>
        )}
        <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
        <li><NavLink to="/work" onClick={() => setIsOpen(false)}>Work</NavLink></li>
        <li><NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar