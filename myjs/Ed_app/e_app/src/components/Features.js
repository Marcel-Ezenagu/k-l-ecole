import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'


export default function Features() {
    return (
        <div className='home_card' id="home">
        <div className='cards'>
            

                <div className='icons'>
                    <span>Skilled Teachers</span>
                    {/* <span>Our exquisite fleet of alumni keep our flag flying.</span> */}
                    <Icon color='red' circular name='users' />
            
                </div>
                
            
                <div className='icons'>
                    <span>Certification</span>
                    {/* <span>Our exquisite fleet of alumni keep our flag flying.</span> */}
                    <Icon color='red' circular name='graduation' />
            
                </div>
            
            
                <div className='icons' >
                    <span>Library & Store</span>
                    {/* <span>Our exquisite fleet of alumni keep our flag flying.</span> */}
                    <Icon color='red' circular name='book' />
            
                </div>
               
        </div>
   </div>
    )
}
