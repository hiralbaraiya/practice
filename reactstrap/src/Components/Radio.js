import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const Radiobutton=(props)=>{
  let {stat,id,isplane,name,type,value}=props;
  let test = value.map((key) => {
    let value= (isplane) ?
      key :
      (!id) ?
        key.value :
        key[id];
    let typename= (isplane) ?
      (!name) ?
        'Radio' :
        name :
      (!name) ?
        key.name :
        key[name];
    return (
      <FormGroup check inline>
        <Label check>
          <Input
            type={type}
            name={typename}
            value={value}
            checked={(stat=== value) ? true : false}
            onClick={(e) => this.props.onClick(e)}
          >
          </Input>
          {value}
        </Label>
      </FormGroup>)
  })
  return test;
}

const Radio=(props)=> {
    return (
      Radiobutton(props)
    );
}

Radio.defaultProps = {
  type: 'radio',
  value: ['a', 'b', 'c'],
  isplane: true,
  onClick: () => { },
  name: '',
  stat:'',
  id:''
};

Radio.propTypes={
type:PropTypes.string,
value:PropTypes.array,
isplane:PropTypes.bool,
name:PropTypes.string,
stat:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]),
id:PropTypes.string,
onClick:PropTypes.func.isRequired
};

export default Radio;