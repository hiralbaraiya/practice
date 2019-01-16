import React, { Component } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import './App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { form1: { firstname: '', password: '', gender: '', subject: '' }, form2: {} };
        this.setValues = this.setValues.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    setValues(value, key) {
        let obj = { ...this.state.form1 };
        obj[key] = value;
        this.setState({ form1: obj });
    }
    onClick() {
        this.setState({ form2: this.state.form1 });
    }
    render() {
        return (
            <div>
                <div class='left'><Form1 sendValues={this.setValues} onClick={this.onClick} val={this.state.form1.gender} /></div>
                <div class='right'><Form2 data={this.state.form2} /></div>
            </div>
        );
    }
}

export default App;