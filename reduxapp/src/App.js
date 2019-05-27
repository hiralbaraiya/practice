import React, { Component } from 'react';
import './App.css';
import List from './List';
import {connect} from 'react-redux';

class App extends Component {
  constructor(){
    super()
    this.state={item:''}
  }
  render() {
    return (
      <div className="App">
        <button onClick={()=>{this.props.dispatch({type:'INCR'})}}>+</button>
       <br></br>
        <input type='text' onChange={(e)=>{this.setState({item:e.target.value})}}></input>
        <button onClick={()=>{this.props.dispatch({type:'ADD_ITEM',payload:this.state.item})}}>add item</button>
        {this.props.state.item===[]?<div></div>:
          this.props.state.item.map((item)=>{
            return(
              <li key={item}>{item}</li>
            )
          })
      }
       <br></br>
        <List></List>
      </div>
    );
  }
}

export default connect((state)=>{return {state:state.additem}})(App);
