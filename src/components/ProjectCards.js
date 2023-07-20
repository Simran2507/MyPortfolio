import ProjectCard from './IndividualCard'
import Data from './Data.js'
import React from 'react'

const ProjectCards = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-cntainer">
            {Data.map((val,ind) => {
              return(
                <ProjectCard
                key={ind}
                imgs={val.imgs}
                title={val.title}
                discription={val.discription}
                github={val.github}
                liveServer={val.liveServer}
                />
              )
            })}
        </div>      
    </div>
  )
}

export default ProjectCards;
