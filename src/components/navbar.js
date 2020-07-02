import React from 'react'
import { Tab, Tabs }  from '@material-ui/core'





const Navbar = () => {
  return ( 
  <nav className = "nav" id="nav">
      <Tabs 
        textColor="primary"
        aria-label="disabled tabs example">
        <Tab label="About" value='about' href="#about"/>
        <Tab label="Experience" href="#experience"/>
        <Tab label="Projects" href="#projects"/>
        <Tab label="Contact" href="#contact"/>
        <Tab label="Resume" />
      </Tabs>
    </nav>
  )
}

export default Navbar