import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PostDetail from './components/PostDetail'

class App extends Component {
  render() {
    return (
    <Router>
      <MuiThemeProvider>
        <div className="grid-center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="os/about" render={() => <h1>about</h1>} />
          <Route path="/post/:id" component={PostDetail} />
          <Route render={() => <h1>Page Not Found</h1>}/>
        </Switch>
        </div>
      </MuiThemeProvider>
    </Router>
    );
  }
}

export default App
