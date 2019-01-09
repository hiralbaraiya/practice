import React, { Component } from 'react';
import Signup from './Signup';
import LogIn from './LogIn';
import Header from './Header';
import Footer from './Footer';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form1:
            {
                firstname: 'h',
                lastname: '',
                email: '',
                password: '',
            },
            form2:
            {
                email: '',
                password: ''
            }
        };
        this.onchange = this.onchange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onchange(value, key, sel) {
        let obj = { ...this.state[sel] };
        obj[key] = value;
        this.setState({ [sel]: obj });
    }

    onClick(e) {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Header />
                <div id='left'><Signup onchange={this.onchange} onClick={this.onClick} /></div>
                <div id='right'><LogIn onchange={this.onchange} onClick={this.onClick} /></div>
                <Footer />
            </div>
        );
    }
}

export default App;
