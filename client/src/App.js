import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Verttabs from './components/Verttabs'

import './styles/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Verttabs />
      </div>
    );
  }
}

export default App;