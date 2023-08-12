import React from 'react'
import '../css/custom.css';
import Container from 'react-bootstrap/Container';


const EffectBanner = () => {
  return (
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
  )
}

export default EffectBanner