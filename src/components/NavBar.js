import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <nav className='nav'>
        <Link to="#home" className='site-logo'>
          <img src={require('../assets/mushroom.png')} alt='logo' className='logo'/>
        </Link>
        <ul>
          <li>
            <Link to="#about">
              About
            </Link>
          </li>
          <li>
            <Link to="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;