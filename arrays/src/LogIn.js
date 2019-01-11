import React, { Component } from 'react';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', loggedin: false };
    }

    onChange(e, id) {
        let obj = {};
        obj[id] = e.target.value;
        this.setState(obj);
    }

    onClick() {
        for (let i = 0; i < this.props.data.user.length; i++) {
            if (this.props.data.user[i].email == this.state.email) {
                var password = this.props.data.user[i].password;
                var user = this.state.email;
                if (password == this.state.password) {
                    this.setState({ loggedin: true });
                }
                else {
                    alert('enter valid password');
                }
            }
        }
        if (user == undefined) {
            alert('invalid user');
        }
    }

    logout() {
        this.setState({ loggedin: false })
    }

    render() {
        if (this.state.loggedin == false) {
            return (<div>
                <h1>LogIn</h1>
                <p><input type='text' placeholder='email' onChange={e => this.onChange(e, 'email')} /></p>
                <p><input type='password' placeholder='password' onChange={e => this.onChange(e, 'password')} /></p>
                <button onClick={e => this.onClick()}>LogIn</button>
            </div>
            );
        }
        else {
            return (
                <div>
                    <h1>welcome!!!!!!</h1>
                    <h2>you have loggedin succesfully:)</h2>
                    <button onClick={e => this.logout()}>logout</button>
                </div>
            );
        }
    }
}

export default LogIn;