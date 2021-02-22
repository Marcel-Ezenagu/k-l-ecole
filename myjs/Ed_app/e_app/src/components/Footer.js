import React from 'react'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'



export default function Footer() {
    return (
        <div className='footer' id="cont">
            <div className="text-center">
                <br/>
                <h2 >Visit us at{' '}:</h2>
                <hr className="divider my-4" />
                <div>
                    <LocationOnIcon style={{color:"red"}} />
                    <p>No 1 Shofolahan street, Ijeshatedo, Lagos</p>
                </div>
                <div>
                    <PhoneIcon style={{color:"red"}} />
                    <p>+234-8028292532</p>

                </div>
                <div>
                    <EmailIcon  style={{color:"red"}} />
                    <p>test@itireschools.com</p>
                </div>
            </div>
            <hr style={{ color: "black" }} />
            <div>
                <p style={{ textAlign: "center" }}>All rights reserved © 2021 - I.N.P.S</p>
            </div>

            
        </div>
    )
}
