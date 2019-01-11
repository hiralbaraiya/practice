import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { firstname: '', lastname: '', email: '', password: ''};
    }

    onChange(e, id) {
        let obj = {};
        obj[id] = e.target.value;
        this.setState(obj);
    }

    onClick(obj) {
       if( this.validate()){
        this.props.sendValues(obj);}
    }
    validate() {
        let valid=true;
        let exp = /^[a-zA-Z]+([a-zA-Z](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        if (exp.test(this.state.firstname) == false) {
            alert('enter valid firstname');
            valid=false;
            return valid;   
        }
        if (exp.test(this.state.lastname) == false) {
            alert('enter valid lastname');
            valid=false;
            return valid
        }
        let exp1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (exp1.test(this.state.email) == false) {
            alert('wrong email');
            valid=false;
            return valid
        }
        let exp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (exp2.test(this.state.password) == false) {
            alert('atleast 8 character,1 uppercase,1lowercase,1 number');
            valid=false;
            return valid
        }
        return true;
}
render() {
    return (<div>
        <h1>Signup</h1>
        <p><input type='text' placeholder='firstname' onChange={e => this.onChange(e, 'firstname')} /></p>
        <p><input type='text' placeholder='lastname' onChange={e => this.onChange(e, 'lastname')} /></p>
        <p><input type='text' placeholder='email' onChange={e => this.onChange(e, 'email')} /></p>
        <p><input type='password' placeholder='password' onChange={e => this.onChange(e, 'password')}/></p>
        <button onClick={e => this.onClick(this.state)}>SignUp</button>
    </div>
    );
}
}

export default SignUp;