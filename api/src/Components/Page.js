import React, { Component } from 'react';
import '../Css/App.css';
import { getUser,deletuser } from '../FakeApi/Api';
import { NavLink } from 'react-router-dom';


class Page extends Component {

  constructor(props) {

    super(props);
    this.state = { data: {}, isLoading: true, Loading: false, page: 1 };
    this.setval = this.setval.bind(this);

  }

  setval(e) {

    this.setState({ page: e, Loading:false }, () => this.Getuser());


  }
  Pages = () => {
   let a= Array(this.state.data.total_pages).fill(0).map( (x, i)=>
    {
       return (
        <button
        key={i}
          onClick={() => this.setval(i+1)}
          className={(this.state.page === i+1) ? "activebutton" : "button"}>
          {i+1}
        </button>
       ); 
      }
    )
     return(a);
  }
  delete(){
    if (window.confirm("Delete the item?")) {
      deletuser();
    }
  }

  componentWillMount() {
    this.setState({isLoading:true});
    /*let response = await getUser(this.state.page);
    console.log(response)
    this.setState({ data: response.data, isLoading: false });*/
    getUser(this.state.page)
    .then(
      response => {
        this.setState({ data: response.data, isLoading: false });
      }
    )
    .catch(
      (error) => {
        this.setState({data:{error:true,message:error}});
        this.setState({isLoading:false})
      }
    );
  }

  async Getuser() {
    this.setState({ Loading: true });
    let response = await getUser(this.state.page);
    this.setState({ data: response.data, Loading: false })
  }

  render() {
    console.log(this.state.data)
    let error=this.state.data;
    return (
      <div>
        {this.state.isLoading ? <p>please wait while we are getting user details...</p> :
        (error.error)?<h1>there is some error</h1>:
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
                    <div key={list.id}>
                      <div className='left'>{list.first_name}</div>
                      <div className='left'>{list.last_name}</div>
                      <div className='left'>
                        <img className='remote' src={list.avatar} alt="user">
                        </img>
                      </div>
                      <div className='left'>
                        <NavLink to={'/user/' + list.id} className='link'>Edit</NavLink>
                        |
                        <NavLink to='/list' className='link' onClick={() => this.delete()}>Delete</NavLink></div>
                    </div>)
                })
              }
            </div>
            <p></p>
            {this.Pages()}
          </div>

        }
        
        <div className='message'> {this.state.Loading ? <p>Fetching data...</p> : <p></p>}</div>
      </div>
    );

  }


}

export default Page;