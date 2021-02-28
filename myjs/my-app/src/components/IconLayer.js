import React from 'react'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'


export default function AddressLayer() {
    return (
        <div className='addressLayer'>
            <a href='#email'>
                <EmailIcon style={{color:"red"}}/>
            </a>
            <a href='#phone'>
                <PhoneIcon style={{color:"red"}}/>
            </a>
        </div>
    )
}
