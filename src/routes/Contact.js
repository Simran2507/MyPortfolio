import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SecondHeroImg from '../components/SecondHeroImg';
import ContactMe from '../components/ContactMe';
const Contact = () => {
  return (
    <div>
     <NavBar/>
     <SecondHeroImg heading=" Contact" text="Let's Have a chat"/>
     <ContactMe></ContactMe>
     <Footer/>
    </div>
  )
}

export default Contact
