import React, { Component } from 'react';
import {Label, Input,FormFeedback} from 'reactstrap';

class Select extends Component{    

    render(){
        return(
            <Label check>
            <Input type={this.props.type}
            value={this.props.value}
            checked={(this.props.value===this.props.state)?true:false}
            onClick={(e)=>this.props.onClick(e)}/>
            {this.props.value}
          </Label>
        );
    }
}

export default Select;