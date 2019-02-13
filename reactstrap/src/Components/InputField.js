import React from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';
import PropTypes from 'prop-types';
 
  export const InputField=(props)=>{
    let {type,value,name,valid,regexp}=props;
    function onChange(e) {
      props.onChange(e.target.value,name);
  }
  function validate(e){
    let type = e.target.type
    var exp=null;
    if (regexp !== '') {
      exp=regexp;
    }
    else {
      switch (type) {
        case 'text':
          exp = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
          break;

        case 'password':
          exp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
          break;

        case 'email':
          exp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
          break;

        case 'number':
          exp = /^[6-9]\d{9}$/;
          break;

        default: return;
      }
    }
    let result = exp.test(e.target.value);
      if (result === false) {
          props.onChange(null, e.target.name);
      }
  }

    return (
      <FormGroup row>
        <Label sm={2}>{name}</Label>
        <Col sm={8}>
          <Input className={
            ((valid === false&&value==='') ||
              value === null) ?
              'is-invalid' : ''
          }
            placeholder={name}
            type={type}
            value={value}
            name={name}
            onChange={(e) => onChange(e)}
            onBlur={(e) => validate(e)}></Input>
          {
            ((valid === false&&value==='') || value === null) ?
              <FormFeedback>
                please enter valid {name}
              </FormFeedback> :
              <></>
          }</Col>
      </FormGroup>
    );
}

InputField.defaultProps = {
  type: 'text',
  value: '',
  name: 'input',
  valid: true,
  regexp:'',
  onChange:()=>{}
};

InputField.prototypes={
type:PropTypes.string,
value:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]),
name:PropTypes.string,
valid:PropTypes.bool,
regexp:PropTypes.string,
onChange:PropTypes.func.isRequired
};
