import React from 'react'
import { Button } from '@material-ui/core'

const hero = () => {
 return (
  <section>
   <article id="hero-article">
    <h4>Hello, my name is</h4>
    <h1>Keenan Jones.</h1>
    <h2>I build things for the web</h2>
    <p>I'm a software engineer based in Chicago, IL specializing in building beautiful, maintainable, high-quality, and high-performing web applications. </p>
   </article>
   

   {/* button here that sends a email  to  my email*/}

   <Button variant="contained" href="mailto:keenanjones210@gmail.com">
     Get In Touch
     {/* <a href="mailto:keenanjones210@gmail.com">Get In Touch</a> */}
    </Button>
  </section>
 )
}

export default hero