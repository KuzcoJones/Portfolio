import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import {School} from '@material-ui/icons'

const education = () => {
 return (
  <Grid className= "education-experience" id="education">
     <School style={{ fontSize: 80 }}/>
     <Typography>
    The George Washington University
     B.A. Political Science
   </Typography>
   <Typography>
   Flatiron School
   Web Development Immersive
   </Typography>
  </Grid>
 )
}

export default education
