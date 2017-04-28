import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Challenges from './Challenges'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Yoooooo3</h2>
        </div>
        <Challenges />
      </div>
    );
  }
}

export default App;
