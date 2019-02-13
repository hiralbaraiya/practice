import React, { Component } from 'react';
import { Container, Form, Button, Label } from 'reactstrap';
import { InputField } from '../Components/InputField';
import Radio from '../Components/Radio';
import Password from '../Components/Password';
import { Checkbox } from '../Components/Checkbox';
import { Submit } from '../Utilities/Submit';
import '../App.css';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registration: {
        username: '',
        password: '',
        email: '',
        number: '',
        message: '',
        gender: '',
        subject: [],
        valid: true,
        validpass: true
      }
    };
    this.subject = [
      { name: 'subject', value: 'maths' },
      { name: 'subject', value: 'chemistry' },
      { name: 'subject', value: 'physics' }
    ];
    this.gender = ['male', 'female', 'other'];
    this.basestate = this.state.registration;
    this.handelchange = this.handelchange.bind(this);
    this.handelcheck = this.handelcheck.bind(this);
    this.edit = this.edit.bind(this);
    this.submit = this.submit.bind(this);
  }

  handelchange(e, id) {
    if (id !== 'confirmpassword') {
      let obj = { ...this.state.registration };
      obj[id] = e;
      this.setState({ registration: obj });
    }
  }

  submit() {
    let val = Submit(this.state.registration);
    if (val === false) {
      let obj = { ...this.state.registration };
      obj.valid = false;
      this.setState({ registration: obj });
      console.log('not submited');
    }
    else {
      console.log(this.state.registration);
      this.setState({ registration: this.basestate });
    }

  }

  handelcheck(e) {
    if (e.target.checked === true) {
      if (e.target.type === 'checkbox') {
        let stat = { ...this.state.registration };
        let obj = stat[`${e.target.name}`];
        if (!obj) {
          obj = stat.checkbox;
        }
        obj.push(e.target.value);
        let obj2 = { ...this.state.registration };
        obj2[`${e.target.name}`] = obj;
        this.setState({ registration: obj2 });
      }
      else {
        let obj2 = { ...this.state.registration };
        obj2.gender = e.target.value;
        this.setState({ registration: obj2 });
      }

    }
    else {
      let stat = { ...this.state.registration };
      let obj = stat[`${e.target.name}`];
      if (!obj) {
        obj = stat.checkbox;
      }
      let index = obj.indexOf(e.target.value);
      for (let i = index; i < obj.length; i++) {
        obj[i] = obj[i + 1];
      }
      obj.pop();
      let obj2 = { ...this.state.registration };
      obj2[`${e.target.name}`] = obj;
      this.setState({ registration: obj2 });
    }
  }

  edit() {
    let obj = {
      username: 'hiral',
      email: 'hiral@gmail.com',
      password: '',
      number: 8140052312,
      message: 'hello hiiiiii!!!!',
      gender: 'female',
      subject: ['maths', 'chemistry'],
      valid: true
    };
    this.setState({ registration: obj });
  }

  render() {
    let { username, password, email, gender, subject, valid, message, number } = this.state.registration;
    return (
      <Container >
        <Form className='App'>
        <h1>Register</h1>
        <br></br>
          <InputField
            type='text'
            value={username}
            name='username'
            valid={valid}
            regexp={/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/}
            onChange={this.handelchange}
          /><Label sm={2}>Gender</Label>
          <Radio
            type='radio'
            value={this.gender}
            onClick={this.handelcheck}
            stat={gender}
          />
          {
            (gender === '' && valid === false)
              ? <Label className="text-danger">*required</Label >
              : <span></span>
          }
          <br></br><br></br>
          <Password
            type='password'
            value={password}
            name='password'
            valid={valid}
            regexp={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
            onChange={this.handelchange}
          />
          <InputField
            type='email'
            value={email}
            name='email'
            valid={valid}
            regexp={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}
            onChange={this.handelchange}
          />
          <InputField
            type='number'
            value={number}
            name='number'
            valid={valid}
            regexp={/^[6-9]\d{9}$/}
            onChange={this.handelchange}
          />
          <Label sm={2}>Subject</Label>
          <Checkbox value={this.subject}
            isplane={false}
            onClick={this.handelcheck}
            stat={subject}
          />
          {
            (subject.length === 0 && valid === false)
              ? <Label className="text-danger">*required</Label>
              : <span></span>
          }
          <br></br><br></br>
          <InputField
            type='textarea'
            value={message}
            name='message'
            valid={valid}
            onChange={this.handelchange}
          />
          <InputField />
          <Button color='primary' onClick={this.submit}>Submit</Button>
          <Button onClick={this.edit} className='right'>Edit</Button>
          <br></br><br></br>
        </Form>
      </Container>
    );
  }
}

export default Registration;
