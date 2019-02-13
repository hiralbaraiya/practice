import React, { Component } from 'react';
import Registration from './Container/Registration';
import Notfound from './Container/Notfound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


class App extends Component {
  
  render() {
    return(
     <Router>
       <Switch>
        <Route exact path="/" component={Registration} />
        <Route component={Notfound} />
      </Switch>
     </Router>
    );
  }
}

export default App;
