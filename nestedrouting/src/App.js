import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Part1 from './Part1';
import Home from './Home';

class App extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                    <Route exact path="/" component={Home} />
                <Route path="/part1" component={Part1} /></div>
                </Router>
                </div>
        );
    }
}

export default App;