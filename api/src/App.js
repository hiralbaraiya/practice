import React, { Component } from 'react';
import './Css/App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Add from './Components/Add';
import Header from './Components/Header';
import Page from './Components/Page';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={Header}></Route>
            <Route exact path='/list' component={Page}></Route>
            <Route exact path='/user/:id' component={Add}></Route>
          </div>
        </Router>
        <p></p>
      </div>
    );

  }

}

export default App;
