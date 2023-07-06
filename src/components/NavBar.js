import './NavBar.css'
import {useState} from 'react'
import {Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa';
import React from 'react'

function NavBar() {

  const[click,setClick]=useState(false);
  function tapHandler(){
    setClick(!click);
  }  

  const[color,setColor]=useState(false);
  function changeColor(){
    if(window.scrollY >= 100){
        setColor(true);
    }else{
        setColor(false);
    }
  }
  window.addEventListener("scroll" , changeColor);
  return (
    <div className={color ? "header header-bg" :"header"}>
        <Link to="./"><h1>Portfolio</h1></Link>
        <ul className= {click ? ("Menu") : ("Menu active")}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div class ="menuBar" onClick={tapHandler} >
            {click ? (<FaBars size={20} style={{color: "black"}}></FaBars>) : (<FaTimes size={20} style={{color: "black"}}></FaTimes>)}            
        </div>
    </div>
  )
}

export default NavBar;