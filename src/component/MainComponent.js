import React, { Fragment } from 'react';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from './images/logo.jpg';
import '../App.css';
import Grid from './Grid';
import Gallery from './Gallery';
import HomePage from './Homepage';
import About from './About';
import Service from './Service';
import Footer from './Footer';

export default function SimpleContainer() {
  return (

    <BrowserRouter>
  
   <Grid />

      <Switch>
        <Route exact path='/' render={() => <HomePage/>} />
        <Route
          exact
          path='/Gallery'
          render={() => (
            <div>
             <Gallery />
            </div>
          )}
        />

<Route
          exact
          path='/HomePage'
          render={() => (
            <div>
             <HomePage />
            </div>
          )}
        />
        <Route
          exact
          path='/About'
          render={() => (
            <div>
           <About/>
            </div>
          )}
        />
         <Route
          exact
          path='/Service'
          render={() => (
            <div>
       <Service/>
            </div>
          )}
        />
      
      </Switch>
<Footer/>
  </BrowserRouter>
    
       
    
  );
}
