import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: 160,
    height: 70,
    padding: 2,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Playfair Display',
    fontWeight: 'bold',
    color: '#2c86ba',
  },
}));


function Navbar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar color='inherit' position='fixed'>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
                SQL Assessment
          </Typography>
          <img src={require('../images/cai3.png')} alt="logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;