import React, { Component } from 'react';
import './App.css';
import Registration from './Container/Registration';
import Notfound from './Container/Notfound';
import List from './Container/List';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path='/edit/:id' component={Registration} />
          <Route exact path="/add" component={Registration} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    );
  }
}

export default App;