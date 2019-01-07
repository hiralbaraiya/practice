import React, { Component } from 'react';
import './App.css';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={username:'',password:'',isSigned:true,email:'',message:''};
    }
    onChange(e,id){
        console.log(this.state.username)
        let obj={};
        obj[id]=e.target.value;
        this.setState(obj);
       
    }
    onClick()
    {
        this.props.onChange(this.state);
    }
    validate(){
        let exp= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(exp.test(this.state.email)==false){
        this.setState({message:'enter valid email'});
        }
        else{this.setState({message:''})}
    }
    uvalid(){
            let exp=/^[a-zA-Z]+([a-zA-Z](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
            if(exp.test(this.state.username)==false){
                this.setState({message:'enter valid username'});
            }
            else{this.setState({message:''})}
    }
    pvalid(){
        let exp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(exp.test(this.state.password)==false){
            this.setState({message:'atleast 8 character,1 uppercase,1lowercase,1 number'});
        }
        else{this.setState({message:''})}
    }
    render(){
        let mstyle={fontSize:'20px',color:'red',textAlign:'center'};
        return(
            <div>
                <h1>SIGNUP</h1>
                <form>
                <p><input type='text' placeholder='username' id='a' onChange={e=>this.onChange(e, 'username')} onBlur={e=>this.uvalid()}/></p>
                <p><input type='text' placeholder='email' id='a' onChange={e=>this.onChange(e,'email')} onBlur={e=>this.validate()}/></p> 
                <p><input type='password' placeholder='password' id='a' onChange={e=>this.onChange(e,'password')} onBlur={e=>this.pvalid()}/></p>
                <p style={mstyle}>{this.state.message}</p>
                <button onClick={this.onClick.bind(this)}>Signup</button>
                </form>
            </div>
        );
    }
}

export default Signup;
