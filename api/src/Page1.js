import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Table from './Table';


class Page1 extends Component {

  constructor(props) {

    super(props);
    this.state = { data: [], isLoading: true, Loading: false, page: 1 };
    this.setval = this.setval.bind(this);
  
  }

  setval(e) {
  
    this.setState({ page: e, Loading: true },()=>this.Getuser());

  
  }

  componentDidMount() {
    console.log('render')
    this.Getuser();

  }

  Getuser(){
    {
      axios.get('https://reqres.in/api/users?page=' + this.state.page)
        .then(response => {
          this.setState({ data: response.data, isLoading: false, Loading: false });
  
        })
  
        .catch(function (error) {
  
        });

    }
  }

  render() {
    
    return (
      <div>
        {this.state.isLoading ? <p>please wait while we are getting user details...</p> :
          <Table data={this.state} onChange={this.setval}></Table>}
        <div style={{ float: 'center' }}> {this.state.Loading ? <p>Fetching data...</p> : <p></p>}</div>
      </div>
    );

  }


}

export default Page1;