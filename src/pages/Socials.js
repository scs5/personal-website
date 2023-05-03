import React from "react"
import "./Socials.css"

function Socials() {
  return (
    <div className="social-menu">
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/sam-cooper-smith/"><i class="fa-brands fa-linkedin"></i></a>
        <span>LinkedIn</span>
      </div>
      <div className="social-icon">
        <a href="https://github.com/scs5"><i class="fa-brands fa-github"></i></a>
        <span>Github</span>
      </div>
    </div>
  )
}

export default Socials;