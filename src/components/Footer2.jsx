import React from 'react'
import '../css/custom.css';
import { Facebook, Github, Linkedin, StarFill, Twitter, Youtube } from 'react-bootstrap-icons';

const Footer2 = () => {
  return (
    <div className="footer-2">
        <div className="container-1">
            <div className="content-1">
                <div className="review">
                    <div className="item-1">
                        <p className='m-0'>REVIEWED ON</p>
                        <img className='m-0 mt-2' src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt=""/>
                    </div>
                    <div className="item-2">
                    <StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/><StarFill color='#ff3d2e'/>
                        <p>31 REVIEWS</p>
                    </div>
                </div>
                <div className="address bar">
                    <p>Seventh Ave, 20th Floor New York, NY 10018 </p>

                </div>
                <div className="foot-contact bar">
                    <p>T: 1-800-356-8933</p>
                    <p>E: office@tecnologia.com</p>
                </div>
            </div>
            <div className="content-2">
                <div className="linkedin pe-4"><a href=""><Linkedin size={30} className=" d-block ms-3"/>Linkedin</a></div>
                <div className="github pe-4"><a href=""><Github size={30} className="d-block ms-2"/>Github</a></div>
                <div className="twitter pe-4"><a href=""><Twitter size={30} className=" d-block ms-3"/>Twitter</a></div>
                <div className="facebook pe-4"><a href=""><Facebook size={30} className=" d-block ms-4"/>Facebook</a>
                </div>
                <div className="youtube"><a href=""><Youtube size={30} className="d-block ms-3"/>Youtube</a></div>
            </div>
        </div>

        <div className="container-2">
            <a href="">© 2023 Tecnologia</a>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
        </div>
    </div>
  )
}

export default Footer2