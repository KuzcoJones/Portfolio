import React from 'react'
import Features from '../components/features'
import { Typography } from '@material-ui/core'

// TO-DO
// Picture links that open the project in a new window and buttons on the picture to open 

const projects = () => {
 return (
  <section id="projects">
   <Typography variant="h2">Projects</Typography><hr/>
   <Features />
  </section>
 )
}

export default projects