import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Page1 from './Page1';
import newRecord from './newRecord';
import Edit from './Edit';

class App extends Component {

  render() {
  
    return (
      <div className="App">
        <h1>User CRUD Application</h1>
        <Router><div>
          <NavLink to='/' className='link'>Record List</NavLink>
          |
          <NavLink to='/list/new' className='link'>Add Record</NavLink>
          <p></p>
          <Route exact path='/' component={Page1}></Route>
          <Route exact path='/list/new' component={newRecord}></Route>
          <Route exact path='/list' component={Page1}></Route>
          <Route exact path='/list/:id' component={Edit}></Route>
        </div>
        </Router>
        <p></p>
      </div>
    );
  
  }

}

export default App;
