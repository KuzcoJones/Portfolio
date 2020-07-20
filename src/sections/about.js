import React from 'react'
import { Card, CardMedia, Typography, } from '@material-ui/core'
import HeadShot from '../images/KeenanHeadShot.jpg'



// Working on animations 
import {Fade} from 'react-reveal';

const about = () => {
  return ( 
      <section className = "About" id="about">
          <Typography variant = "h2" > About Me </Typography> 
        <hr/>
        <br/>
        <Fade left>
          <Typography variant = "h5" id = "about-article" component = "article">
            After working as a massage therapist and even owning my own company, I started looking for a career change because of the physical aliments I've occured. One day a conversation with a client, that introduced me to the free online resources of developing, started my jounrey. I've always had a passion for technology and creating but I fell in love with the opportunity of building websites for small businesses. My hobbies include listening to podcasts and learning about history.
          </Typography> 
        </Fade>
          
        <br/>
        <Fade right>
          <Card className = "card" id = "img-container">
            <CardMedia component = "img"
            height = "390"
            image = { HeadShot }
            title = "Keenan"
            id = "img" />
          </Card>
        </Fade>
      </section>
  )
}


export default about