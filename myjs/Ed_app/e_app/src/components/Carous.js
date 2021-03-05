import React from 'react'

import welcome from '../images/ed 5.jpg'

import { Link } from 'react-router-dom';


export default function Carous() {
    return (
        <div className='home_welcome'>
            <img src={welcome} />
            <div>
                <h4>Apply for Admission</h4>
                <span style={{color: "green", paddingBottom:"2.5rem"}} >Admission for 2021 commences soon</span>
                <p>Committed to the educating and nurturing students towards a world of limitless opportunities.
                    We don't just give students an education and experiences that set them up for career-success, we help them succeed in 
                    their career--to discover a field they're passionate about and dare to lead it.
                    .
                </p>
                <Link to='/contact'> <button className="ui tiny green button">Apply for Admission</button></Link>
            </div>
    </div>
   
    )
}
