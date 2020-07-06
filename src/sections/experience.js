import React from 'react'
import Education from '../components/education.js'
import Experience from '../components/experience.js'
import { Grid } from '@material-ui/core'
// An accordian with my jobs and on the open have the details and length of time show

const experience = () => {
 return (
  <Grid id="experience" component="section" >
   <h1>experience</h1>
   < Grid item component={Experience} />
   < Grid item component={Education} />
  </Grid>
 )
}

export default experience