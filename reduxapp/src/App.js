import React, { Component } from 'react';
import './App.css';
import List from './List';
import {connect} from 'react-redux';
import User from './User'

class App extends Component {
  constructor(){
    super()
    this.state={item:''}
  }
  render() {
    return (
      <div className="App">
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
        <List className='list'></List>
        <User></User>
      </div>
    );
  }
}

export default connect((state)=>{return {state:state.additem}})(App);
