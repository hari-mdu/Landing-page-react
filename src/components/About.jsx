import React from 'react'
import '../css/custom.css';
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <div class='about'>
        <Container  class='about-container'>
       
            <div class='items'>
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
  )
}

export default About