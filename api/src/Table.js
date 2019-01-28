import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import Pagedisp from './Pagedisp';
import PropTypes from 'prop-types';


class Table extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    this.props.onChange(e);

  }

  render() {
    return (<div>
      {this.props.data.isLoading ? <p></p> :
        <div>
          <div className='table'>
            <div>
              <div className='headr'><b>Firstname</b></div>
              <div className='headr'><b>Lastname</b></div>
              <div className='headr'><b>Avtar</b></div>
              <div className='headl'><b>Action</b></div>
            </div>
            {
              this.props.data.data.data.map((list) => {
                return (
                  <div key='list.id'>
                    <div className='left'>{list.first_name}</div>
                    <div className='left'>{list.last_name}</div>
                    <div className='left'>
                      <img className='remote' src={list.avatar} alt="user">
                      </img>
                    </div>
                    <div className='right'>
                      <NavLink to={'/list/' + list.id} className='link'>Edit</NavLink>
                      |
                      <NavLink to='/abc' className='link'>Delete</NavLink></div>
                  </div>)
              })
            }
          </div>
          <p></p>

        </div>

      }
      <Pagedisp
        onClick={this.onClick}
        current={this.props.data.data.page}
        total={this.props.data.data.total_pages}>
      </Pagedisp>
    </div>);

  }

}
Table.propTypes = {

  data: PropTypes.object,
  onChange: PropTypes.func,

};
export default Table;