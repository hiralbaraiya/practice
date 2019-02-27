import React from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const InputField = (props) => {
  let { regexp, prop: { type, name,placeholder } } = props;
  
  function validate(e) {
    console.log('vlidate')
    let feildtype = type
    var exp = null;
    if (regexp !== '') {
      exp = regexp;
    }
    else {
      switch (feildtype) {
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
      e.target.className = 'form-control is-invalid'
      props.inputChange('', e.target.name);
    }
    else {
      e.target.className = 'form-control'
    }
  }

  return (
    <FormGroup row>
      <Label sm={2}>{placeholder}</Label>
      <Col sm={8}>
        <Input
          {...props.prop}
          onChange={(e) => props.inputChange(e.target.value, name)}
          onBlur={(e) => validate(e)}></Input>
        <FormFeedback>
          please enter valid {placeholder}
        </FormFeedback>
      </Col>
    </FormGroup>
  );
}

InputField.defaultProps = {
  prop: {
    type: 'text',
    value: '',
    name: 'input',
    placeholder:'Input'
  },
  regexp: '',
  inputChange: () => { }
};

InputField.prototypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder:PropTypes.string,
  name: PropTypes.string,
  regexp: PropTypes.string,
  inputChange: PropTypes.func.isRequired
};

export default React.memo(InputField, function (prevprops, nextprops) {
  return (prevprops.prop.value === nextprops.prop.value && prevprops.valid === nextprops.valid)
});