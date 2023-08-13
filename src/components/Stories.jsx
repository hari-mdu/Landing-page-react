import React from 'react'
import '../css/custom.css';
import { Container } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';

const Stories = () => {
  return (
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
  )
}

export default Stories