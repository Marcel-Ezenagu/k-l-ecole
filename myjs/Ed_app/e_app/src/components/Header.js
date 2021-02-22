import React from 'react'
import {Link } from 'react-router-dom'
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react'


export default function Header() {
    return (
        <div className="header">
            
                <Link to='/'>
                            <div>
                    <div >
                        <Icon color='white' name='graduation cap' size='big' />{' '}
                        <div className="logo">
                            <h2>Itire</h2>
                            <h6>Nursery and Primary School</h6>
                        </div>
                    </div>
                        
                            </div>    
                 </Link>    
           
            <div>
                
                <Dropdown item text='Menu' >
                    <Dropdown.Menu>
                       
                        <Dropdown.Item as={Link} to='/about'>About Us</Dropdown.Item>
                        <Dropdown.Item>News</Dropdown.Item>
                        <Dropdown.Item>Gallery</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>      
             
        </div>
    )
}
