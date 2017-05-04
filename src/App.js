import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Challenges from './Challenges'
import Posts from './Posts'
import CreateChallenge from './CreateChallenge'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Yoooooo3</h2>
          </div>
          <Challenges />
          <Posts />
          <CreateChallenge />
          {/* <ListPage /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
