import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Socials from './socials'
import Email from './email'
// Create a side bar for email and social buttons

const layout = ({children}) => {
 return (
  <>
    <Navbar />
    <Email />
      <main>
        {children}
      </main>
    <Socials />
    <Footer />
  </>
 )
}

export default layout