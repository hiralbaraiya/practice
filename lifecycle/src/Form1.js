import React, { Component } from 'react';

class Form1 extends Component {
    constructor(props) {
        super(props);
    }

    onChange(e, id) {
        this.props.sendValues(e.target.value, id);
    }
    handleChange(e) {
        if (e.target.checked == true) {
            this.props.sendValues(e.target.value, 'subject');
        }
    }

    render() {
        return (<div>
            <h1>Form1</h1>
            <form1>
                <p><input type='text' placeholder='firstname' onChange={e => this.onChange(e, 'firstname')} /></p>
                <p><input type='password' placeholder='password' onChange={e => this.onChange(e, 'password')} /></p>
                <select value={this.props.val} onChange={e => this.onChange(e, 'gender')} class='select'>
                    <option value='gender'>gender</option>
                    <option value='female'>female</option>
                    <option value='male'>male</option>
                </select><br></br>
                <p>subject:-
                <input type="radio" name="gender" value="It" onChange={e => this.handleChange(e)} /><label>It</label>
                    <input type="radio" name="gender" value="Computer" onChange={e => this.handleChange(e)} /><label>Computer</label>
                    <button onClick={e => this.props.onClick()}>Submit</button></p>.
            </form1>
        </div>
        );
    }
}

export default Form1;