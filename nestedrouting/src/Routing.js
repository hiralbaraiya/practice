import React, { } from 'react';
import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Part1 from './Part1';
import Home from './Home';
import Part2 from './Part2';

const routing=(<Router>
    <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home}/>
        <Route path="/part1" component={Part1}/>
        <Route path="/part2" component={Part2}/>
        <Route path="/" component={Footer} />
    </div></Router>
)

export default routing;
