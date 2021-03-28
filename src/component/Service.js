import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LogoImage from './LogoImage';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import bgImage from './images/backgroundImageForService.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(200),
      height: theme.spacing(1),
    },
    textAlign: 'center',
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root} style = {{padding:"50px",fontSize:"2vw",alignItems:"center",backgroundImage:`url(${bgImage})`,backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>



<br></br>

<span style = {{padding:"10px",fontWeight:"bold",fontSize:"5vw"}}><Link to='/Gallery' style={{color: "white",textDecoration:"none"}}>Wedding</Link></span>
<br></br>
<br></br>

<span style = {{padding:"10px",fontWeight:"bold",fontSize:"5vw"}}><Link to='/Gallery' style={{color: "white",textDecoration:"none"}}>Corporate</Link></span>
<br></br>
<br></br>

<span style = {{padding:"10px",fontWeight:"bold",fontSize:"5vw"}}><Link to='/Gallery' style={{color: "white",textDecoration:"none"}}>Private Parties</Link></span>
<br></br>



    </div>
  );
}