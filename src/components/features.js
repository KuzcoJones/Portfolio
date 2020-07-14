import React from 'react'
import {
      IconButton,
      Card,
      CardHeader,
      CardActionArea,
      CardMedia,
      CardActions,
      Grid
} from '@material-ui/core';

import {GitHub, PlayArrow, } from '@material-ui/icons'
import ShoutRandomly from '../images/SignupShout.jpeg'
import Day21 from '../images/Day21 .png'
import weather from '../images/weather-app.png'




const features = () => {

      return ( 
      <Grid className="features" spacing={2} justify="space-evenly">
            <Card class = 'card' >
                  <CardHeader title="ShoutRandomly"/>
                  <CardActionArea >
                        <CardMedia 
                        component="img"
                        height="290"
                        image={ShoutRandomly}
                        title = "ShoutRandomly"
                        / >
                              
                  </CardActionArea> 
                  <CardActions>
                        <IconButton className="feature-button" href="https://youtu.be/3adb9v1WIyA" target="_blank">
                              <PlayArrow color="secondary"/>
                        </IconButton>
                        <IconButton className="feature-button" href="https://github.com/KuzcoJones/FE-ShoutRandomlyPart-III" target="_blank">
                              <GitHub color="secondary"/>
                        </IconButton>
                  </CardActions>
            </Card>
            

            <Card class = 'card'>
                  <CardHeader title="Day21"/>
                  <CardActionArea >
                        <CardMedia 
                        component="img"
                        height="290"
                        image={Day21}
                        title = "Day21"
                        />
                              
                  </CardActionArea> 
                  <CardActions>
                        <IconButton className="feature-button" href="https://github.com/KuzcoJones/FE-Day21" target="_blank">
                              <GitHub color="secondary"/>
                        </IconButton>
                  </CardActions>
            </Card>

            <Card class = 'card' >
                  <CardHeader title="Weather Widget" color="primary"/>
                  <CardActionArea >
                        <CardMedia 
                        component="img"
                        height="290"
                        image={weather}
                        title = "Weather Widget"
                        />
                  </CardActionArea> 
                  <CardActions>
                        <IconButton className="feature-button"  >
                              <GitHub  color="secondary"/>
                        </IconButton>
                  </CardActions>
            </Card> 
      </Grid>
      )
}

export default features;