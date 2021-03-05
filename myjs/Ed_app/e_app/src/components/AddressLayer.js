import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function AddressLayer() {
    return (
        <div className='addressLayer'>
           <a href='#email'> <Icon color='red' name='mail' /></a>
          <a href='#phone'>  <Icon color='red' name='phone'/></a>
        </div>
    )
}
