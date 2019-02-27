import React, { Component } from 'react';
import { getUser, deletuser } from '../StudentApi/StudentApi';
import _ from 'lodash';
import './List.css';
import { NavLink } from 'react-router-dom';
import { Table, Badge, Navbar, NavbarBrand, Col } from 'reactstrap';
import InputField from '../Components/InputField';
import { DebounceInput } from 'react-debounce-input';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], error: false, loading: false,
      query: '',
    }
    this.filter = _.debounce(this.filter.bind(this), 800);
  }

  getlist() {
    this.setState({ loading: true })
    getUser('/list')
      .then((response) => {
        this.setState({ data: response.data.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      })
  }

  componentWillMount() {
    this.getlist()
  }

  delete(id) {
    if (window.confirm("Delete the item?")) {
      deletuser(`/delete/${id}`)
        .then((response) => {
          this.getlist();
        })
        .catch((error) => {
          this.setState({ error: true });
        })
    }
  }
  filter(v, field) {
    this.setState({ loading: true });
    getUser(`/list?search=${v}`)
      .then((response) => {
        this.setState({ data: response.data.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      })
  }


  render() {
    const { query } = this.state;
    return (<div className='App'>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <h1><Badge color="secondary">Student record</Badge></h1>
        </NavbarBrand>
        <Col sm={9}>
          <InputField
            prop={
              {
                type: 'text',
                // value: query,
                name: 'query',
                placeholder: 'search'
              }
            }
            inputChange={this.filter}
          />
        </Col>
        <NavLink to='/add' color='secondary'>Add User</NavLink>
      </Navbar>
      {this.state.loading ?
        <p>please wait while we are fetching...</p> :
        this.state.error ?
          <h1>there is some error</h1> :
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