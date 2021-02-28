import React from 'react'
import {Carousel} from 'react-bootstrap';
import data from '../images/data';

export default function Projects() {
   
    const works = data.projectImages;
       

    return (
        <div className="projects" id='projects'>
            <h3 >Recent Projects</h3>
            <div>
                 
                <Carousel style={{maxHeight: "60vh",paddingBottom:"4.5rem", objectFit:"contain"}} >
                                    {works.map((work, index) => (
                                    <Carousel.Item key={index} interval='1250'>
                                        <img
                                        className="d-block w-100"
                                        src={work.image}
                                        alt='project'
                                        />
                                    
                                    </Carousel.Item> 
                                    ))}
                                
                </Carousel>

                
                <a href='#message'>
                         <button className='bt-about'>Request a Quote</button>
              
                    </a>

            </div>
             
        </div>
    )
}
