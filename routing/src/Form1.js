import React, { Component } from 'react';

class Form1 extends Component {
    constructor(props){
        super(props);
        this.state={username:'',password:'',email:''}
        this.onClick=this.onClick.bind(this);
    }
    onChange(e,id){
        let obj={};
        obj[id]=e.target.value;
        this.setState(obj);
    }
    onClick(){
        this.props.history.push('/Form2');
        this.props.onClick(this.state);
    }
   
render(){
    return(
        <div style={{paddingLeft:1000}}>
            <h1>SIGNUP</h1>
            <form>
            <p><input type='text' placeholder='username' onChange={(e)=>this.onChange(e,'username')}/></p>
            <p><input type='text' placeholder='email' onChange={(e)=>this.onChange(e,'email')} /></p> 
            <p><input type='password' placeholder='password'  onChange={(e)=>this.onChange(e,'password')}/></p>
            <button onClick={this.onClick}>Signup</button>

            </form>
        </div>
    );
}
}

export default Form1;