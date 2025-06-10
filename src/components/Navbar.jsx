import {Link, NavLink} from 'react-router-dom'
import './../index.css'
import './../pages/Pages.css'

const Navbar = () => {
  return(
    <nav className="navbar">
      <Link to="/" className="logo">TIDEFORM STUDIO</Link>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/work">Work</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar