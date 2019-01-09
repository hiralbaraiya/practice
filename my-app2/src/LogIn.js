import React, { Component } from 'react';

class LogIn extends Component {  
    render(){
        return(
        <div>
        <h1>LogIn</h1>
        <p>please enter your emailid and password</p>
            <form>
            <p>Emailid:<input type='text' placeholder='username' onChange={e=>this.props.onchange(e.target.value,'email','form2')}/></p>
            <p>Password:<input type='password' placeholder='password' onChange={e=>this.props.onchange(e.target.value,'password','form2')}/></p>
            <button onClick={e=>this.props.onClick(e)}>LogIn</button>
            </form>
           </div>
        );
    }
}

export default LogIn;
