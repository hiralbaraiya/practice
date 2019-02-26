import React, { Component } from 'react';
import { getUser, deletuser } from '../StudentApi/StudentApi';
import './List.css';
import { NavLink } from 'react-router-dom';
import { Table, Badge, Navbar, NavbarBrand,Col } from 'reactstrap';
import {DebounceInput} from 'react-debounce-input';
 

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [],error:false,loading:false}
  }

  getlist() {
    this.setState({loading:true})
    getUser('/list')
      .then((response) => {
        this.setState({ data: response.data.data,loading:false });
      })
      .catch((error) => {
        this.setState({error:true,loading:false});
      })
  }

  componentWillMount() {
    this.getlist()
  }

  delete(id) {
    if (window.confirm("Delete the item?")) {
      deletuser(`/delete/${id}`)
        .then((response) => {
          this.getlist()
        })
        .catch((error) => {
          this.setState({error:true});
        })
    }
  }
  filter(e){
    var searchString=e.target.value;
    this.setState({loading:true})
    getUser(`/list?search=${searchString}`)
      .then((response) => {
        this.setState({ data: response.data.data ,loading:false});
      })
      .catch((error) => {
        this.setState({error:true,loading:false});
      })
  }


  render() {

    return (<div className='App'>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <h1><Badge color="secondary">Student record</Badge></h1>
        </NavbarBrand>
       <Col sm={9}> <DebounceInput 
       debounceTimeout={800}
       type='text' placeholder='search...' onChange={(e)=>this.filter(e)} className='form-control search'></DebounceInput>
       </Col>
        <NavLink to='/add' color='secondary'>Add User</NavLink>
      </Navbar>
      {this.state.loading?
      <p>please wait while we are fetching...</p>:
      this.state.error?
      <h1>there is some error</h1>:
      <Table striped responsive hover bordered className='tab'>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
          {this.state.data.map((list) => {
            return (
              <tr key={list.id}>
                <th scope="row">{list.id}</th>
                <td>{list.fname}</td>
                <td>{list.lname}</td>
                <td>{list.age}</td>
                <td>{list.email}</td>
                <td>{list.mobile}</td>
                <td>
                  <NavLink
                    to='/'
                    className='link'
                    onClick={() => this.delete(list.id)}>
                    Delete
                  </NavLink>|
                  <NavLink
                    to={`/edit/${list.id}`}
                    className='link'>
                    Edit
                  </NavLink></td>
              </tr>
            )
          }
          )
          }
        </tbody>
      </Table>}
    </div>
    );
  }
}

export default List;