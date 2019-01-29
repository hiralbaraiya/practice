import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Add from './Add';
import Header from './Header';
import Page from './Page'

class App extends Component {

  render() {
  
    return (
      <div className="App">
         <Router><div>
            <Route path='/' component={Header}></Route>
          <Route exact path='/list' component={Page}></Route>
          <Route exact path='/user/:id' component={Add}></Route></div></Router>
        <p></p>
      </div>
    );
  
  }

}

export default App;
