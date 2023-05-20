import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import SecondHeroImg from '../components/SecondHeroImg'
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
     <NavBar/>
     <SecondHeroImg heading="About Me" text="My Breif Introduction"/>
     <AboutContent/>
     <Footer/>
    </div>
  )
}

export default About
