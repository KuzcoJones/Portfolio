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
            Hello my name is Keenan I’ m a software developer. Before becoming a software developer I was a massage therapist. I've always had a passion
            for building and creating things and programming just seem like a match made in heaven. I’ m looking to join a team that can use my immediate talents but also provide learning opportunities from more experienced developers.My hobbies include learning about history and listening to podcasts. 
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