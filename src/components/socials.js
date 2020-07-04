import React from 'react'
import {IconButton} from '@material-ui/core'
import {GitHub, LinkedIn, Twitter} from '@material-ui/icons'

const socials = () => {
 return (
  <ul className="socials">
   <li><IconButton><GitHub/></IconButton></li>
   <li><IconButton><LinkedIn/></IconButton></li>
   <li><IconButton><Twitter/></IconButton></li> 
  </ul>
 )
}

export default socials
