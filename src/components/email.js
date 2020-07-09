import React from 'react'
import { Link, Typography } from '@material-ui/core'

const email = () => {
 return (
  <div className="email">
   <Link href="mailto:keenanjones210@gmail.com" color="black" component="a" underline='none'><Typography variant="h6" id="email">keenanjones210@gmail.com</Typography></Link>
  </div>
 )
}

export default email
