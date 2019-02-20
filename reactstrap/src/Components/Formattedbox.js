import React from 'react';
import NumberFormat from 'react-number-format';
import { Label, FormFeedback, Col, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

export const Formattedbox = (props) => {
  let { valid,errormsg1,errormsg2 } = props;
  let { value } = props.prop;
  function validate(e) {
    let dob = e.target.value
    let exp = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;
    let valid = exp.test(dob);
    if (valid === true) {
      dob = dob.replace(new RegExp(/[^0-9]/gi), "");
      props.inputChange(dob, 'dob');
      console.log('valid')
    }
    else {
      console.log('invalid dob')
      e.target.className = 'form-control is-invalid'
      props.inputChange(null, 'dob');
    }
  }
  return (
    <FormGroup row>
      <Label sm={2}>DOB</Label>
      <Col sm={8}>
        <NumberFormat {...props.prop}
          className={
            ((valid === false && value === '') ||
              value === null) ?
              'form-control is-invalid' : 'form-control'
          }
          onBlur={(e) => validate(e)}></NumberFormat>
        {
          ((valid === false && value === '')) ?
            <FormFeedback>
              {errormsg1} date
            </FormFeedback> : (value === null) ? <FormFeedback>
              {errormsg2} date
            </FormFeedback> :
              <></>
        }</Col>
    </FormGroup>
  );
};
Formattedbox.defaultProps = {
  prop: {
    format:undefined,
    placeholder:'formattedbox',
    mask:[],
    value: undefined,
  },
  valid: true,
  regexp: '',
  errormsg1: 'please fill the empty',
  errormsg2: 'please enter valid',
  inputChange: () => { }
};

Formattedbox.prototypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  errormsg1: PropTypes.string,
  errormsg2: PropTypes.string,
  name: PropTypes.string,
  valid: PropTypes.bool,
  regexp: PropTypes.string,
  inputChange: PropTypes.func.isRequired
};
