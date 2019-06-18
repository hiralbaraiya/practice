import React from 'react';
import Select from 'react-select';

const DropDown = (props) => {
  return (
    <Select
      name='dropdown'
      onChange={(e) => { console.log(e); }}
      {...props}
    />
  );
};

export default DropDown;