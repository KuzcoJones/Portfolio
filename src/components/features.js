import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Grid } from '@material-ui/core';
// import classes from '*.module.css';





const features = () => {

 return (
  <div>
   <Card className='card'>
    <CardActionArea>
    <CardMedia />
    <CardContent>
     <Typography>
      Im just a good boy
     </Typography>
    </CardContent>
   </CardActionArea>
   </Card>

   <Card className='card'>
    <CardActionArea>
    <CardMedia image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"/>
    <CardContent>
     <Typography>
      Im just a good boy
     </Typography>
    </CardContent>
   </CardActionArea>
   </Card>

   <Card className='card'>
    <CardActionArea>
    <CardMedia />
    <CardContent>
     <Typography>
      Im just a good boy
     </Typography>
    </CardContent>
   </CardActionArea>
   </Card>
  </div>
 )
}

export default features;
