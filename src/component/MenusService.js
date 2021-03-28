import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Service
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
        <MenuItem onClick={handleClose}><Link to='/Gallery' style={{color: "black",textDecoration:"none"}}>Wedding</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/About' style={{color: "black",textDecoration:"none"}}>Corporate</Link></MenuItem>
        <MenuItem onClick={handleClose}>Birthday</MenuItem>
      </Menu>
    </div>
  );
}