import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';

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
      var exp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      let result = exp.test(this.props.value);
      if (result === false) {
        this.setState(
          {
            className: 'form-control is-invalid',
            password: ''
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
          password2: this.state.password
        }
      );
      this.props.onChange(true, 'validpass');
    }
  }

  render() {
    return (
      <FormGroup row>
        <Label sm={2}>{this.props.name}</Label>
        <Col sm={3}>
          <Input
            className={
              (this.props.val === false ||
                this.state.password === null) ?
                'is-invalid' : ''
            }
            type={this.props.type}
            value={this.props.value}
            name={this.props.type}
            placeholder={this.props.type}
            onChange={(e) => this.onChange(e)}
            onBlur={(e) => this.validate(e.target.name)}
          >
          </Input>
          {
            (this.props.val === false ||
              this.props.value === null) ?
              <FormFeedback>
                please enter valid {this.props.name}
              </FormFeedback> :
              <></>
          }
        </Col>
        <Col sm={3}>
          <Input
            className={
              (this.props.val === false ||
                this.props.value === null) ?
                'is-invalid' :
                this.state.className
            }
            type={this.props.type}
            value={this.state.password2}
            placeholder={`confirm${this.props.type}`}
            name='confirm'
            onChange={(e) => this.onChange(e)}
            onBlur={(e) => this.validate(e.target.name)}>
          </Input>
          {
            (this.props.val === false ||
              this.state.className === 'form-control is-invalid') ?
              <FormFeedback>
                please enter valid {this.props.name}
              </FormFeedback> :
              <></>
          }
        </Col>
      </FormGroup>
    );
  }
}

export default Password;