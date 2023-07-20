import './ProjectCards.css'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';

import React from 'react'

function ProjectCard({id,imgs,title,discription,github,liveServer}){
  const [readmore,setReadmore]= useState(false);
    const info = readmore ? discription : `${discription.substring(0,200)}`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
  return(
    <div>
      <div className="project-card">
            <img src={imgs} alt="Project"></img>
            <h2 className="projectTitle">{title}</h2>
            <div className="project-details">
              <p>{info}<span className="grow" onClick={readmoreHandler}>
                    {readmore ? ` ...Show less` : ` ...Read more`}
                </span></p>
              <div className="pro-buttons">
                <NavLink to={github} className="source-btn">Git Hub</NavLink>
                <NavLink to={liveServer} className="source-btn">Live Server</NavLink>
              </div>
            </div> 
      </div>
    </div>
  )
}

export default ProjectCard;