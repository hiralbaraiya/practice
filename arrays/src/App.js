import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp';
import LogIn from './LogIn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: []}
    this.setValues = this.setValues.bind(this);
    this.validate = this.validate.bind(this);
  }

  setValues(obj) {
    if (this.validate(obj)) {
      let obj2 = [...this.state.user, obj];
      this.setState({ user: obj2 });
    }
    else {
      alert('wrong input');
    }
  }

  validate(obj) {
    let valid = true;
    for (let i = 0; i < this.state.user.length; i++) {
      if (this.state.user[i].email == obj.email) {
        valid = false;
        break;
      }
      else {
        valid = true;
      }
    }
    return valid;
  }

  render() {
    return (
      <div>
        <div id='left'><SignUp sendValues={this.setValues} /></div>
        <div id='right'><LogIn data={this.state} /></div>
      </div>
    );
  }
}

export default App;
