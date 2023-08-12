import React from 'react'
import '../css/custom.css';
import Container from 'react-bootstrap/Container';

const Banner = () => {
  return (
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

  )
}

export default Banner