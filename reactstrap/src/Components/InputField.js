import React from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const InputField = (props) => {
  console.log('dsf')
  let { valid, regexp, errormsg1, errormsg2 } = props;
  let { type, value, name } = props.prop;
  function onChange(e) {
    props.inputChange(e.target.value, name);
  }
  function validate(e) {
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
      props.inputChange(null, e.target.name);
    }
  }

  return (
    <FormGroup row>
      <Label sm={2}>{name}</Label>
      <Col sm={8}>
        <Input className={
          ((valid === false && value === '') ||
            value === null) ?
            'is-invalid' : ''
        }
          placeholder={name}
          {...props.prop}
          onChange={(e) => onChange(e)}
          onBlur={(e) => validate(e)}></Input>
        {
          ((valid === false && value === '')) ?
            <FormFeedback>
              {errormsg1} {name}
            </FormFeedback> : (value === null) ? <FormFeedback>
              {errormsg2} {name}
            </FormFeedback> :
              <></>
        }</Col>
    </FormGroup>
  );
}

InputField.defaultProps = {
  prop: {
    type: 'text',
    value: undefined,
    name: 'input'
  },
  valid: true,
  regexp: '',
  errormsg1: 'please fill the empty',
  errormsg2: 'please enter valid',
  inputChange: () => { }
};

InputField.prototypes = {
  type: PropTypes.string,
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

export default React.memo(InputField,function(prevprops,nextprops){
  return(prevprops.prop.value===nextprops.prop.value&&prevprops.valid===nextprops.valid)
});
