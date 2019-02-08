import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';

class Confirm extends Component{
    validate(e){
        if(this.props.check !== e.target.value||e.target.value===''){
            e.target.value = '';
            e.target.className='form-control is-invalid';
        }
        else
         {
             e.target.value=this.props.check
             e.target.className='form-control is-valid';
         }
    }
    
    render(){
        return(
            <FormGroup row>
            <Label sm={2}>{(!this.props.name) ? 'input' : this.props.name}</Label>
            <Col sm={6}>
              <Input className={(this.props.val===false) ? 'is-invalid' : ''}
              valid={false}
                type={this.props.type}
                name='confirmpassword'
                onBlur={(e)=>this.validate(e)}
                ></Input>
              {(!this.props.val || this.props.value === '') ? <FormFeedback>invalid {this.props.name}</FormFeedback> :
                <></>}</Col>
          </FormGroup>  
        );
}
}

export default Confirm;
