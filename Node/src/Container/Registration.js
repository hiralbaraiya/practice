import React, { Component } from 'react';
import { updateValues, getUser } from '../StudentApi/StudentApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Label, Input, Col, } from 'reactstrap';
import './List.css';
import InputField from '../Components/InputField';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
      fname: '',
      lname: '',
      email: '',
      age: '',
      mobile: '',},
      error:false,
    }
    this.onChange = this.onChange.bind(this);
  }

  adduser() {
    let url = (this.props.match.path === '/add') ? '/create' : `/update/${this.state.data.id}`;
    updateValues(url, this.state.data)
      .then((response) => {
        this.setState({
         data:{
          fname: '',
          lname: '',
          email: '',
          age: '',
          mobile: ''
         },
        });
      })
      .catch((error) => {
        this.setState({error:true})
      });

  }

  onChange(value, name) {
    let obj = {...this.state.data};
    obj[name] = value;
    this.setState({data:obj});
  }

  getlist() {
    getUser(`/find/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({data:response.data.data});
      })
      .catch((error) => {
        this.setState({error:'true'})
      });
  }

  componentWillMount() {
    if (this.props.match.path === '/edit/:id') {
      this.getlist()
    }
  }

  render() {
    let { fname, lname, email, mobile, age } = this.state.data;
    return (
      <>
        <Form className='register'>
          {this.props.match.path === "/add" ? <h1>Registration</h1> : <h1>Edit User</h1>}
          <InputField
            prop={
              {
                type: 'text',
                value: fname,
                name: 'fname'
              }
            }
            regexp={/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/}
            inputChange={this.onChange}
          />

          <InputField
            prop={
              {
                type: 'text',
                value: lname,
                name: 'lname'
              }
            }
            regexp={/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/}
            inputChange={this.onChange}
          />

          <InputField
            prop={
              {
                type: 'email',
                value: email,
                name: 'email'
              }
            }
            regexp={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}
            inputChange={this.onChange}
          />

          <InputField
            prop={
              {
                type: 'number',
                value: age,
                name: 'age'
              }
            }
            regexp={/^[0-1]{1}[1-9]{1,2}/}
            inputChange={this.onChange}
          />

          <InputField
            prop={
              {
                type: 'number',
                value: mobile,
                name: 'mobile'
              }
            }
            regexp={/^[6-9]\d{9}$/}
            inputChange={this.onChange}
          />
           {
           this.state.error?
           <p className='danger'>there is some error</p>:<></>}
          <Button onClick={() => this.adduser()} className='button'> submit</Button>
          <Button onClick={() => { this.props.history.push('/'); }} color='primary' className='button'> Cancel</Button>

        </Form>
      </>
    )
  }
}

export default Registration;