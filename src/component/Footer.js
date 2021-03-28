import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor:"black",padding:"25px"}}>
      <div style = {{padding:"5px",fontWeight:"bold",fontSize:"2vw",color:"white",textAlign:"center"}}>
        Follow And Contact At</div>
      
       <a  href="https://www.instagram.com/kingsworthevents/" style={{color:"white"}}>
      <Badge>      
        <FacebookIcon />   
      </Badge>
      </a>
      <a href="https://www.instagram.com/kingsworthevents/" style={{color:"white"}} >
      <Badge  color="secondary">    
        <InstagramIcon />     
      </Badge>
      </a>
      <a href="mailto:Kingsworth.in@gmail.com" style={{color:"white"}}>
      <Badge>
        <MailIcon />
      </Badge>
      </a>
    
    </div>
  );
}