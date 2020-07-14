import React from 'react'
import { Button, Typography } from '@material-ui/core'

const contact = () => {
 return (
  <section id="contact">
   <Typography variant="h3">Currently looking for new opportunities </Typography>
   <Button href="mailto:keenanjones210@gmail.com" variant="contained" color="secondary">
     Say Hello
   </Button>
  </section>
 )
}

export default contact