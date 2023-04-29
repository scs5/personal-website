import React, { useState } from "react"
import "./Contact.css"

function Contact() {
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [message, setMessage ] = useState('');

  return (
    <section id="contact">
      <div className="contact-container">
        <form>
          <div className="form-group">
            <label htmlFor="name"> Your name
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email"> Your email
              <input 
                type="text" 
                id="email" 
                name="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="message"> Your message
              <textarea 
                type="text" 
                id="message" 
                name="message" 
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </label>
          </div>

          <button type="submit"> Send </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;