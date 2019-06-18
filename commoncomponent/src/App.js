import React, { Component } from 'react';
import './App.css';
import DropDown from './Common/Dropdown'
import InputField from './Common/Input'
import { Col, Form, } from 'reactstrap'
import DateFormat from './Common/DateFormat'

class App extends Component {

  constructor() {
    super()
    this.state = { user: '' }
  }

  handelChange  (e)  {
    this.setState({ user: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form>
            
              <InputField
              disabled
              />
           
              <InputField
                className='nobox' />
            
              <InputField
                value={this.state.user}
                onChange={(e)=>this.handelChange(e)} />
           
          </Form>
          <DropDown
           isClearable
           isSearchable
           options={[{ value: 'chocolate', label: 'Chocolate' },]}
          />
          <DateFormat date={new Date('Tue, Jun 18, 2019 11:53 AM') }/>
        </Col>
      </div>
    );
  }
}

export default App;
