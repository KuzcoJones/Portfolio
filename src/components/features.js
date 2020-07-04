import React from 'react'
import {
      IconButton,
      Button,
      Paper,
      Card,
      CardHeader,
      CardActionArea,
      CardMedia,
      CardContent,
      CardActions,
      Typography,
      Grid
} from '@material-ui/core';

import {GitHub, PlayArrow, } from '@material-ui/icons'
// import classes from '*.module.css';
import ShoutRandomly from '../images/SignupShout.jpeg'




const features = () => {

      return ( 
      <Grid className="features" spacing={2} justify="space-evenly">
            <Card className = 'card'>
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
                        <IconButton>
                              <PlayArrow/>
                        </IconButton>
                        <IconButton>
                              <GitHub/>
                        </IconButton>
                  </CardActions>
            </Card>
            

            <Card className = 'card'>
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
                        <IconButton>
                              <PlayArrow/>
                        </IconButton>
                        <IconButton>
                              <GitHub/>
                        </IconButton>
                  </CardActions>
            </Card>

            <Card className = 'card'>
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
                        <IconButton>
                              <PlayArrow/>
                        </IconButton>
                        <IconButton>
                              <GitHub/>
                        </IconButton>
                  </CardActions>
            </Card> 
      </Grid>
      )
}

export default features;