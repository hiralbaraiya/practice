import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const checkbox=(props)=> {
  let {stat,id,isplane,name,type,value}=props;
  let test = value.map((key,i) => {
    let value = (isplane) ?
      key :
      (!id) ?
        key.value :
        key[id];
    let typename = (isplane) ?
      (!name) ?
        'checkbox' : name :
      (!name) ?
        key.name :
        key[name];
    return (
      <FormGroup check inline key={i}>
        <Label check>
          <Input
            type={type}
            name={typename}
            value={value}
            onChange={()=>{}}
            checked={
              (stat[stat.indexOf(value)] === value) ?
                true : false
            }
            onClick={(e) =>props.checkchange(e)}
          >
          </Input>
          {value}
        </Label>
      </FormGroup>)
  })
  return test;
}

export const Checkbox = (props) => {
  return (
    checkbox(props)
  );
}

Checkbox.defaultProps = {
  type: 'checkbox',
  value: ['a', 'b', 'c'],
  isplane: true,
  checkchange: () => { },
  name: '',
  stat:[],
  id:''
};

Checkbox.propTypes={
type:PropTypes.string,
value:PropTypes.array,
isplane:PropTypes.bool,
name:PropTypes.string,
stat:PropTypes.array,
id:PropTypes.string,
checkchange:PropTypes.func.isRequired
};
