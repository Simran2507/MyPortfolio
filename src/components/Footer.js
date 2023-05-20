import React from 'react'
import './Footer.css'
import {FaHome,FaPhone,FaMailBulk} from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "black", marginRight: "2rem"}}/>
            <div>
              <p>584/85 Laxmi Narayan Road</p>
              <p></p>
              <p>Mutthiganj, Prayagraj, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{color: "black", marginRight : "2rem"}}/>
              +91 8303676655
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="mail">
            <h4>
              <FaMailBulk size={20} style={{color: "black", marginRight : "1rem"}}/>
              simranjaiswal2530@gmail.com
            </h4>
          </div>          
          <div className="socials">

            <Link to="https://www.linkedin.com/in/simran-jaiswal25/">
              <BsLinkedin size={25} style={{color:"black",marginRight: "2rem"}}/>
            </Link>
            
            <Link to="https://github.com/Simran2507">
              <BsGithub size={25} style={{color:"black",marginRight: "2rem"}}/>
            </Link>

            <Link to="https://www.codechef.com/users/simran2507">
              <SiCodechef size={25} style={{color: "black", marginRight: "2rem"}}/> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;