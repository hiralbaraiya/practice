import React, { Component } from 'react';
import '../Css/App.css';
import { getUser, deletuser } from '../FakeApi/Api';
import { NavLink } from 'react-router-dom';


class Page extends Component {

  constructor(props) {

    super(props);
    this.state = { data: null, Loading: false, page: 1 };
    this.setval = this.setval.bind(this);
    this.Getuser = this.Getuser.bind(this);

  }

  setval(e) {

    this.setState({ page: e, Loading: false }, () => this.Getuser());


  }
  Pages = () => {
    let a = Array(this.state.data.total_pages).fill(0).map((x, i) => {
      return (
        <button
          key={i}
          onClick={() => this.setval(i + 1)}
          className={(this.state.page === i + 1) ? "activebutton" : "button"}>
          {i + 1}
        </button>
      );
    }
    );
    return (a);
  }
  delete() {
    if (window.confirm("Delete the item?")) {
      deletuser();
    }
  }

  componentWillMount() {
    this.Getuser();
  }

  Getuser() {
    this.setState({ Loading: true });
    getUser(`?page=${this.state.id}`)
      .then(
        response => {
          this.setState({ data: response.data, Loading: false });
        }
      )
      .catch(
        (error) => {
          this.setState({ data: { error: true, message: error } });
          this.setState({ Loading: false });
        }
      );
  }

  render() {
    console.log(this.state.data);
    let temp = this.state;
    let data = this.state.data;
    return (
      <div>
        {(temp.Loading && data === null) ?
          <p>please wait while we are getting user details...</p>
          :
          (data.error) ? <h1>there is some error</h1> :
            <div>
              <div className='table'>
                <>
                  <div className='head left'><b>Firstname</b></div>
                  <div className='head left'><b>Lastname</b></div>
                  <div className='head left'><b>Avtar</b></div>
                  <div className='head left'><b>Action</b></div>
                </>
                {
                  data.data.map((list) => {
                    return (
                      <React.Fragment key={list.id} className='rows'>
                        <div className='left'>{list.first_name}</div>
                        <div className='left'>{list.last_name}</div>
                        <div className='left'>
                          <img className='remote' src={list.avatar} alt="user">
                          </img>
                        </div>
                        <div className='left'>
                          <NavLink
                            to={'/user/' + list.id}
                            className='link'>
                            Edit
                           </NavLink>
                          |
                          <NavLink
                            to='/list'
                            className='link'
                            onClick={() => this.delete()}>
                            Delete
                          </NavLink>
                        </div>
                      </React.Fragment>);
                  })
                }
              </div>
              <p></p>
              {this.Pages()}
            </div>

        }
        <div className='message'>
          {
            (temp.Loading && data != null) ?
              <p>Fetching data...</p> :
              <p></p>
          }
        </div>
      </div>
    );

  }


}

export default Page;