import React from 'react'
import '../css/custom.css';
import { Container } from 'react-bootstrap';
import Arrow from '../assets/img/form arrow.PNG'
import { ChevronCompactRight } from 'react-bootstrap-icons';

const ContactUS = () => {
  return (
    <div class="contact">
        <div class="sect">
            <div class="container-1">
                <span>CONTACT US</span>
                <h1>Partner with Us for <br/> Comprehensive IT</h1>
            </div>
            <div class="container-2">
                <div class="content-1">
                    <p>We’re happy to answer any questions you may have and help you determine which of our services
                        best fit your needs.</p>
                </div>

                <div class="content-2">
                    <p>Call us at: 1-800-356-8933</p>
                </div>

                <div class="content-3">
                    <p>Your benefits:</p>
                </div>

                <div class="content-4">
                    <ul>
                        <li>Client-oriented</li>
                        <li>Independent</li>
                        <li>Competent</li>
                        <li>Results-driven</li>
                        <li>Problem-solving</li>
                        <li>Transparent</li>
                    </ul>
                </div>

                <div class="content-5">
                    <p>What happens next?</p>
                </div>

                <div class="content-6">

                    <div class="item">
                        <span>1</span>
                        <p>We Schedule a call at your convenience</p>
                        <ChevronCompactRight className="m-1" size={80} color='rgb(206, 206, 206)'/>
                    </div>
                    <div class="item">
                        <span>2</span>
                        <p>We do a discovery and consulting meting</p>
                        <ChevronCompactRight className="m-1" size={80} color='rgb(206, 206, 206)'/>
                    </div>
                    <div class="item">
                        <span>3</span>
                        <p>We prepare a proposal</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="form">
            <form>
                <p>Schedule a Free Consultation</p>
                <div class="name">
                    <div class="first">
                        <label>First name</label><br/>
                        <input type="text"/>

                    </div>

                    <div class="last">
                        <label>Last name</label><br/>
                        <input type="text"/>
                    </div>
                </div>


                <div class="container">
                    <label>Comapny / Organization</label><br/>
                    <input type="text"/>

                    <br/>

                    <label>Company email</label><br/>
                    <input type="email"/>

                    <br/>

                    <label>Phone</label><br/>
                    <input type="tel"/>

                    <br/>

                    <label>How Can We Help You?</label><br/>
                    <select>
                        <option value="1">Select Option</option>
                        <option value="2">Managed Services</option>
                        <option value="3">IT Consulting & Advisory</option>
                        <option value="4">Cyber Security</option>
                        <option value="5">Web Development</option>
                        <option value="6">Mobile Development</option>
                        <option value="7">Cloud Services</option>
                        <option value="8">Other</option>
                    </select>

                    <br/>
                    <label>Message</label><br/>
                    <textarea cols="50" rows="6"
                        placeholder="To better assist you, please describe how we can help..."></textarea>
                    <br/>
                    <button type="submit">Submit</button>
                </div>


            </form>
        </div>

        <div class="arrow">
            <img src={Arrow} alt=""/>
        </div>

    </div>
  )
}

export default ContactUS