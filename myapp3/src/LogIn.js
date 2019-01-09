import React, { Component } from 'react';
import Input from './Input';

class LogIn extends Component {
    render() {
        return (
            <div>
                <h1>LogIn</h1>
                <p>please enter your emailid and password</p>
                <form>
                    <p>
                        Emailid: <Input
                            type='text'
                            placeholder='email'
                            onChange={e => this.props.onchange(e.target.value, 'email', 'form2')} />
                    </p>
                    <p>
                        Password: <Input
                            type='password'
                            placeholder='password'
                            onChange={e => this.props.onchange(e.target.value, 'password', 'form2')} />
                    </p>
                    <button onClick={e => this.props.onClick(e)}>LogIn</button>
                </form>
            </div>
        );
    }
}

export default LogIn;
