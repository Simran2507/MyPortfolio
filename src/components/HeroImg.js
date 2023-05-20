import './HeroImg.css';
import  IntroImg from '../Assets/intro-bg.jpg'
import {Link} from 'react-router-dom';

import React from 'react'

function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-image" src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="image"/>
        </div>
        <div className="content">
            <p >Simran Jaiswal</p>
            <h1>Front End Developer</h1>
            <div>
               <Link to="/project" className="btn">Projects</Link>
               <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;