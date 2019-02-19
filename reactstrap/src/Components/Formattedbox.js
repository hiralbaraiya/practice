import React from 'react';
import NumberFormat from 'react-number-format';
import { Label ,FormFeedback,Col,FormGroup} from 'reactstrap';
export const Formattedbox = (props) => {
    let {valid}=props;
    let {value}=props.prop;
    function validate(e){
        let dob=e.target.value
        let exp=/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;
        let valid=exp.test(dob);
        if(valid===true){
            dob = dob.replace(new RegExp(/[^0-9]/gi,), "");
            props.inputChange(dob,'dob');
            console.log('valid')
    }
        else{
            console.log('invalid dob')
            e.target.className='form-control is-invalid'
            props.inputChange(null,'dob');
        }
    }
    return (
        <FormGroup row>
        <Label sm={2}>DOB</Label>
        <Col sm={8}>
        <NumberFormat {...props.prop} 
        className={
            ((valid === false&&value==='') ||
              value === null) ?
              'form-control is-invalid' : 'form-control'
          }
        onBlur={(e)=>validate(e)}></NumberFormat>
         {
            ((valid === false&&value==='') || value === null) ?
              <FormFeedback>
                please enter valid date
              </FormFeedback> :
              <></>
          }</Col>
      </FormGroup>
    );
};
