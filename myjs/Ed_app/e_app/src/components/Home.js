import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

import homepic from '../images/edu 1.jpg'
import welcome from '../images/ed 5.jpg'

import { Link } from 'react-router-dom';

export default function Home() {
    return (
    
    
             <div className='home'>
     
        
        
            <img src={homepic}/>
                <div className='banner'>
                 <div >
                    <h3 className='banner-top'>A Great Place for Education </h3>
                    </div>
                <div>
                    <p>A building with four walls and Tomorrow inside.</p></div>
                    
                    
                    <div>
                    
                       <a href='#home'> <button className="ui tiny button">Take a Tour</button></a>
                    </div>
               
                </div>
            

                
                <div className='home_card' id="home">
                    <div className='cards'>
                        <div >

                        <div>
                                <h5>Skilled Teachers</h5>
                                {/* <span>Our exquisite fleet of alumni keep our flag flying.</span> */}
                            </div>
                            <Icon color='green' circular name='users' />
                         </div>
                        <div >
                            <div>
                                <h5>Certification</h5>
                                {/* <span>Our exquisite fleet of alumni keep our flag flying.</span> */}
                            </div>
                            <Icon color='green' circular name='graduation' />
                        </div>
                        
                        <div >
                            <div>
                                <h5>Library & Store</h5>
                                {/* <span>Our exquisite fleet of alumni keep our flag flying.</span> */}
                            </div>
                            <Icon color='green' circular name='book' />
                        </div>
                    
                        </div>
                        <div className='home_welcome'>
                            <img src={welcome} />
                            <div>
                                <h4>Apply for Admission</h4>
                                <p>Committed to the educating and nurturing students towards responsible global citizenship.</p>
                               <a href='#cont'> <button className="ui tiny green button">Apply for Admission</button></a>
                            </div>
                    </div>
                
                </div>
            </div>
         

        
                      
    )
}
