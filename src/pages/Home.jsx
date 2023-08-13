import React, { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Statistics from '../components/Statistics'
import EffectBanner from '../components/EffectBanner'
import About from '../components/About'
import Solutions from '../components/Solutions'
import Industry from '../components/Industry'
import Challenges from '../components/Challenges'
import Stories from '../components/Stories'
import Testimonials from '../components/Testimonials'
import ContactUS from '../components/ContactUS'
import Partner from '../components/Partner'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'

const Home = () => {
    return (
      <div>
          <Header/>
          <Banner/>
          <Statistics/>
          <EffectBanner/>
          <About/>
          <Solutions/>
          <Industry/>
          <Challenges/>
          <Stories/>
          <Testimonials/>
          <ContactUS/>
          <Partner/>
          <Footer1/>
          <Footer2/>


      </div>
      
      
    )
}

export default Home

