import React, { Component } from 'react';

class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = { form2: { firstname: '', password: '', gender: '', subject: '' } }
        this.handleCheck = this.handleCheck.bind(this);
    }

    componentDidUpdate() {
        if(this.props.data!=this.state.form2){
        this.setState({form2:this.props.data});}
    }
    handleCheck(value) {
        if (this.state.form2.subject == value) {
            return true;
        }
        else {
            return false;
        }
    }
    render() {
        return (<div>
            <h1>Form2</h1>
            <form>
                <p><input type='text' placeholder='firstname' value={this.state.form2.firstname} /></p>
                <p><input type='text' placeholder='lastname' value={this.state.form2.password} /></p>
                <select class='select' value={this.state.form2.gender}>
                    <option value='gender'>gender</option>
                    <option value='female'>female</option>
                    <option value='male'>male</option>
                </select><br></br>
                <p>subject:-
                <input type="radio" checked={this.handleCheck('It')} /><label>It</label>
                    <input type="radio" checked={this.handleCheck('Computer')} /><label>Computer</label></p>
            </form>
        </div>
        );
    }
}

export default Form2;