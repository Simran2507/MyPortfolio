import React from 'react';
import NavBar from '../components/NavBar';
import HeroImg from'../components/HeroImg';
import Footer from '../components/Footer';
import ProjectCards from'../components/ProjectCards';
import AboutContent from '../components/AboutContent';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg/>
      <ProjectCards/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default Home;
