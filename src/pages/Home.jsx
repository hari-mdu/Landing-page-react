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
import 'react-multi-carousel/lib/styles.css';
import { Check } from 'react-bootstrap-icons';
import Companies from '../assets/img/companies.PNG'
import TestCarousel from '../components/TestCarousel'
import ChallengeCarousel from '../components/ChallengeCarousel'




const Home = () => {
    return (
      <div>
          <Header/>

          <div className="banner">
            <Container className='banner-container'>
              <div className="banner-content col-lg-7">
                        <p id="head" className="col-lg-11">We manage your IT, so you can manage your business.</p>
                        <p className="col-lg-10">Take charge of your business continuity with innovative IT solutions</p>
                        <div className="service-btn">
                            <a href="#" className="btn-1 text-decoration-none">Schedule a Free Consultation</a>
                            <a href="#" className="btn-2 text-decoration-none">Services</a>
                        </div>
              </div>
              
              <div className="banner-img">
                <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/GettyImages-618762080-1.jpg"
                  alt="banner-img"/>
              </div>

            </Container>
          </div>

          <div className='stats'>
            <Container className='stats-container justify-content-between'>
                <div className="stat-1">
                        <div className="review-1">
                            <p className='m-0'>REVIEWED ON</p>
                            <img className='m-0'src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt="stat-img"/>
                        </div>
                        <div className="review-2">
                            <StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/>
                            <p className='m-0'>31 REVIEWS</p>
                            
                        </div>
                </div>

                <div className="stat">
                    <h3><span>20</span> Years</h3>
                    <p>Proven Track Record</p>
                </div>
                
                <div className="stat">
                    <h3><span> 98</span>%</h3>
                    <p>Customer Satisfaction</p>
                </div>

                <div className="stat">
                    <h3><span>1,500</span> Projects</h3>
                    <p>We Have Completed</p>
                </div>
                
                <div className="stat">
                    <h3><span>3</span> Mins</h3>
                    <p>Average Answer Time</p>
                </div>
       
            </Container>
          </div>

          <div className="effect-banner">
            <Container className='eb-container'>
                <div className="eb-content">
                    <span>WHAT WE DO</span>
                    <p>Simplifying IT <br/>for a complex world.</p>
                    <div className='img-effect'>
                        <img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/shape-dots.svg'></img>
                    </div>
                </div>
                
            </Container>
          </div>

          <div className='about'>
            <Container  className='about-container'>
          
                <div className='items row'>
                    <div className="content col">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Cost-effectiveness.svg" alt=""/>
                        <h2>Cost-effectiveness</h2>
                        <p>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</p>
                    </div>
                    <div className="content col offset-1">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Innovative.svg" alt=""/>
                        <h2>Innovative Technology</h2>
                        <p>We stay up-to-date with the latest technology trends and offer innovative solutions that help you
                            stay ahead of the competition.</p>
                    </div>
                    <div className="content col offset-1">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Industry.svg" alt=""/>
                        <h2>Industry Expertise</h2>
                        <p>We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and
                            offer tailored solutions that meet your unique needs.</p>
                    </div>
                    <div className="content col offset-1">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Scalability.svg" alt=""/>
                        <h2>Scalability</h2>
                        <p>Our solutions are scalable and can grow with your business, ensuring that you get the most value out
                            of your investment.</p>
                    </div>
                </div>    
                <a href="">About Tecnologia</a>
            </Container>
          </div>

          <div className="solutions bg-info">
            <Container fluid className='solutions-container'>
                <span>HOW WE DO</span>
                <h1>Solutions</h1>

                <div className="container-1">
                    
                    <div className="content card">
                        <div className="card-body">
                            <img src={Manage} className="card-img-top" alt=""/>
                            <h2 className="card-title">Managed Services</h2>
                            <p className="card-text">Free up your internal resources to focus on the business by letting us handle day to day support
                                services, management, and monitoring of your IT.</p>
                            <a href="#" className="stretched-link">Learn more</a>
                        </div>
                    </div>
                    <div className="content card">
                        <div className="card-body">
                            <img src={Consult} className="card-img-top" alt=""/>
                            <h2 className="card-title">IT Consulting & Advisory</h2>
                            <p className="para-align card-text">The right technology, implemented properly, appropriately managed and monitored, can lead to
                                significant gains in growth </p>
                            <a href="#" className="stretched-link">Learn more</a>
                        </div>
                    </div>
                    <div className="content card">
                        <div className="card-body">
                            <img src={Cyber} className="card-img-top" alt=""/>
                            <h2 className="card-title">Cyber Security</h2>
                            <p className="para-align card-text">Our experts can identify vulnerabilities, assess risks, and implement robust security measures to
                                safeguard your systems and data. </p>
                            <a href="#" className="stretched-link">Learn more</a>
                        </div>
                    </div>
                    <div className="content card">
                        <div className="card-body">
                            <img src={Web} className="card-img-top" alt=""/>
                            <h2 className="card-title">Web Development</h2>
                            <p className="card-text">Our web development services can help you establish an impactful online presence and reach your
                                target audience effectively. </p>
                            <a href="#" className="stretched-link">Learn more</a>
                        </div>
                    </div>
                    <div className="content card">
                        <div className="card-body">
                            <img src={Mobile} className="card-img-top" alt=""/>
                            <h2 className="card-title">Mobile Development</h2>
                            <p className="card-text">We can help you create a customized mobile app that aligns with your brand and goals, with expertise
                                in various mobile platforms. </p>
                            <a href="#" className="stretched-link">Learn more</a>
                        </div>
                    </div>
                    <div className="content card">
                        <div className="card-body">
                            <img src={Cloud} className="card-img-top" alt=""/>
                            <h2 className="card-title">Cloud Services</h2>
                            <p className="card-text">With our expertise in cloud technologies, we can help you find the right cloud solutions that meet
                                your business needs and goals. </p>
                            <a href="#" className="stretched-link">Learn more</a>
                        </div>
                    </div>
                </div>
                <a href='#' className="btn">View All Solutions</a>
                </Container>
              </div>

                <div className="industry">
                  <div className="industry-container">
                      <span>HOW WE DO</span>
                      <h1>Solving IT challenges in every industry, every day.</h1>

                      <div className="container">
                          <div className="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/photo-1581091878591-4f0714c6f32f-300x300.jpg"
                                  alt=""/>
                              <a href="#">Industry & Manufacturing</a>
                          </div>
                          <div className="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1385683178-612x612-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Transportation & Logistics</a>
                          </div>
                          <div className="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1156457427-2048x2048-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Healthcare</a>
                          </div>
                          <div className="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-173289625-2048x2048-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Banks & Insurance</a>
                          </div>
                          <div className="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1375143131-2048x2048-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Consulting Providers</a>
                          </div>
                          <div className="content">
                              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/gettyimages-1429906360-2048x2048-1-300x300.jpg"
                                  alt=""/>
                              <a href="#">Non-Profit</a>
                          </div>
                          
                      </div>
                      <a href="">View All Industries</a>
                  </div>
              </div>
              

                
            

          <div className="challenges">
            <Container fluid>
                <span>WHAT WE USE</span>
                <h1>Bringing the best IT vendors to you.</h1>
                <p className="para">Working only with the best, to ensure the quality of our services, and to bring state of the
                    art technology to those who need it.</p>

                <div className="container-1">
                    <div className="header-1">
                    
                        {/*<ArrowLeftCircleFill type='button' size={30} color='grey' className=" me-3 mt-2" />*/}
                        <h2>Your IT Challenges</h2>
                        {/*<ArrowRightCircleFill type='button' size={30} color='grey' className="ms-3 mt-2" />*/}
                    </div>
                    <div className="line">
                        <p className="line-1"></p>
                        <p className="line-2"></p>
                        <p className="line-3"></p>
                        <i></i>
                    </div>
                    <div className="items">
                    <ChallengeCarousel/>
                            
                      </div>
                </div>
                  </Container>
                  
            </div>

            <Container fluid>
        <div className="stories">
        <span className="head">WHERE WE DO</span>
        <h1>Success Stories</h1>

        <Container fluid>
            <div className="content">
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
            <div className="content">
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
            <div className="content">
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
                <a href="" >Learn more</a>
            </div>
          </Container>
        </div>
      </Container>

      <div className="testimonials">
        <Container fluid>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                
                </div>
            </div>
            <TestCarousel/>
            <Container fluid className="d-flex justify-content-between">
            <div className="arrows">
                    {/*
                    <ArrowLeftCircle size={30} type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"/>
                    <ArrowRightCircle className="ms-3" size={30} type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"/>
                        */}
                </div>
                <div className="reviews">
                
                    <div className="review-1">
                        <div className="content-1">
                            <p>REVIEWED ON</p>
                            <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt=""/>
                        </div>
                        <div className="content-2">
                        <StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/>
                            <p>31 REVIEWS</p>
                        </div>
                    </div>
                    <div className="review-2">
                        <div className="content-3">
                            <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Google_22G22_Logo.svg"
                                alt=""/>
                        </div>
                        <div className="container">
                            <div className="content-4">
                                <p className="me-2">4.9</p>
                                <StarFill className='mt-1' color='#fbb002'/><StarFill className='mt-1' color='#fbb002'/><StarFill className='mt-1' color='#fbb002'/><StarFill className='mt-1' color='#fbb002'/><StarFill className='mt-1' color='#fbb002'/>
                            </div>
                            <div className="content-5">
                                <p>CUSTOMER REVIEWS</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </Container>
        </Container>
    </div>

    <ContactUS/>

    <div className="partner">
        <div className="container-1">
            <span>WHERE WE DO</span>
            <h1>Recognized by the best</h1>
            <p>The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in
                post-contract fees and fines.</p>
        </div>

        <div className="container-2">
            <img src={Companies} alt=""/>
        </div>

    </div>

    <Footer1/>
    <Footer2/>
    

  </div>
      
      
    )
}

export default Home

