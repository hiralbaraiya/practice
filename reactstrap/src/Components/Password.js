import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = { password: '', password2: '', className: 'form-control' };
  }
  onChange(e) {
    if (e.target.name !== 'confirm') {
      this.props.onChange(e.target.value, this.props.name);
      this.setState({ password: e.target.value });
    }
    else {
      this.setState({ password2: e.target.value });
    }
  }
  validate(name) {
    if (name !== 'confirm') {
      var regexp = this.props.regexp;
      let result = regexp.test(this.props.value);
      if (result === false) {
        this.setState(
          {
            className: 'form-control is-invalid',
            password: null
          }
        );
        this.props.onChange(null, name);
      }
    }
    if (this.state.password2 !== this.state.password) {
      this.setState(
        {
          password2: '',
          className: 'form-control is-invalid'
        }
      );
      this.props.onChange(false, 'validpass');
    }
    else {
      this.setState(
        {
          className: 'form-control is-valid',
          password2: this.props.value,
          password: this.props.value
        }
      );
      this.props.onChange(true, 'validpass');
    }
  }
  componentDidUpdate(prevprops) {
    if (prevprops !== this.props && this.props.value === '') {
      this.setState(
        {
          className: 'form-control',
          password2: this.props.value,
          password: this.props.value
        }
      );
    }
  }

  render() {
    let { type, value, name, valid } = this.props;
    return (
      <FormGroup row>
        <Label sm={2}>{name}</Label>
        <Col sm={4}>
          <Input
            className={
              ((valid === false && value === '') ||
                this.state.password === null) ?
                'is-invalid' : ''
            }
            type={type}
            value={value}
            name={type}
            placeholder={type}
            onChange={(e) => this.onChange(e)}
            onBlur={(e) => this.validate(e.target.name)}
          >
          </Input>
          {
            ((valid === false && value === '') ||
              this.state.className === 'form-control is-invalid') ?
              <FormFeedback>
                please enter valid {name}
              </FormFeedback> :
              <></>
          }
        </Col>
        <Col sm={4}>
          <Input
            className={
              ((valid === false && value === '') ||
                value === null) ?
                'is-invalid' :
                this.state.className
            }
            type={type}
            value={this.state.password2}
            placeholder={`confirm${type}`}
            name='confirm'
            onChange={(e) => this.onChange(e)}
            onBlur={(e) => this.validate(e.target.name)}>
          </Input>
          {
            ((valid === false && value === '') ||
              this.state.className === 'form-control is-invalid') ?
              <FormFeedback>
                please enter valid {name}
              </FormFeedback> :
              <></>
          }
        </Col>
      </FormGroup>
    );
  }
}

Password.defaultProps = {
  type: 'password',
  value: '',
  name: 'password',
  valid: true,
  regexp: undefined,
  onChange: () => { }
};

Password.prototypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  valid: PropTypes.bool,
  regexp: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Password;