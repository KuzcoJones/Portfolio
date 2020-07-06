import React from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core'
import HeadShot from '../images/KeenanHeadShot.jpg'

const about = () => {
 return (
  <section className="About" id="about">
    <article>
      <Typography variant="h2">About Me</Typography> <hr/>
      <br/>
      
      <Typography variant="h4">
      Hello! I'm Keenan, a full-stack software engineer based in Chicago, IL. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. In my previous life I was a Massage Therapist for 5 years. I learn how to communicate with clients and provide a custom experience that suits their needs. 
      </Typography>
      <br/>
    </article>
   

    <Card className="card" id="img-container">
      <CardMedia component="img" height="390" image={HeadShot} title = "Keenan" id="img"/>
    </Card>
    
  </section>
 )
}


export default about
