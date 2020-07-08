import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {School} from '@material-ui/icons'

const education = () => {
 return (
  <Grid className= "education-experience" id="education">
     <School style={{ fontSize: 60, color: 'white'}} />
    <Typography variant="subtitle1" className="experience-title">Education</Typography> <hr/>
    <Typography variant="h6">
      Full Stack Web Development, Ruby on Rails and JavaScript immersive program
    </Typography>
  </Grid>
 )
}

export default education
