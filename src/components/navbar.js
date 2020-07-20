import React from 'react'
import { Tab, Tabs }  from '@material-ui/core'
import resume from '../content/Resume.pdf'




const Navbar = () => {
  

  return ( 
  
      <Tabs
        className="nav" 
        id="nav"
        textColor="primary"
        component="nav"
        >
        <Tab label="About" value='about' href="#about"/>
        <Tab label="Experience" href="#experience"/>
        <Tab label="Projects" href="#projects"/>
        <Tab label="Contact" href="#contact"/>
        <Tab id="resume" href={resume} target="_blank" label="Resume" color="#ff6242"/>
      </Tabs>
  )
}

export default Navbar