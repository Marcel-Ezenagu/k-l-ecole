import React from 'react'

import icon1 from '../images/icon1.jpg';
import icon2 from '../images/icon2.jpg';
import icon3 from '../images/icon3.jpg';

export default function Services() {
    return (
        <div className='services' id='services'>
            <div className='services-info'>
                <h2 style={{ textAlign: "center" }}>Our Services</h2>
                <div>
                   
                    <div className='s-info'>
                        <img src={icon3} alt="Architecture-and-building" />
                        <div>
                                 <h5>Architecture & building</h5>
                        <p>Our product ranges between commercial and residencial and factory building...</p>
                   
                        </div>

                    </div>
                    
                    <div className='s-info'>
                        <img src={icon1} alt='foundation-work'  />
                        <div>
                            <h5>Construction consultancy</h5>
                            <p>Given the complexity of the earth, consultancy became necessary towards safety of structures  .</p>
                   
                        </div>

                    </div>
                    
                    <div className='s-info'>
                        <img src={icon2} alt="construction-management" />
                        <div>
                            <h5>Construction Management</h5>
                            <p>Professionalism calls for the use of specialised project management 
                                 techniques to handle planning, design and delivery.
                            </p>
                   
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
