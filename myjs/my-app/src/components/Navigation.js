import React from 'react'

import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import logo from '../images/log.JPG';

import IconLayer from './IconLayer';
import {Container, Navbar, Nav }  from 'react-bootstrap' 


export default function Navigation() {

    
    const mystyle = { width: "100%", marginRight: "1rem", display: "flex" }
    
    return (

        <div className='header'>

                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Navbar.Brand >
                        <a href='/'>
                            <img src={logo} className='logo' alt="compny-logo" />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse  >
                    
                        <Nav className="justify-content-end" style={mystyle}>
                            

                            <Nav.Link href='#services' >Our Services</Nav.Link>
                                    
                            <Nav.Link  href='#about' >About Us </Nav.Link>
                            <Nav.Link href='#projects' >Our Projects</Nav.Link>
                            <Nav.Link  href='#cont' >Contact Us</Nav.Link>
                        </Nav>
                    
                    </Navbar.Collapse>

                </Navbar> 
           
        </div>
    )
}
