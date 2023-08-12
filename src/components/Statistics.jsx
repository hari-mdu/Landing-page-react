import React from 'react'
import '../css/custom.css';
import Container from 'react-bootstrap/Container';
import { StarFill } from 'react-bootstrap-icons';

const Statistics = () => {
  return (
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
  )
}

export default Statistics