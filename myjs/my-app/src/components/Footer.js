import React from 'react';
// import './Footer.css';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

import { Link} from "react-router-dom";

export default function Footer() {
    return (
        // <>
        //      <section className="footer-section" id="contact">
        //         <div className="container">
        //         <div className="row justify-content-center">
        //             <div className="col-lg-8 text-center">
        //                 <h2 className="mt-0">Get In Touch!</h2>
        //                 <hr className="divider my-4" />
        //                 <p className="text-muted mb-5">Would want to talk to us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="contact-text">
        //                     <PhoneIcon/>
        //                     <div>+234 810 776 6889</div>
                            
        //             </div>
        //                 <div className="contact-text">
        //                     <EmailIcon />
        //                 <a>info@internapp.co</a>
        //             </div>
        //             <div className="contact-text">
        //                 <LocationOnIcon/>
        //                 <a>Suite 202, Enaan tower, East-West Road, Choba, Portharcourt</a>
        //             </div>    
        //         </div>
        //     </div>
        // </section>
        //     <footer className="bg-dark py-5">
        //          <div className="container"><div className="small text-center text-muted">All rights reserved © 2020 - Internapp Africa</div></div>
        //     </footer>
        //     </>
        <div className='footer' id="cont">
            <div className="text-center">
                <br/>
                <h2 >Visit us at{' '}:</h2>
                <hr className="divider my-4" />
                <div>
                    <LocationOnIcon style={{color:"red"}} />
                    <p>No 18 Amadi ama, Port Harcourt, Trans Amadi Industrial Layout.</p>
                </div>
                <div id='phone'>
                    <PhoneIcon style={{color:"red"}} />
                    <p>+234-8063835704</p>

                </div>
                <div id='email'>
                   <a href='#message'> <EmailIcon  style={{color:"red"}} /></a>
                    <p>kkengineeringproject2015@gmail.com</p>
                </div>
            </div>
            <hr style={{ color: "black" }} />
            <div>
                <p style={{ textAlign: "center", backgroundColor:"#343a40" }}>All rights reserved &copy;{new Date().getFullYear()} -  KKConsult Engineering and Construction company Ltd</p>
            </div>

            
        </div>
)
}
