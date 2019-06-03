import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Edit from './Components/Edit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
       <div className='container'>
         <Router>
         <Route exact path='/' component={Dashboard}/>
         <Route exact path='/edit/:id' component={Edit}/>
         </Router>
       </div>
      </div>
    );
  }
}

export default App;
