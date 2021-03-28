import React from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ServiceMenu from './MenusService';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor : "black"}}>
      <Grid container spacing={2}>       
        <Grid item xs={4} style={{fontWeight: "bold",padding : "25px"}}>
        
        <Link to='/HomePage' style={{color: "white",textDecoration:"none"}}>Kingsworth</Link>
        { /* <Paper   style={{backgroundColor: "rgba(201, 186, 76, 0.0)",color: "black",fontWeight: "bold",border: "0px"}}>Kingsworth</Paper>*/}
        </Grid>
        <Grid item xs={2} style = {{padding : "25px"}}>
<Link to='/Gallery' style={{color: "white",textDecoration:"none"}}>Gallery</Link>
        </Grid>
        <Grid item xs={2}  style = {{padding : "25px"}}>
        <Link to='/About' style={{color: "white",textDecoration:"none"}}>About</Link>
         
        </Grid>
        <Grid item xs={2}  style = {{padding : "25px"}}>
        <Link to='/Service' style={{color: "white",textDecoration:"none"}}>Service</Link>
        </Grid>
 
      </Grid>
    </div>
  );
}