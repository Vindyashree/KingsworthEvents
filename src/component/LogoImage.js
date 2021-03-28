import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from './images/logo.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,

  },
  media: {
    height: 440,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{alignContent:"center"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Logo}
          title="Logo"
        />
 
      </CardActionArea>
     
    </Card>
  );
}
