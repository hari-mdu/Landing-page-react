import React from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Ownership from '../assets/img/ownership.PNG'
import Passionate from '../assets/img/passionate.PNG'
import Respectful from '../assets/img/respectful.PNG'
import Unified from '../assets/img/unified.PNG'
import ContactUS from '../components/ContactUS'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'

const AboutUs = () => {
  return (
    <div>
        <Header/>

        <div class='about-us'>
            <Container className='about-container'>
                <div class="about-head">
                    <span>ABOUT</span>
                    <h1>Dedicated to delivering excellence</h1>
                    <p>Everyone has a story. Here is ours.</p>
                </div>

                <div class="about-content row">
                    <div className='about-img col'>
                        <img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/charlesdeluvio-Lks7vei-eAg-unsplash.jpg'></img>
                    </div>
                    <div className='item col offset-2'>
                        <h5>The Begining</h5>
                        <p>The Tecnologia journey began in 1995 when two college friends, John Salivan and Kris Klopperman got together and started selling computers and engineering calculators.</p>
                    </div>
                </div>

                <div class="about-content row">
                    <div className='item col '>
                        <h5>Mission</h5>
                        <p>At Tecnologia, we’re on a mission to bring together the personal service of local IT providers with the power of a national network. We believe that’s simpler than it sounds. Our offices offer high-touch IT services that clients love from highly experienced local team members.</p>
                    </div>
                    <div className='about-img col offset-2'>
                        <img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/austin-distel-wD1LRb9OeEo-unsplash.jpg'></img>
                    </div>
                    
                </div>

                <div class="about-content row">
                    <div className='about-img col'>
                        <img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg'></img>
                    </div>
                    <div className='item col offset-2'>
                        <h5>We are global</h5>
                        <p>Our national network allows us to offer best-in-class services like dedicated vCIOs, specialized security and compliance advisory services, a 24/7 help desk, and more.</p>
                    </div>
                </div>

                <div className='description'>
                    <span>WHY US</span>
                    <p>We understand that business can be chaotic. That’s where we come in. We’re focused on adding some much-needed balance to the mix. We accomplish that by forging real partnerships with our clients. When you work with us, you’re working with a team who understands your pain points and your goals. We’ll help you find order in the midst of the chaos.</p>
                    <a href='#'>Learn more</a>
                </div>
            </Container>
        </div>

        <div class="effect-banner">
            <Container className='eb-container'>
                <div class="eb-content">
                    <span>OUR CORE VALUES</span>
                    <p className='col-9'>Our culture is built around five key attributes that differentiate us from our competition.</p>
                    <div class='img-effect'>
                        <img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/shape-dots.svg'></img>
                    </div>
                </div>
                
            </Container>
          </div>

          <div class='about'>
            <Container  class='about-container'>
          
                <div class='items row border-0'>
                    <div class="content col">
                        <img src={Passionate} alt=""/>
                        <h2>Passionate</h2>
                        <p>We are intensely enthusiastic about providing a superior experience.</p>
                    </div>
                    <div class="content col offset-1">
                        <img src={Respectful} alt=""/>
                        <h2>Respectful</h2>
                        <p>We are polite and kind to one another, even when it gets tough.</p>
                    </div>
                    <div class="content col offset-1">
                        <img src={Ownership} alt=""/>
                        <h2>Ownership</h2>
                        <p>We are empowered to do our jobs and work towards a common goal.</p>
                    </div>
                    <div class="content col offset-1">
                        <img src={Unified} alt=""/>
                        <h2>Unified</h2>
                        <p>We work as a team and trust each other to create a seamless experience.</p>
                    </div>
                </div>    
            </Container>
          </div>

          <Container fluid className='team-meet bg-info'>
          <h2>A team built on experience</h2>
          <p>We’re continuing to build our network nationally, bringing together a vibrant team with best-in-class service and technical skills alike. With more than 800 employees across the US, our team is growing fast.</p>
          <a href='#' class="btn">Meet the team</a>
          <img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/bg-dot-shape.svg'/>
          </Container>

          <Container>
            <div className='together row'>
                <div className='content-1 col-4'>
                    <h3>Better together</h3>
                    <p>We know that work is important, but so is play! We respect all of our partnerships, and we make every effort to engage in fun ways that solve critical problems and leave a smile on your face at the same time.</p>
                    <p>We love our job and love helping our clients. Life is just too short to not enjoy every minute!</p>

                    <a href='#' className='btn'>Get in touch</a>
                </div>
                <div className='content-2 col offset-1'>
                    <img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/campaign-creators-gMsnXqILjp4-unsplash.jpg'/>
                </div>
            </div>
          </Container>

          <ContactUS/>
          <Footer1/>
          <Footer2/>
    </div>

    
  )
}

export default AboutUs