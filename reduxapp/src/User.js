import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const getuser = () => {
  return dispatch => {
    axios.get('https://reqres.in/api/users/2')
      .then((response) => {

        dispatch({ type: 'ADD_ITEM', payload: response.data.data.first_name })

      })
  }
}

class User extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='user'>
        <button onClick={() => { this.props.dispatch(getuser()) }}>get user</button>
      </div>
    )
  }
}

export default connect()(User)