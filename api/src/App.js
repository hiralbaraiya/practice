import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import RemoteImage from 'react-remote-image'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isLoading: true };
    this.pagedisp = this.pagedisp.bind(this);
  }

  componentWillMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => {
        console.log(response);
        this.setState({ data: response.data, isLoading: false })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  pagedisp() {
    var obj = [];
    for (var i = 1; i <= this.state.data.total_pages; i++) {
      let mypath = i;
      obj.push(
        <Router>
          <div style={{ float: 'left', height: 30, width: 30, textAlign: 'center' }} className={'one' + i}>
            <NavLink to={'/' + mypath} style={{ textDecorationLine: 'none', color: 'black' }}>
              {i}
            </NavLink>
          </div>
        </Router>)
    }
    return (obj);
  }

  render() {
    return (
      <div className="App">
        <h1>User CRUD Application</h1>
        <Router><div>
          <NavLink to='/' className='link'>Record List</NavLink>
          |
        <NavLink to='/abc' className='link'>Add Record</NavLink>
        </div>
        </Router>
        <p></p>
        {this.state.isLoading ? <p>please wait while we are getting user details...</p> :
          <div>
            <div className='table'>
              <div>
                <div className='left'><b>Firstname</b></div>
                <div className='left'><b>Lastname</b></div>
                <div className='left'><b>Avtar</b></div>
                <div className='right'><b>Action</b></div>
              </div>
              {
                this.state.data.data.map((list) => {
                  return (
                    <div>
                      <div className='left'>{list.first_name}</div>
                      <div className='left'>{list.last_name}</div>
                      <div className='left'>
                        <RemoteImage style={{ width: 40, height: 40, padding: 5 }}
                          src={list.avatar}
                          renderLoading={() => (
                            <div className="image--loading">
                              Loading...
                          </div>
                          )}
                          alt="Meow meow cat"
                        /></div>
                      <div className='right'><Router><div>
                        <NavLink to='/' className='link'>Edit</NavLink>
                        |
                    <NavLink to='/abc' className='link'>Delete</NavLink></div>
                      </Router></div>
                    </div>)
                })
              }
            </div>
            <p></p>
            { 
              this.pagedisp()
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
