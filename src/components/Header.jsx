import React, { Component } from 'react';
import '../css/custom.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { ArrowRight } from 'react-bootstrap-icons';

const Header = () => {
    return (
        
            <Navbar expand="lg" className="navbar">
                <Container className='nav-container'>
                    <NavbarBrand href='#home'><img src='https://tecnologia.vamtam.com/wp-content/uploads/2023/03/logo.svg'></img></NavbarBrand>
                    <Navbar.Collapse id='navbar-nav'>
                        <Nav className='nav-items'>
                            
                            <NavDropdown title="H." id='basic-nav-dropdown' renderMenuOnMount={true}>
                                <NavDropdown.Item href='#'>IT Services</NavDropdown.Item>
                                <NavDropdown.Item href='#'>App Development</NavDropdown.Item>
                            </NavDropdown>

                            
                            <NavDropdown title="Solutions" id='basic-nav-dropdown' renderMenuOnMount={true}>
                                <NavDropdown.Item href='#'>Managed Services</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Cyber Security</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Company" id='basic-nav-dropdown' renderMenuOnMount={true}>
                                <NavDropdown.Item href='#'>About us</NavDropdown.Item>
                                <NavDropdown.Item href='#'>Team</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href='#'>Case studies</Nav.Link>
                            <Nav.Link href='#'>Blog</Nav.Link>

                            <NavDropdown title="Resource" id='basic-nav-dropdown' renderMenuOnMount={true}>
                                <NavDropdown.Item href='#'>Events</NavDropdown.Item>
                                <NavDropdown.Item href='#'>FAQ</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                    

                    <div class="support">
                        <div>
                            <a href="#" class="text-decoration-none fw-medium">Client Support</a>
                            <ArrowRight size={10} className='ms-1'/>
                        </div>
                        <p class="my-0 fw-medium">1-800-356-8933</p>
                    </div>

                    <div class="cont ms-3">
                        <a href="" class="btn fw-medium">Contact Us</a>
                    </div>
                             
                    <Navbar.Toggle aria-controls='navbar-nav' />
                </Container>
            </Navbar>
        
    )
}

export default Header
