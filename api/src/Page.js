import React, { Component } from 'react';
import './App.css';
import { getUser } from './Api';
import { NavLink } from 'react-router-dom';


class Page extends Component {

  constructor(props) {

    super(props);
    this.state = { data: {}, isLoading: true, Loading: false, page: 1 };
    this.setval = this.setval.bind(this);

  }

  setval(e) {

    this.setState({ page: e, Loading: true }, () => this.Getuser());


  }
  Pages = () => {

    let page = [];
    for (let i = 1; i <=this.state.data.total_pages; i++) {
    
      page.push(
        <NavLink to='/list'>
          <button
            onClick={() => this.setval(i)}
            className={(this.state.page === i) ? "activebutton" : "button"}>
            {i}
          </button>
        </NavLink>
      );
    
    }
    return (page);
  
  }

  async componentDidMount() {
    let response = await getUser(this.state.page);
    this.setState({ data: response.data, isLoading: false })

  }

  async Getuser() {
    this.setState({ Loading: true });
    let response = await getUser(this.state.page);
    this.setState({ data: response.data, Loading: false })
  }

  render() {

    return (
      <div>
        {this.state.isLoading ? <p>please wait while we are getting user details...</p> :
          <div>
            <div className='table'>
              <div>
                <div className='headr'><b>Firstname</b></div>
                <div className='headr'><b>Lastname</b></div>
                <div className='headr'><b>Avtar</b></div>
                <div className='headl'><b>Action</b></div>
              </div>
              {
                this.state.data.data.map((list) => {
                  return (
                    <div key='list.id'>
                      <div className='left'>{list.first_name}</div>
                      <div className='left'>{list.last_name}</div>
                      <div className='left'>
                        <img className='remote' src={list.avatar} alt="user">
                        </img>
                      </div>
                      <div className='right'>
                        <NavLink to={'/user/' + list.id} className='link'>Edit</NavLink>
                        |
                        <NavLink to='/list' className='link' onClick={() => this.delete()}>Delete</NavLink></div>
                    </div>)
                })
              }
            </div>
            <p></p>

          </div>

        }
        {this.Pages()}
        <p className='message'> {this.state.Loading ? <p>Fetching data...</p> : <p></p>}</p>
      </div>
    );

  }


}

export default Page;