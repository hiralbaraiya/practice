import React from 'react';
import { Input, FormGroup } from 'reactstrap';

const InputField = (props) => {
  console.log('input');
  return (
    <FormGroup>
      <Input  {...props} type='text' />
    </FormGroup>
  );
};

InputField.defaultProps = {
  type: 'text',
  value: undefined,
  onChange: () => { },
};

export default React.memo(InputField, function (prevprops, nextprops) {
  return (prevprops.value === nextprops.value);
});