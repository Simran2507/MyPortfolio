import React from 'react';
import NavBar from '../components/NavBar';
import HeroImg from'../components/HeroImg';
import Footer from '../components/Footer';
import ProjectCards from'../components/ProjectCards';
import AboutContent from '../components/AboutContent';

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeroImg></HeroImg>
      <ProjectCards></ProjectCards>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  )
}

export default Home;
