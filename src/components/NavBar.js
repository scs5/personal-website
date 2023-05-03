import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from 'react-scroll';
import "./NavBar.css"

const NavBar = () => {
  const scrollDuration = 500;

  return (
    <div>
      <nav className='nav'>
        <HashLink to="#home" className='site-logo' onClick={() => scroll.scrollTo(document.querySelector('#home').offsetTop, { duration: scrollDuration })}>
          <img src={require('../assets/mushroom.png')} alt='logo' className='logo'/>
        </HashLink>
        <ul>
          <li>
            <HashLink to="#home" onClick={() => scroll.scrollTo(document.querySelector('#home').offsetTop, { duration: scrollDuration })}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="#about" onClick={() => scroll.scrollTo(document.querySelector('#about').offsetTop, { duration: scrollDuration })}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="#contact" onClick={() => scroll.scrollTo(document.querySelector('#contact').offsetTop, { duration: scrollDuration })}>
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
