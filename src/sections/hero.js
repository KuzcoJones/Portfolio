import React from 'react'
import { Button, Typography} from '@material-ui/core'

const hero = () => {
 return (
  <section>
   <article id="hero-article">
    <Typography variant="h4"> Hello, my name is</Typography>
    <Typography variant="h1">Keenan Jones</Typography>
    <br/>
    <br/>
    <Typography variant="h5">I'm a software engineer based in Chicago, IL specializing in building beautiful, maintainable, and high-performing web applications. </Typography>
   </article>
   
   <Button id="hero-button" variant="contained" color="secondary" href="mailto:keenanjones210@gmail.com">
     Get In Touch
    </Button>
  </section>
 )
}

export default hero