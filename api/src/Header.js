import React, { Component } from 'react';
import './App.css';
import { NavLink} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <div className="App">
<h1>User CRUD Application</h1>
  <NavLink to='/list' className='link'>Record List</NavLink>
  |
  <NavLink to='/user/new' className='link'>Add Record</NavLink>
  <p></p>
  </div>
  
        );

}}

export default Header;