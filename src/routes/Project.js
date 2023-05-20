import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SecondHeroImg from '../components/SecondHeroImg'
import ProjectCards from '../components/ProjectCards';

const Project = () => {
  return (
    <div>
      <NavBar/>
      <SecondHeroImg heading="My Projects" text=" A quick sneak peek to my most recent work"/>
      <ProjectCards/>
      <Footer/>      
    </div> 
  )
}

export default Project
