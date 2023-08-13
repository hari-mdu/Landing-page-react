import React from 'react'
import '../css/custom.css';
import Container from 'react-bootstrap/Container';
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const Challenges = () => {

    return (

        <div class="challenges">
            <Container fluid>
                <span>WHAT WE USE</span>
                <h1>Bringing the best IT vendors to you.</h1>
                <p class="para">Working only with the best, to ensure the quality of our services, and to bring state of the
                    art technology to those who need it.</p>

                <div class="container-1">
                    <div class="header-1">
                        <ArrowLeftCircleFill type='button' size={30} color='grey' className="me-3 mt-2" />
                        <h2>Your IT Challenges</h2>
                        <ArrowRightCircleFill type='button' size={30} color='grey' className="ms-3 mt-2" />
                    </div>
                    <div class="line">
                        <p class="line-1"></p>
                        <p class="line-2"></p>
                        <p class="line-3"></p>
                        <i></i>
                    </div>
                    <div class="items">
                        
                            <div class="content">
                                <h2>Datacenter & Hosting</h2>
                                <p>Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated
                                    4 certificate requirements for design, build and operate.</p>
                                <div class="view">
                                    <i class="bi bi-plus-circle"></i>
                                    <p>View more</p>
                                </div>
                            </div>

                            <div class="content" id="content-1">
                                <h2>Collaboration</h2>
                                <p>Despite modern cloud technology, your users operate in a familiar Microsoft Office
                                    environment and benefit from broad compatibility and low-threshold access.</p>
                                <div class="view">
                                    <i class="bi bi-plus-circle"></i>
                                    <p>View more</p>
                                </div>
                            </div>

                            <div class="content" id="content-2">
                                <h2>Cloud Platform</h2>
                                <p>Customized cloud platform designed to improve performance, lower IT costs, and provide secure
                                    and reliable access to your company data from any device, anytime, anywhere.</p>
                                <div class="view">
                                    <i class="bi bi-plus-circle"></i>
                                    <p>View more</p>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    )


}



export default Challenges