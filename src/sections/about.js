import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import HeadShot from '../images/KeenanHeadShot.jpg'

const about = () => {
 return (
  <section className="About" id="about">
    <article>
      <h1>About Me</h1>
      <p>
      Hello! I'm Keenan, a full-stack software engineer based in Chicago, IL.
      </p>
    </article>
   

    <Card className="card" id="img-container">
      <CardMedia component="img" height="390" image={HeadShot} title = "Keenan" id="img"/>
    </Card>
    
  </section>
 )
}

// I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.

export default about
