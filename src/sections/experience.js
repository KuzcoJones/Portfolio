import React from 'react'
import Education from '../components/education.js'
import Work from '../components/work.js'
import { Grid, Typography } from '@material-ui/core'
// An accordian with my jobs and on the open have the details and length of time show

const experience = () => {
 return (
  <Grid id="experience" component="section" > 
   <Typography variant="h2">Experience</Typography><hr/>
   <Typography variant="h5" id="mission">My Mission is</Typography>
    <Typography variant="h4" id="statement">
      DESIGNING EASY TO NAVIGATE AND APPEALING WEBSITES FOR BUSINESS OPTIMIZATION. 
    </Typography>

   <Grid item  component={Work} />
   <Grid item  component={Education} />
  </Grid>
 )
}

export default experience