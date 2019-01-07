import React, { Component } from 'react';
import './App.css';

class Signin extends Component {               
    constructor(props){
    super(props);
    this.state={isloggedin:false,username:'',password:''};
    }

    onChange(e,id){
        let obj={};
        obj[id]=e.target.value;
        this.setState(obj);
        console.log(this.state);
    }
    onClick(){
        let details=this.props.data;
        if(details.username!=this.state.username){
            alert("wrong user name");
        }
        else{
        if(details.password!=this.state.password){
            alert("wrong password");
        }
        else{
        this.setState({isloggedin:true});
            }
        }
    }
    render(){
        if(this.state.isloggedin==false){
        return(
            <div>
            <p>please enter your user name and password</p>
            <form>
            <p>Username:<input type='text' placeholder='username' id='a'onChange={e=>this.onChange(e,'username')}/></p>
            <p>Password:<input type='password' placeholder='password' id='a'onChange={e=>this.onChange(e,'password')}/></p>
            <button onClick={a=>this.onClick()}>LogIn</button>
            </form>
            </div>
        );}
        else{
            return(<div>
            <h1>hello</h1>
            <p>welcome!!!</p>
            <p>you have logged in successfully:)</p>
            </div>
            );
        }
    }
   
}

export default Signin;
