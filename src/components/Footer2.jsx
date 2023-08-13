import React from 'react'
import '../css/custom.css';
import { Facebook, Github, Linkedin, StarFill, Twitter, Youtube } from 'react-bootstrap-icons';

const Footer2 = () => {
  return (
    <div class="footer-2">
        <div class="container-1">
            <div class="content-1">
                <div class="review">
                    <div class="item-1">
                        <p class='m-0'>REVIEWED ON</p>
                        <img class='m-0 mt-2' src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt=""/>
                    </div>
                    <div class="item-2">
                    <StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/>
                        <p>31 REVIEWS</p>
                    </div>
                </div>
                <div class="address bar">
                    <p>Seventh Ave, 20th Floor New York, NY 10018 </p>

                </div>
                <div class="foot-contact bar">
                    <p>T: 1-800-356-8933</p>
                    <p>E: office@tecnologia.com</p>
                </div>
            </div>
            <div class="content-2">
                <div class="linkedin pe-4"><Linkedin size={30} class=" d-block ms-3"/><a href="">Linkedin</a></div>
                <div class="github pe-4"><a href=""><Github size={30} class="d-block ms-2"/>Github</a></div>
                <div class="twitter pe-4"><a href=""><Twitter size={30} class=" d-block ms-3"/>Twitter</a></div>
                <div class="facebook pe-4"><a href=""><Facebook size={30} class=" d-block ms-4"/>Facebook</a>
                </div>
                <div class="youtube"><a href=""><Youtube size={30} class="d-block ms-3"/>Youtube</a></div>
            </div>
        </div>

        <div class="container-2">
            <a href="">© 2023 Tecnologia</a>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
    </div>
  )
}

export default Footer2