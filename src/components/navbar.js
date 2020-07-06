import React from 'react'
import { Tab, Tabs }  from '@material-ui/core'





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
        <Tab label="Resume" color="#ff6242"/>
      </Tabs>
    
  )
}

export default Navbar