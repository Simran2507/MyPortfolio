import './AboutContent.css';
import {Link} from 'react-router-dom'
import React from 'react'

const AboutContent = () => {
  return (
   <div className ="container"> 
    <div className="about">     
      <div className="about-left">
        <h1>Who Am I </h1>
        <p>A highly motivated front-end developer,seeking job role in a collaborative and dynamic work environment that encourages professional growth and development. I have a strong foundation in HTML, CSS, and JavaScript, and I am eager to continue learning and staying up-to-date with the latest industry trends and technologies.</p>
      </div>
      <div className="about-right">
        <h1>Skills</h1>
        <ul className="skill-list">
          <li className="skill">C++</li>
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">Java Script</li>
          <li className="skill">React.js</li>
        </ul>
      </div>
    </div>
    <div className="go-to-contact">
      <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>
   </div> 
  )
}

export default AboutContent
