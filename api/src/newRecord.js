import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class newRecord extends Component {

  constructor(props) {

    super(props);
    this.state = { data: { name: '', job: '' }, isLoading: false };
    this.validate = this.validate.bind(this);
 
  }

  onChange(e, val) {

    let obj = { ...this.state.data };
    obj[val] = e.target.value;
    this.setState({ data: obj });

  }

  onsubmit() {
    
    this.validate();
    this.setState({ isLoading: true });
    axios.post('https://reqres.in/api/users', this.state.data)
      .then(response => {

        console.log(response);
        this.props.history.push('/list');
      
      })
      
      .catch(function (error) {
      
      });

  }

  validate() {

    console.log('validation');

  }

  render() {

    return (
      <div className="new">
        <p><b>Add user</b></p>
        <form>
          Name:<br></br>
          <input type='text' placeholder='enter first name' onChange={(e) => this.onChange(e, 'name')}></input>
          <br></br>
          <label>Job:</label>
          <br></br>
          <input type='text' placeholder='enter last name' onChange={(e) => this.onChange(e, 'job')}></input>
          <p></p>
        </form>
        <button className="submit" onClick={(e) => this.onsubmit()}>{this.state.isLoading ? <p>pleasewait</p> : <p>submit</p>}</button>
        <button onClick={(e) => { this.props.history.push('/list') }}>Cancel</button>
      </div>
    );
  
  }

}

newRecord.propTypes = {

  history: PropTypes.object,
  
};

export default newRecord;
