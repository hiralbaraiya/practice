import React, { Component } from 'react';
//import logo from './logo.svg';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { value: undefined }
  }

  handelchange(e) {
    console.log(e.target.selectionStart)
    let old= this.state.value
    let value = e.target.value
    let number = value.replace(/\D/g,'')
    let length = number.length
    let start=number.substring(0,3)
    let middle=number.substring(3,6)
    let end=number.substring(6,10)
    if(length>3&&length<7){
      start=`(${start}) `
    }
    else if(length>6){
        start=`(${start}) `
        middle=`${middle}-`
      }

      let newvalue=start+middle+end
      // if(value!==old){
      //   let index= newvalue.match(old)[0].length
      //   e.target.selectionStart=index+1
      //   e.target.selectionEnd=index+1
      //   console.log(index)
       
      // }
      
    
    this.setState({ value: newvalue })
  }

  render() {
    return (
      <div className="App">
        <input type='text'
          value={this.state.value}
          onChange={(e) => this.handelchange(e)} />
        
      </div>
    );
  }
}

export default App;
