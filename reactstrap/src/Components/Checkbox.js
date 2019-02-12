import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class Checkbox extends Component {
  checkbox(subject) {
    let test = subject.map((key, index) => {
      let state = this.props.stat;
      let values = (this.props.isplane) ?
        key :
        (!this.props.id) ?
          key.value :
          key[this.props.id];
      let name1 = (this.props.isplane) ?
        (!this.props.name) ?
          'checkbox' : this.props.name :
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
              checked={
                (state[state.indexOf(values)] === values) ?
                  true : false
              }
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
      this.checkbox(this.props.value)
    );
  }
}

Checkbox.defaultProps = {
  type: 'checkbox',
  value: ['a', 'b', 'c'],
  isplane: true,
};

export default Checkbox;