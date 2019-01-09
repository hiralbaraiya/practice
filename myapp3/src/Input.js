import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <input
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange} />
        );
    }
}

export default Input;