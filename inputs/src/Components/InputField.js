import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';

class InputField extends Component {


  validate(e) {
    let type = e.target.type
    if (e.target.name === 'confirmpassword') {
      (this.props.check !== e.target.value) ?
        e.target.value = null : e.target.value = e.target.value;
      return;
    }
    else {
      switch (type) {
        case 'text':
          var exp = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
          break;

        case 'password':
          var exp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
          break;

        case 'email':
          var exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
          break;

        case 'number':
          var exp = /^[6-9]\d{9}$/;
          break;

        default: return;
      }
      let result = exp.test(e.target.value);
      if (result === false) {
        (!this.props.onChange) ? console.log('no validations') : this.props.onChange(null, e.target.name);
      }
    }
  }
  onChange(e) {
    (!this.props.onChange) ?
      e.target.val=true :
      this.props.onChange(e.target.value, this.props.name);
  }

  render() {
    var values = this.props;
   let  {onChange,...prop}=values;
    return (
      <FormGroup row>
        <Label sm={2}>{(!values.name) ? 'input' : values.name}</Label>
        <Col sm={6}>
          <Input className={(prop.val===false || prop.value === null) ? 'is-invalid' : ''}
            {...prop}
            onChange={(e)=>this.onChange(e)}
            onBlur={(e) => this.validate(e)}></Input>
          {(prop.val===false || prop.value === null) ? <FormFeedback>invalid {values.name}</FormFeedback> :
            <></>}</Col>
      </FormGroup>
    );
  }
}

export default InputField;