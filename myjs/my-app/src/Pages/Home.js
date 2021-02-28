import React from 'react'
import Projects from '../components/Projects'
import Services from '../components/Services'
import About from './About'

function Home() {
    return (
        <div className="home" id="home">
            <div className="main-info">

                <h2 style={{fontWeight:"900"}}>Decent Housing for Everyone.</h2>
                <p>Part of what has guided us is our poise towards the provision of decent 
                   buildings to our clients.
                </p>
                   
            <div>
                    <a href='#about'>
                        <button className='bt-about'>More About Us</button>
                    </a>

                    <a href='#projects'>
                         <button className='bt-works'>View Our Works</button>
              
                    </a>
                   
                </div>
                

                  
            </div>
            <Services />

            <About />
            <Projects />
            
        </div>
    )
}

export default Home
