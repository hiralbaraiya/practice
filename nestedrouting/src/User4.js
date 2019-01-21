import React, { Component} from 'react';


class USer4 extends Component{
    constructor(props){
        super(props);
        this.state={userlist:[]};
    }
    onClick(){
    fetch('https://reqres.in/api/users/2')
      .then(res => {
        return res.json();
      })
      .then(res => {
     this.setState({ userlist: res.data});
     console.log(this.state)
      });
    }
    render(){
    return(
        <div>
        <button onClick={(e)=>this.onClick()}>Get User List</button>
        <p>{this.state.userlist.id}</p>
        <p>{this.state.userlist.first_name}</p>
        <p>{this.state.userlist.last_name}</p>
       </div>
    );}
}

export default USer4;