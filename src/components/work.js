import React from 'react'
import {Work} from '@material-ui/icons'
import {Typography} from '@material-ui/core'

const work = () => {
 return (
  <div className= "education-experience" id="work">
   <Work style={{ fontSize: 60, color: 'white' }} />
    <Typography variant="subtitle1" className="experience-title">Experience</Typography> <hr/>
    <Typography variant="h6" id="freelance">Freelance Developer</Typography>
      <br/>
  </div>
 )
}

export default work
