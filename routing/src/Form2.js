import React, { Component } from 'react';

class Form2 extends Component {
    constructor(props){
        super(props);
        this.state={username:'',password:''}
    }
    onChange(e,id){
        let obj={};
        obj[id]=e.target.value;
        this.setState(obj);
    }
    onClick(){
       if(this.props.data.username==this.state.username){
           if(this.props.data.password==this.state.password){
           this.props.history.push('/Welcome');}
           else{
               alert('wrong password');
           }

       }
       else{
           alert('wrong username');
       }
    }
    render(){
        return(
            <div style={{paddingLeft:1000}}>
            <h1>LOGIN</h1>
            <p>please enter your user name and password</p>
            <form>
            <p><input type='text' placeholder='username' onChange={(e)=>this.onChange(e,'username')}/></p>
            <p><input type='password' placeholder='password' onChange={(e)=>this.onChange(e,'password')}/></p>
            <button onClick={(e)=>this.onClick()}>LogIn</button>
            </form>
            </div>
        );}
}

export default Form2;