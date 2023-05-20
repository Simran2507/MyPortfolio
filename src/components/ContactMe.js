import './ContactMe.css'
import React from 'react'

const ContactMe = () => {
  return (
    <div className="contactForm">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label >Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea placeholder='Type your message here.'></textarea>
            <button className="btn">Submit</button>
        </form>      
    </div>
  )
}

export default ContactMe
