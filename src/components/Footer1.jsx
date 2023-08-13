import React from 'react'
import '../css/custom.css';

const Footer1 = () => {
  return (
    <div class="footer-1">
        <div class="container-1">
            <div class="content-1">
                <h3>Solutions</h3>

                <ul>
                    <li><a href="">Managed Services</a></li>
                    <li><a href="">IT Consulting & Advisory</a></li>
                    <li><a href="">Cyber Security</a></li>
                    <li><a href="">Web Development</a></li>
                    <li><a href="">Mobile Development</a></li>
                    <li><a href="">Cloud Services</a></li>
                    <li><a href="">Network Connectivity</a></li>
                    <li><a href="">ERP Solutions</a></li>
                </ul>
            </div>

            <div class="content-2">
                <h3>Company</h3>

                <div class="lists">
                    <div class="list-1">
                        <ul>
                            <li><a href="">About us</a></li>
                            <li><a href="">Why us</a></li>
                            <li><a href="">Team</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Partners & Certifications</a></li>
                            <li><a href="">Reviews & Awards</a></li>
                        </ul>
                    </div>
                    <div class="list-2">
                        <ul>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Case studies</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="content-3">
                <input type="text" placeholder="Don’t miss out updates"/>
                <br/>
                <div class="d-flex">
                <input type="checkbox"/>
                <label>I agree to the Privacy Policy and give my permission to process my personal data for the purposes
                    specified in the Privacy Policy.</label>
                    </div>

                <br/>
                <button type="button">Send</button>
            </div>

        </div>
        <div class="container-2">
            <img class="bg-img" src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/footer-dots.svg" alt=""/>
            <div>
                <a href=""><img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/logo-footer.svg"
                        alt=""/></a>

                <button type="button">Schedule Consultation</button>
            </div>
        </div>
    </div>
  )
}

export default Footer1