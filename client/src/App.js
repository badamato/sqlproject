import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Verttabs from './components/Verttabs'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
      marginTop: 120,
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar />
        <CssBaseline />
        <Container maxWidth="lg">
          <Verttabs />
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(App);