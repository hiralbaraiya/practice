import React, { Component } from 'react';
import Input from './Input';

class Signup extends Component {
    render() {
        return (
            <div>
                <h1>SIGNUP</h1>
                <form>
                    <p>
                        <Input
                            type='text'
                            placeholder='firstname'
                            onChange={e => this.props.onchange(e.target.value, 'firstname', 'form1')} />
                    </p>
                    <p>
                        <Input
                            type='text'
                            placeholder='lastname'
                            onChange={e => this.props.onchange(e.target.value, 'lastname', 'form1')} />
                    </p>
                    <p>
                        <Input
                            type='text'
                            placeholder='email'
                            onChange={e => this.props.onchange(e.target.value, 'email', 'form1')} />
                    </p>
                    <p>
                        <Input
                            type='password'
                            placeholder='password'
                            onChange={e => this.props.onchange(e.target.value, 'password', 'form1')} />
                    </p>
                    <button onClick={e => this.props.onClick(e)}>Signup</button>
                </form>
            </div>
        );
    }
}

export default Signup;
