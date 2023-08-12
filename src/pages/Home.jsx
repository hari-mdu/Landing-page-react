import React, { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Statistics from '../components/Statistics'
import EffectBanner from '../components/EffectBanner'
import About from '../components/About'

const Home = () => {
    return (
      <div>
          <Header/>
          <Banner/>
          <Statistics/>
          <EffectBanner/>
          <About/>

      </div>
      
      
    )
}

export default Home

