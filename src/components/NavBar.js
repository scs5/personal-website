import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from 'react-scroll';
import resume from '../assets/Sam_Smith_Resume.pdf';
import './NavBar.css';

const NavBar = () => {
  const scrollDuration = 500; // how long autoscroll takes
  const navbarHeight = 80; // height of the navbar in pixels
  const [dropdown, setDropdown] = useState(false);
  
  return (
    <div>
      <nav className='nav'>
        <HashLink
          to="#home"
          className="site-logo"
          onClick={() =>
            scroll.scrollTo(document.querySelector('#home').offsetTop - navbarHeight, {
              duration: scrollDuration,
            })
          }
        >
          <img src={require('../assets/mushroom.png')} alt="logo" className="logo" />
        </HashLink>

        <button className="toggle-button" onClick={() => setDropdown(!dropdown)}>
          <i className="fa fa-bars"></i>
        </button>

        <div className={`navbar-links ${dropdown ? 'active' : ''}`}>
          <ul>
            <li>
            <HashLink
              to="#home"
              onClick={() => {
                scroll.scrollTo(document.querySelector('#home').offsetTop - navbarHeight, {
                  duration: scrollDuration,
                });
                setDropdown(!dropdown);
              }}
            >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#about"
                onClick={() => {
                  scroll.scrollTo(document.querySelector('#about').offsetTop - navbarHeight, {
                    duration: scrollDuration,
                  });
                  setDropdown(!dropdown);
                }}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#contact"
                onClick={() => {
                  scroll.scrollTo(document.querySelector('#contact').offsetTop - navbarHeight, {
                    duration: scrollDuration,
                  });
                  setDropdown(!dropdown);
                }}
              >
                Contact
              </HashLink>
            </li>
            <li>
              <a href={resume} target="_blank" rel="noopener noreferrer" className='resume-button'>
                <i className="fa fa-file-pdf-o"></i>
                <span className="resume-link">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
