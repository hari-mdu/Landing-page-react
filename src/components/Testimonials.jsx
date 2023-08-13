import React from 'react'
import '../css/custom.css';
import { Container } from 'react-bootstrap';
import { ArrowLeftCircle, ArrowRightCircle, ArrowUpLeftCircle } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';

const Testimonials = () => {
  return (
    <div class="testimonials">
        <Container fluid>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/photo.png" alt=""/>
                        <p>Tecnologia implemented such a powerful platform that we had no break in service when our
                            employees had to work from home due to the COVID-19 pandemic. We weren’t concerned about how
                            to shift to a remote working environment because Integris facilitated a seamless transition.
                        </p>

                        <div class="organization">
                            <h5>Amanda Parks</h5>
                            <p>Network Manager, Healthcare Organization</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/nespresso-logo.png" alt=""/>
                        <p>Tecnologia has been an outstanding partner. Their team is professional, knowledgeable and
                            customer-service driven. Tecnologia proactive collaborative approach has been critical in
                            helping us build an IT infrastructure that enables our success today and supports our
                            long-term positioning strategy. </p>

                        <div class="organization">
                            <h5>John Labkins</h5>
                            <p>Partner & CEO, Telecommunication Company</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/logo-R.svg" alt=""/>
                        <p>I’ve been a customer for more than a decade. Tecnologia is an example of the way Managed
                            Services should be done. They do their very best to make sure you succeed. If there’s an
                            issue, they step in immediately. We will continue to be a customer for years to come. </p>

                        <div class="organization">
                            <h5>Daniel Legrante</h5>
                            <p>CIO, Restaurant Product Supplier</p>
                        </div>
                    </div>
                </div>
            </div>

            <Container fluid class="d-flex justify-content-between">
            <div class="arrows">
                    
                    <ArrowLeftCircle size={30} type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"/>
                    <ArrowRightCircle class="ms-3" size={30} type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"/>
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

  )
}

export default Testimonials