import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function AddressLayer() {
    return (
        <div className='addressLayer'>
           <a href='#email'> <Icon color='black' name='mail' /></a>
          <a href='#phone'>  <Icon color='black' name='phone'/></a>
        </div>
    )
}
