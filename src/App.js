import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Challenges from './Challenges'
import Posts from './Posts'
import ListPage from './ListPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Yoooooo3</h2>
        </div>
        <Challenges />
        <Posts />
        <ListPage />
      </div>
    );
  }
}

export default App;
