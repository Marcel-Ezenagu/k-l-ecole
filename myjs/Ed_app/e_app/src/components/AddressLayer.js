import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function AddressLayer() {
    return (
        <div className='addressLayer'>
            <span><Icon color='black' name='mail' /> <a>test@itireschools.com</a></span>
            <span ><Icon color='black' name='phone'/><a>+234-8028292532</a></span>
        </div>
    )
}
