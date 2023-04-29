import React from "react"
import "./About.css"
import AboutImg from "../assets/mushroom.png"

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="left-section">
          <div className="about-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="right-section">
          <img src={AboutImg} alt="profile picture" />
        </div>
      </div>
    </section>
  )
}

export default About;