import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { Label,FormFeedback } from 'reactstrap';
import axios from 'axios';
import { debounce } from 'lodash';
export const Selectbox = (props) => {


  const options = [
    {
      value: '"Leanne Graham"',
      label: 'Bret'
    }
  ];

  function getTypeOptions(e, callback) {
    axios.get(props.url)
      .then(res => {
        let response = [];
        res.data.map((key) => {
          let obj = {
            value: key.name,
            label: key.username
          }
          response.push(obj);
          return response;
        });
        callback(optionfilter(e, response));
      }
      );
  }

  function optionfilter(e, response) {
    const result = response.filter(i =>
      i.label.toLowerCase().includes(e.toLowerCase())
    );
    return result;
  }

  var Debounce = debounce((e, callback) => getTypeOptions(e, callback), 800);

  return (
    <div className='row form-group'>
      <Label sm={2}>Hobby</Label>
      <div className='col-sm-8'>
        <AsyncSelect
          isClearable
          value={props.state}
          onChange={
            (selectedOption) => {
              console.log('onchange')
              props.handelChange(selectedOption, 'hobby');
            }
          }
          loadOptions={Debounce}
          defaultOptions={options}
        />
         {
            (props.state === '' && props.valid === false)
              ?             <FormFeedback>
              required
            </FormFeedback>:<></>
          }
        </div></div>
  );
};
