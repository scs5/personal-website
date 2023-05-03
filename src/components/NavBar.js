import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from 'react-scroll';
import resume from '../assets/Sam_Smith_Resume.pdf'
import "./NavBar.css"

const NavBar = () => {
  const scrollDuration = 500; // how long autoscroll takes
  const hideNavHeight = 300;  // height at which navbar disappears

  const [ showNav, setShowNav ] = useState(true);
  const [ scrollData, setScrollData ] = useState( {
    y: 0,
    lastY: 0
  })

  // handling disappearing navbar
  useEffect(() =>{
    const handleScroll = () => {
      setScrollData(prevState => {
        return {
          y: window.scrollY,
          lastY: prevState.y
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  });

  useEffect(() => {
    // show navbar if once scrolled down far enough
    if(scrollData.y > hideNavHeight){
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    // show navbar if user scrolls us
    if(scrollData.lastY < scrollData.y){
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [scrollData.y, scrollData.lastY]);

  return (
    <div>
      <nav className={showNav ? 'nav hidden-nav' : 'nav'}>
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
          <li>
            <a href={resume} target="_blank" rel='noopener noreferrer'>
              <i className="fa fa-file-pdf-o"></i>
              <span className='resume-link'>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
