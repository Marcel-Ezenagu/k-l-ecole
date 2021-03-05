import React from 'react'

import homepic from '../images/edu 1.jpg'
import Features from './Features';
import Carous from './Carous';

export default function Home() {
    return (
        
        <div className='home'>
     
            <div className="home-header">

                <img src={homepic}/>
                    <div className='banner'>
                        <div>
                            <h5 className='banner-top'>A World of Limitless Opportunities </h5>
                            
                            <p>A building with four walls and Tomorrow inside, making the difference
                                with the quality of education.
                            </p>   
                        </div>
                    
                        
                        
                        
                        
                        <div style={{paddingTop:"1.5rem"}} >
                            <a href='#home'> <button className="ui tiny button">Take a Tour</button></a>
                        </div>
                    
                    </div>
            </div>
        
            <div className="bot">
                <Features />   
                 <Carous/>
                
            </div>

                
                
                
        </div>
         

        
                      
    )
}
