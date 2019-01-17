import React, { Component } from 'react';

class Body extends Component {
    constructor(props){
        super(props);
    }
render(){
    return(
        <div style={{height:400,paddingTop:50,paddingLeft:1000}}>
        <p style={{textAlign:'right',paddingRight:20,fontSize:20}}>If registered user click login </p>
        <button style={{float:'right'}}onClick={()=>{this.props.history.push('/Form1')}}>Signup</button>
        <button style={{float:'right'}}onClick={()=>{this.props.history.push('/Form2')}}>Login</button>
       </div>
    );
}



}

export default Body;