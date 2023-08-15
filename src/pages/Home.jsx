import React, { Component } from 'react'
import Header from '../components/Header'
import ContactUS from '../components/ContactUS'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import Container from 'react-bootstrap/Container';
import { StarFill } from 'react-bootstrap-icons';
import Cloud from '../assets/img/cloud.PNG';
import Consult from '../assets/img/consult.PNG';
import Cyber from '../assets/img/cyber.PNG';
import Web from '../assets/img/web.PNG';
import Mobile from '../assets/img/mobile.PNG';
import Manage from '../assets/img/manage.PNG';
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';
import 'react-multi-carousel/lib/styles.css';
import { Check } from 'react-bootstrap-icons';
import { ArrowLeftCircle, ArrowRightCircle, ArrowUpLeftCircle } from 'react-bootstrap-icons';
import Companies from '../assets/img/companies.PNG'
import AboutUs from './AboutUs'
import BoxCarousel from '../components/BoxCarousel'
import TestCarousel from '../components/TestCarousel'



const Home = () => {
    return (
      <div>
          <Header/>

          <div class="banner">
            <Container className='banner-container'>
              <div class="banner-content col-lg-7">
                        <p id="head" class="col-lg-11">We manage your IT, so you can manage your business.</p>
                        <p class="col-lg-10">Take charge of your business continuity with innovative IT solutions</p>
                        <div class="service-btn">
                            <a href="#" class="btn-1 text-decoration-none">Schedule a Free Consultation</a>
                            <a href="#" class="btn-2 text-decoration-none">Services</a>
                        </div>
              </div>
              
              <div class="banner-img">
                <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/GettyImages-618762080-1.jpg"
                  alt="banner-img"/>
              </div>

            </Container>
          </div>

          <div className='stats'>
            <Container className='stats-container justify-content-between'>
                <div class="stat-1">
                        <div class="review-1">
                            <p class='m-0'>REVIEWED ON</p>
                            <img class='m-0'src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt="stat-img"/>
                        </div>
                        <div class="review-2">
                            <StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/>
                            <p class='m-0'>31 REVIEWS</p>
                            
                        </div>
                </div>

                <div class="stat">
                    <h3><span>20</span> Years</h3>
                    <p>Proven Track Record</p>
                </div>
                
                <div class="stat">
                    <h3><span> 98</span>%</h3>
                    <p>Customer Satisfaction</p>
                </div>

                <div class="stat">
                    <h3><span>1,500</span> Projects</h3>
                    <p>We Have Completed</p>
                </div>
                
                <div class="stat">
                    <h3><span>3</span> Mins</h3>
                    <p>Average Answer Time</p>
                </div>
       
            </Container>
          </div>

          <div class="effect-banner">
            <Container className='eb-container'>
                <div class="eb-content">
                    <span>WHAT WE DO</span>
                    <p>Simplifying IT <br/>for a complex world.</p>
                    <div class='img-effect'>
                        <img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/shape-dots.svg'></img>
                    </div>
                </div>
                
            </Container>
          </div>

          <div class='about'>
            <Container  class='about-container'>
          
                <div class='items row'>
                    <div class="content col">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Cost-effectiveness.svg" alt=""/>
                        <h2>Cost-effectiveness</h2>
                        <p>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</p>
                    </div>
                    <div class="content col offset-1">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Innovative.svg" alt=""/>
                        <h2>Innovative Technology</h2>
                        <p>We stay up-to-date with the latest technology trends and offer innovative solutions that help you
                            stay ahead of the competition.</p>
                    </div>
                    <div class="content col offset-1">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Industry.svg" alt=""/>
                        <h2>Industry Expertise</h2>
                        <p>We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and
                            offer tailored solutions that meet your unique needs.</p>
                    </div>
                    <div class="content col offset-1">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Scalability.svg" alt=""/>
                        <h2>Scalability</h2>
                        <p>Our solutions are scalable and can grow with your business, ensuring that you get the most value out
                            of your investment.</p>
                    </div>
                </div>    
                <a href="">About Tecnologia</a>
            </Container>
          </div>

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

                <div class="industry">
                  <div class="industry-container">
                      <span>HOW WE DO</span>
                      <h1>Solving IT challenges in every industry, every day.</h1>

                      <div class="container">
                          <div class="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/photo-1581091878591-4f0714c6f32f-300x300.jpg"
                                  alt=""/>
                              <a href="#">Industry & Manufacturing</a>
                          </div>
                          <div class="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1385683178-612x612-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Transportation & Logistics</a>
                          </div>
                          <div class="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1156457427-2048x2048-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Healthcare</a>
                          </div>
                          <div class="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-173289625-2048x2048-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Banks & Insurance</a>
                          </div>
                          <div class="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1375143131-2048x2048-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Consulting Providers</a>
                          </div>
                          <div class="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1429906360-2048x2048-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Non-Profit</a>
                          </div>
                          
                      </div>
                      <a href="">View All Industries</a>
                  </div>
              </div>
              

                
            

          <div class="challenges">
            <Container fluid>
                <span>WHAT WE USE</span>
                <h1>Bringing the best IT vendors to you.</h1>
                <p class="para">Working only with the best, to ensure the quality of our services, and to bring state of the
                    art technology to those who need it.</p>

                <div class="container-1">
                    <div class="header-1">
                        {/*<ArrowLeftCircleFill type='button' size={30} color='grey' className="me-3 mt-2" />*/}
                        <h2>Your IT Challenges</h2>
                        {/*<ArrowRightCircleFill type='button' size={30} color='grey' className="ms-3 mt-2" />*/}
                    </div>
                    <div class="line">
                        <p class="line-1"></p>
                        <p class="line-2"></p>
                        <p class="line-3"></p>
                        <i></i>
                    </div>
                    <div class="items">
                        
                            
                      </div>
                </div>
                  </Container>
                  <BoxCarousel/>
            </div>

            <Container fluid>
        <div class="stories">
        <span class="head">WHERE WE DO</span>
        <h1>Success Stories</h1>

        <Container fluid>
            <div class="content">
                <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Insurance.jpg" alt=""/>
                <br/>
                <span>CLOUD HOSTING</span>
                <h4>Major Insurance Provider Saves $750k per Month With Big Data Migration</h4>
                <p>The company needed to complete a complex migration on a tight deadline to avoid millions of dollars
                    in post-contract fees and fines.</p>
                <ul>
                    <li><Check size={25}/> Modern infrastructure</li>
                    <li><Check size={25}/>Consulting services</li>
                </ul>
                <a href="">Learn more</a>
            </div>
            <div class="content">
                <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/nespresso.jpg" alt=""/>
                <br/>
                <span>IT CONSULTING</span>
                <h4>Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story</h4>
                <p>The company needed to complete a complex migration on a tight deadline to avoid millions of dollars
                    in post-contract fees and fines.</p>
                <ul>
                    
                    <li><Check size={25}/> Modern infrastructure</li>
                    <li><Check size={25}/>Consulting services</li>
                </ul>
                <a href="">Learn more</a>
            </div>
            <div class="content">
                <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/undergroup.jpg" alt=""/>
                <br/>
                <span>MOBILE DEVELOPMENT</span>
                <h4>Strategic Move to an AI-supported application for Public Safety Travel App in London</h4>
                <p>Travel confidently around London with maps and live travel updates. Our reliable journey planner will
                    map a safe route.</p>
                <ul>
                    <li><Check size={25}/> Modern infrastructure</li>
                    <li><Check size={25}/>Consulting services</li>
                </ul>
                <a href="">Learn more</a>
            </div>
          </Container>
        </div>
      </Container>

      <div class="testimonials">
        <Container fluid>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <TestCarousel/>
                </div>
            </div>

            <Container fluid class="d-flex justify-content-between">
            <div class="arrows">
                    {/*
                    <ArrowLeftCircle size={30} type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"/>
                    <ArrowRightCircle class="ms-3" size={30} type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"/>
                        */}
                </div>
                <div class="reviews">
                
                    <div class="review-1">
                        <div class="content-1">
                            <p>REVIEWED ON</p>
                            <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt=""/>
                        </div>
                        <div class="content-2">
                        <StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/>
                            <p>31 REVIEWS</p>
                        </div>
                    </div>
                    <div class="review-2">
                        <div class="content-3">
                            <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Google_22G22_Logo.svg"
                                alt=""/>
                        </div>
                        <div class="container">
                            <div class="content-4">
                                <p class="me-2">4.9</p>
                                <StarFill className='mt-1' color='#fbb002'/><StarFill className='mt-1' color='#fbb002'/><StarFill className='mt-1' color='#fbb002'/><StarFill className='mt-1' color='#fbb002'/><StarFill className='mt-1' color='#fbb002'/>
                            </div>
                            <div class="content-5">
                                <p>CUSTOMER REVIEWS</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </Container>
        </Container>
    </div>

    <ContactUS/>

    <div class="partner">
        <div class="container-1">
            <span>WHERE WE DO</span>
            <h1>Recognized by the best</h1>
            <p>The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in
                post-contract fees and fines.</p>
        </div>

        <div class="container-2">
            <img src={Companies} alt=""/>
        </div>

    </div>

    
    <Footer1/>
    <Footer2/>
    

  </div>
      
      
    )
}

export default Home

