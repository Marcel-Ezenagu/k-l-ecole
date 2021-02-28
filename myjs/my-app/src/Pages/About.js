import React from 'react'

 import profile from '../images/about.jpg';

function About() {
    return (
        <div className='about' id="about" > 
            
                <h2 style={{padding:"1.5rem"}}>About Us</h2>
               
                <div className='about__info'>
                    <div>
                        <p className='about__bios' > 
                            <big style={{fontWeight:"900"}}>W</big>orking with a team of young construction-professionals, contemporary designs, our Engineers deliver the best method of construction, ensuring safe and sound, injury 
                            free construction also we can help clients complete paper works, build and deliver keys. 
                            <br />
                            <big style={{fontWeight:"900"}}>B</big>eing in the industry for over half a decade, delivering innovative solutions
                            for value-driven prjoect execution while engage the youths to take them off the street. 
                            
                        </p>
                   
                </div>
                <div>
                    
                <img src={profile} style={{ objectFit: "contain", borderRadius:"0.7rem", height: "30vh" }} alt="Director's-picture" />
                <h5 style={{fontWeight:"400"}}>Director</h5>

                </div>

                   
                    

                </div>
        </div>
       
    )
}

export default About
