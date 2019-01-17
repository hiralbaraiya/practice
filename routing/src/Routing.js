import React, { Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Body from './Body';
import Form1 from './Form1';
import Form2 from './Form2';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';

class Routing extends Component{
  constructor(props){
    super(props);
    this.state={}
    this.onClick=this.onClick.bind(this);
  }
  onClick(obj){
    console.log(obj);
    this.setState(obj);
  }
  render(){
return(
    <Router>
       <div>
       <Route path="/" component={Header}/>
       <Route exact path="/Body" component={Body}/>
      <Route path='/form1' component={(props)=><Form1 {...props} onClick={this.onClick}/>}/>
      <Route path='/form2' component={(props)=><Form2 {...props} data={this.state}/>}/>
      <Route path='/Welcome' component={Welcome}/>
      <Route path="/" component={Footer}/>
      </div>
    </Router>
  );
}
}
export default Routing;