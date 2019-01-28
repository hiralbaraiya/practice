import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { nearer } from 'q';
import newRecord from './newRecord';

class Edit extends Component {
  constructor(props){
    super(props);
    this.state={ data: { name: '', job: '' }, isLoading: false,loading:true};
  }

  componentDidMount() {
    let page=Math.ceil(this.props.match.params.id/3);
    let val=(this.props.match.params.id%3);
    let param=((val===0)?val+2:val-1);
    axios.get('https://reqres.in/api/users?page=' +page)
      .then(response => {
        this.setState({data: response.data.data[param],loading:false});
  
      })
  
      .catch(function (error) {
  
      });

  }
  onChange(e, val) {
    console.log('onchange');
    let obj = { ...this.state.data };
    obj[val] = e.target.value;
    console.log(obj);
    this.setState({ data: obj });

  }

  onsubmit() {

    this.setState({ isLoading: true });
    axios.post('https://reqres.in/api/users', this.state.data)
      .then(response => {
        console.log(response);
        this.props.history.push('/list');
      })
      .catch(function (error) {
    
      });

  }

  render() {
    let page=Math.ceil(this.props.match.params.id/3);
    return (<div>
      <p><b>Edit User</b></p>
      <form>
          Name:<br></br>
        <input type='text' value={this.state.data.first_name} onChange={(e) => this.onChange(e, 'first_name')}></input>
        <br></br>{console.log(this.state.data.first_name)}
        <label>Job:</label>
        <br></br>
        <input type='text' value={this.state.data.last_name} onChange={(e) => this.onChange(e, 'last_name')}></input>
        <p></p>
        {this.state.loading?<p>loading</p>:
          <img src={this.state.data.avatar} alt='user'></img>}
      </form>
      <button className="submit" onClick={(e) => this.onsubmit()}>{this.state.isLoading ? <p>pleasewait</p> : <p>submit</p>}</button>
      <button onClick={(e) => { this.props.history.push('/list') }}>Cancel</button>
    </div>
    );
  
  }

}
Edit.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default Edit;