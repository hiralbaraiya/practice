import React, { Component } from 'react';
import './App.css';
import newRecord from './newRecord';
import Edit from './Edit';


class Modify extends Component {


  render() {
    if(this.props.match.params.id==new){
      return(
        <div>
          <newRecord/>
        </div>
      );
    }
    else{
      return(
        <Edit/>
      );
    }
  }

}


export default Modify;