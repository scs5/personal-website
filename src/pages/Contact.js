import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [message, setMessage ] = useState('');

  return (
    <section id="contact">
      <h1 className="section-title"> Contact </h1>

      <div className="contact-container">
        <form autoComplete="off" className="contact-form">
          <div className="form-row">
            <div className="form-col">
              <div className="form-group name">
                <label htmlFor="name"> Your name
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoComplete="nope"
                  />
                </label>
              </div>

              <div className="form-group email">
                <label htmlFor="email"> Your email
                  <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="nope"
                  />
                </label>
              </div>
            </div>

            <div className="form-col">
              <div className="form-group message">
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
            </div>
          </div>

          <div className="button-container">
            <button type="submit" className="send-button">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;

