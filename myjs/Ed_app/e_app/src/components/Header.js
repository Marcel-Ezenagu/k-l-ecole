import React from 'react'
import {Link } from 'react-router-dom'
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react'
import  logo  from '../images/logo.JPG';


export default function Header() {
    return (
        <div className="header">
            
            <Link to='/'>
                <div>
                    {/* <img className='logo-image' src={logo} alt='logo' /> */}
                    <h3 style={{ color:'rgb(139, 9, 9)', paddingLeft:"1rem", paddingRight:"1rem",}} >KEZZ </h3>
                </div>
            </Link>    
           
            <div className='menu'>
                
                <Dropdown item text='MENU' >
                    <Dropdown.Menu>
                       
                      <Link to='/a' > <Dropdown.Item >About</Dropdown.Item></Link> 
                      <Link to='/contact' > <Dropdown.Item >Contact Us</Dropdown.Item></Link>
                      <Link to='/contact' > <Dropdown.Item>News</Dropdown.Item></Link> 
                      <Link to='/contact' > <Dropdown.Item>Gallery</Dropdown.Item></Link> 
                    </Dropdown.Menu>
                </Dropdown>

            </div>      
             
        </div>
    )
}
