import React, { Component } from 'react';
import './App.css';
import { Container, Form, FormGroup, Button, Navbar, NavbarBrand, Nav, FormText } from 'reactstrap';
import InputField from './Components/InputField';
import Select from './Components/Select';
import Confirm from './Components/Confirm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      number: '',
      message: '',
      gender: '',
      subject: [],
      valid: true
    };
    this.basestate=this.state;
    this.handelchange = this.handelchange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.edit = this.edit.bind(this);
    this.submit = this.submit.bind(this);
  }

  handelchange(e, id) {
    if (id !== 'confirmpassword') {
      let obj = {}
      obj[id] = e;
      this.setState(obj);
    }

  }

  submit() {
    var val
    let obj = { ...this.state }
    Object.keys(obj).map(function (keyName, keyIndex) {
      if(keyName==='subject'){
        if (obj[keyName].length ===0) {
          val=false;
        }
      }
      else{
      if (obj[keyName] === undefined) {
        val = false;
      }
    }
    })
    this.setState({ valid: val },()=>{
      if(this.state.valid===false){
        console.log('not submitted')
      }
      else{
        this.setState(this.basestate,()=>console.log(this.state));
        
      }
    });
    
   
    
  
      
    //this.setState({valid:false})
  }

  onClick(e) {
    if (e.target.checked === true) {
      if (e.target.type === 'checkbox') {
        let obj = [...this.state.subject];
        obj.push(e.target.value);
        this.setState({ subject: obj });
      }
      else {
        this.setState({ gender: e.target.value });
      }

    }
    else {
      let obj = [...this.state.subject];
      let index = obj.indexOf(e.target.value);
      for (let i = index; i < obj.length; i++) {
        obj[i] = obj[i + 1];
      }
      obj.pop();
      this.setState({ subject: obj });
    }
  }

  edit() {
    console.log('edit')
    let obj = {
      username: 'hiral',
      email: 'hiral@gmail.com',
      number: 8140052312,
      message: 'hello hiiiiii!!!!',
      password:'hiral123',
      gender: 'female',
      subject: ['maths', 'chemistry'],
    }
    this.setState(obj);
  }

  render() {
    let state = this.state;
    return (
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Button color='link' onClick={this.edit}>Edit</Button>
          </Nav>
        </Navbar>
        <Form>
          <InputField
                type= 'text'
                value={this.state.username}
                name='username'
                onChange={this.handelchange}
                val={(state.username === '' && state.valid === false) ? false : true}
          >
          </InputField>
          <InputField
                type= 'password'
                value={state.password}
                name='password'
                onChange={this.handelchange}
                val={(state.password === '' && state.valid === false) ? false : true}
            >
          </InputField>
          <Confirm
               type='password'
               check={state.password}
               name='confirmpassword'
               onChange={this.handelchange}
               val={(state.password === '' && state.valid === false) ? false : true}
          >
          </Confirm>
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
          <FormGroup check inline>
            <Select
              type='radio'
              name='gender'
              value='male'
              state={state.gender}
              onClick={this.onClick}
            >

            </Select>
            <Select
              type='radio'
              name='gender'
              value='female'
              state={state.gender}
              onClick={this.onClick}>
            </Select>
            <Select
              type='radio'
              name='gender'
              value='other'
              state={state.gender}
              onClick={this.onClick}>
            </Select>
            {(state.gender === '' && state.valid === false) ? <p className="text-danger">*required</p> : <span></span>}
          </FormGroup>
          <br></br>
          <br></br>
          <FormGroup check inline>
            <Select
              type='checkbox'
              name='subject'
              value='maths'
              state={state.subject[state.subject.indexOf('maths')]}
              onClick={this.onClick}>
            </Select>
            <Select
              type='checkbox'
              name='subject'
              value='chemistry'
              state={state.subject[state.subject.indexOf('chemistry')]}
              onClick={this.onClick}>
            </Select>
            <Select
              type='checkbox'
              name='subject'
              value='physics'
              state={state.subject[state.subject.indexOf('physics')]}
              onClick={this.onClick}>
            </Select>
            {(state.subject.length === 0 && state.valid === false) ? <p className="text-danger">*required</p> : <span></span>}
          </FormGroup><br></br>
          <Button onClick={this.submit}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default App;
