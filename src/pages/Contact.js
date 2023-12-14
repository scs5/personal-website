import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import "./Contact.css";
import { toast } from 'react-toastify';

function Contact() {
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [message, setMessage ] = useState('');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    if (!name || !email || !message) {
      toast.error("Please fill out all fields", { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }
  
    emailjs.sendForm('service_l4gl99c', 'template_zmgnccm', form.current, 'wgy1cMW6676ZpP1-y')
      .then((result) => {
        toast.success("Message sent successfully", { position: toast.POSITION.BOTTOM_RIGHT });
      }, (error) => {
        toast.error("Error sending message", { position: toast.POSITION.BOTTOM_RIGHT });
      });
  
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
      <h1 className="section-title"> Contact </h1>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} autoComplete="off" className="contact-form" action="https://getform.io/f/a82402de-b795-4e14-b31b-13dee7e02187" name="POST">
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

