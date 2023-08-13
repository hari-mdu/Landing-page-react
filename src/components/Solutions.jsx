import React from 'react'
import '../css/custom.css';
import Container from 'react-bootstrap/Container';
import Cloud from '../assets/img/cloud.PNG';
import Consult from '../assets/img/consult.PNG';
import Cyber from '../assets/img/cyber.PNG';
import Web from '../assets/img/web.PNG';
import Mobile from '../assets/img/mobile.PNG';
import Manage from '../assets/img/manage.PNG';






const Solutions = () => {
  return (
    <div class="solutions bg-info">
        <Container fluid className='solutions-container'>
            <span>HOW WE DO</span>
            <h1>Solutions</h1>

            <div class="container-1">
                
                <div class="content card">
                    <div class="card-body">
                        <img src={Manage} class="card-img-top" alt=""/>
                        <h2 class="card-title">Managed Services</h2>
                        <p class="card-text">Free up your internal resources to focus on the business by letting us handle day to day support
                            services, management, and monitoring of your IT.</p>
                        <a href="#" class="stretched-link">Learn more</a>
                    </div>
                </div>
                <div class="content card">
                    <div class="card-body">
                        <img src={Consult} class="card-img-top" alt=""/>
                        <h2 class="card-title">IT Consulting & Advisory</h2>
                        <p class="para-align card-text">The right technology, implemented properly, appropriately managed and monitored, can lead to
                            significant gains in growth </p>
                        <a href="#" class="stretched-link">Learn more</a>
                    </div>
                </div>
                <div class="content card">
                    <div class="card-body">
                        <img src={Cyber} class="card-img-top" alt=""/>
                        <h2 class="card-title">Cyber Security</h2>
                        <p class="para-align card-text">Our experts can identify vulnerabilities, assess risks, and implement robust security measures to
                            safeguard your systems and data. </p>
                        <a href="#" class="stretched-link">Learn more</a>
                    </div>
                </div>
                <div class="content card">
                    <div class="card-body">
                        <img src={Web} class="card-img-top" alt=""/>
                        <h2 class="card-title">Web Development</h2>
                        <p class="card-text">Our web development services can help you establish an impactful online presence and reach your
                            target audience effectively. </p>
                        <a href="#" class="stretched-link">Learn more</a>
                    </div>
                </div>
                <div class="content card">
                    <div class="card-body">
                        <img src={Mobile} class="card-img-top" alt=""/>
                        <h2 class="card-title">Mobile Development</h2>
                        <p class="card-text">We can help you create a customized mobile app that aligns with your brand and goals, with expertise
                            in various mobile platforms. </p>
                        <a href="#" class="stretched-link">Learn more</a>
                    </div>
                </div>
                <div class="content card">
                    <div class="card-body">
                        <img src={Cloud} class="card-img-top" alt=""/>
                        <h2 class="card-title">Cloud Services</h2>
                        <p class="card-text">With our expertise in cloud technologies, we can help you find the right cloud solutions that meet
                            your business needs and goals. </p>
                        <a href="#" class="stretched-link">Learn more</a>
                    </div>
                </div>
            </div>
          

            <a href='#' class="btn">View All Solutions</a>
        </Container>
    </div>
  )
}

export default Solutions
