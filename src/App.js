import React, { Component } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={username:'',password:'',isSigned:false,email:''};
    }
    onChange(user){
    this.setState({username:user.username,password:user.password,isSigned:user.isSigned});
    }
    render(){
        if(this.state.isSigned!=true){
        return(
            <Signup onChange={this.onChange.bind(this)}/>
        );
        }
        else{
            return(
                <div>
                <Signin data={this.state}/>
               </div>
            );
        }
    }

}

export default App;
