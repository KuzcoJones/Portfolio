import React from 'react'
import {Work} from '@material-ui/icons'
import {Typography} from '@material-ui/core'
import {Fade} from 'react-reveal'
const work = () => {
 return (
  <div className= "education-experience" id="work">
   <Fade bottom><Work style={{ fontSize: 60, color: 'white' }} /></Fade>
    <Typography variant="subtitle1" className="experience-title">Experience</Typography> <hr/>
    <Typography variant="h6" id="freelance">Freelance Developer</Typography>
      <br/>
  </div>
 )
}

export default work
