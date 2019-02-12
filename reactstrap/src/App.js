import React, { Component } from 'react';
import './App.css';
import { Container, Form, Button, Navbar, NavbarBrand, Nav } from 'reactstrap';
import InputField from './Components/InputField';
import Radio from './Components/Radio';
import Password from './Components/Password';
import Checkbox from './Components/Checkbox';

class Try extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form1: {
        username: '',
        password: '',
        email: '',
        number: '',
        message: '',
        gender: '',
        subject: [],
        a: [],
        checkbox: [],
        valid: true,
        validpass: true
      }
    };
    this.basestate = this.state.form1;
    this.handelchange = this.handelchange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.edit = this.edit.bind(this);
    this.submit = this.submit.bind(this);
  }

  handelchange(e, id) {
    if (id !== 'confirmpassword') {
      let obj = { ...this.state.form1 };
      obj[id] = e;
      this.setState({ form1: obj });
    }
  }

  submit() {
    var val;
    let obj = { ...this.state.form1 };
    Object.keys(obj).map(function (keyName, keyIndex) {
      if (keyName === 'subject' || keyName === 'checkbox' || keyName === 'a') {
        if (obj[keyName].length === 0) {
          val = false;
        }
      }
      else {
        if (obj[keyName] === '' || obj[keyName] === null || obj[keyName] === undefined) {
          val = false;
        }
      }
    })
    let obj2 = { ...this.state.form1 };
    obj2.valid = val;
    this.setState({ form1: obj2 }, () => {
      if (this.state.form1.valid === false) {
        console.log('not submitted');
      }
      else {
        if (this.state.form1.validpass === false) {
          console.log('not submitted');
        }
        else {
          console.log(this.state.form1);
          this.setState({ form1: this.basestate });
        }
      }
    });

  }

  onClick(e) {
    if (e.target.checked === true) {
      if (e.target.type === 'checkbox') {
        let stat = { ...this.state.form1 };
        let obj = stat[`${e.target.name}`];
        if (!obj) {
          obj = stat.checkbox;
        }
        obj.push(e.target.value);
        let obj2 = { ...this.state.form1 };
        obj2[`${e.target.name}`] = obj;
        this.setState({ form1: obj2 });
      }
      else {
        let obj2 = { ...this.state.form1 };
        obj2.gender = e.target.value;
        this.setState({ form1: obj2 });
      }

    }
    else {
      let stat = { ...this.state.form1 };
      let obj = stat[`${e.target.name}`];
      if (!obj) {
        obj = stat.checkbox;
      }
      let index = obj.indexOf(e.target.value);
      for (let i = index; i < obj.length; i++) {
        obj[i] = obj[i + 1];
      }
      obj.pop();
      let obj2 = { ...this.state.form1 };
      obj2[`${e.target.name}`] = obj;
      this.setState({ form1: obj2 });
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
      a: [2],
      checkbox: [],
      valid: true
    };
    this.setState({ form1: obj });
  }

  render() {
    let state = this.state.form1;
    let subject = [
      { name: 'subject', value: 'maths' },
      { name: 'subject', value: 'chemistry' },
      { name: 'subject', value: 'physics' }
    ];
    let gender = ['male', 'female', 'other'];
    let box = [{ a: 'a', b: 2 }, { a: 'a', b: 3 }];
    return (
      <Container className='App'>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">User LogIn</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Button color='link' onClick={this.edit}>Edit</Button>
          </Nav>
        </Navbar>
        <Form>
          <InputField
            type='text'
            value={state.username}
            name='username'
            onChange={this.handelchange}
            val={(state.username === '' && state.valid === false) ? false : true}
          >
          </InputField>
          <Password
            type='password'
            value={state.password}
            name='password'
            onChange={this.handelchange}
            val={(state.password === '' && state.valid === false) ? false : true}
          >
          </Password>
          <InputField
            type='email'
            value={state.email}
            name='email'
            onChange={this.handelchange}
            val={(state.email === '' && state.valid === false) ? false : true}
          >
          </InputField>
          <InputField
            type='number'
            value={state.number}
            name='number'
            onChange={this.handelchange}
            val={(state.number === '' && state.valid === false) ? false : true}
          >
          </InputField>
          <InputField
            type='textarea'
            value={state.message}
            name='message'
            onChange={this.handelchange}
            val={(state.message === '' && state.valid === false) ? false : true}

          >
          </InputField>
          <InputField></InputField>
          <Radio
            type='radio'
            value={gender}
            onClick={this.onClick}
            stat={state.gender}
          >
          </Radio>
          {
            (state.gender === '' && state.valid === false)
              ? <p className="text-danger">*required</p>
              : <span></span>
          }
          <br></br>
          <Checkbox value={subject}
            isplane={false}
            onClick={this.onClick}
            stat={state.subject}
          ></Checkbox>
          {
            (state.subject.length === 0 && state.valid === false)
              ? <p className="text-danger">*required</p>
              : <span></span>
          }
          <br></br>
          <Checkbox
            onClick={this.onClick}
            stat={state.checkbox}></Checkbox>
          {
            (state.checkbox.length === 0 && state.valid === false)
              ? <p className="text-danger">*required</p>
              : <span></span>
          }
          <br></br>
          <Checkbox value={box}
            isplane={false}
            name='a'
            id='b'
            stat={state.a}
            onClick={this.onClick}
          ></Checkbox>
          {
            (state.a.length === 0 && state.valid === false)
              ? <p className="text-danger">*required</p>
              : <span></span>
          }
          <br></br>
          <Button onClick={this.submit}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Try;
