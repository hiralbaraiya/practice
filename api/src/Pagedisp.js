import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Pagedisp extends Component {

  Pages = () => {

    let page = [];
    for (let i = 1; i <= this.props.total; i++) {
    
      page.push(
        <NavLink to='/list'>
          <button
            onClick={() => this.props.onClick(i)}
            className={(this.props.current === i) ? "activebutton" : "button"}>
            {i}
          </button>
        </NavLink>
      );
    
    }
    return (page);
  
  }

  render() {

    return (<div>
      {this.Pages()}
    </div>
    );
  
  }

}

Pagedisp.propTypes = {

  onClick: PropTypes.func,
  current: PropTypes.number,
  total: PropTypes.number,

};

export default Pagedisp;