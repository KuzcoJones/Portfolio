import React from 'react'
import {IconButton} from '@material-ui/core'
import {GitHub, LinkedIn, Twitter} from '@material-ui/icons'

const socials = () => {
 return (
  <ul className="socials">
   <li><IconButton href="https://github.com/KuzcoJones" target="_blank"><GitHub/></IconButton></li>
   <li><IconButton href="https://www.linkedin.com/in/keenan-jones215/" target="_blank" ><LinkedIn/></IconButton></li>
   <li><IconButton href="https://twitter.com/JeenanKones" target="_blank"><Twitter/></IconButton></li> 
  </ul>
 )
}

export default socials
