import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class Radio extends Component {
  Radio(subject) {
    let test = subject.map((key, index) => {
      let state = this.props.stat;
      let values = (this.props.isplane) ?
        key :
        (!this.props.id) ?
          key.value :
          key[this.props.id];
      let name1 = (this.props.isplane) ?
        (!this.props.name) ?
          'Radio' :
          this.props.name :
        (!this.props.name) ?
          key.name :
          key[this.props.name];
      return (
        <FormGroup check inline>
          <Label check>
            <Input
              type={this.props.type}
              name={name1}
              value={values}
              checked={(state === values) ? true : false}
              onClick={(e) => this.props.onClick(e)}
            >
            </Input>
            {values}
          </Label>
        </FormGroup>)
    })
    return test;
  }

  render() {
    return (
      this.Radio(this.props.value)
    );
  }
}

Radio.defaultProps = {
  type: 'Radio',
  value: ['a', 'b', 'c'],
  isplane: true,
};

export default Radio;