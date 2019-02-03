import React, { Component } from 'react';
import '../Css/App.css';
import { updateValues, getUser } from '../FakeApi/Api';

class newRecord extends Component {

  constructor(props) {

    super(props);
    this.state = { data: {}, Loading: false };
    this.validate = this.validate.bind(this);

  }

  onChange(e, val) {

    let obj = { ...this.state.data };
    obj[val] = e.target.value;
    this.setState({ data: obj });

  }

  onsubmit() {
    this.validate();
    this.setState({ isLoading: true });
    updateValues(this.state.data)
      .then((response) => {
        console.log(response);
        this.setState({ Loading: false });
        this.props.history.push('/list');
      })
      .catch((error) => {
        console.log(error);
        this.setState({ Loading: false });
        this.props.history.push('/list');
      });
  }
  componentWillMount() {

    let id = this.props.match.params.id;
    if (id !== 'new') {
      this.setState({ Loading: true });
      getUser(`/${id}`)
        .then((res) => {
          let temp = res.data.data
          this.setState(
            {
              data:
              {
                name: temp.first_name,
                job: temp.last_name,
                avatar: temp.avatar,
              },
              Loading: false,
            }
          );
        })
        .catch((error) => {
          console.log(error);
          this.setState({ Loading: false });
        });
    }

  }
  componentDidUpdate(prevprops) {
    if (this.props !== prevprops) {
      this.setState({ data: { name: '', job: '' } });
    }
  }

  validate() {

    console.log('validation');

  }

  render() {
    let id = this.props.match.params.id;
    let val = this.state.data;
    return (
      <div className="new">
        {(id === 'new') ? <p><b>Add User</b></p> : <p><b>Edit User</b></p>}
        <form>
          Name:<br></br>
          <input
            type='text'
            value={val.name}
            placeholder='enter first name'
            onChange={(e) => this.onChange(e, 'name')}>
          </input>
          <br></br>
          <label>Job:</label>
          <br></br>
          <input
            type='text'
            value={val.job}
            placeholder='enter last name'
            onChange={(e) => this.onChange(e, 'job')}>
          </input>
          <p></p>
          {
            (id !== 'new') ? (this.state.Loading ? <p>loading</p> :
              <img src={val.avatar} alt='user'></img>) :
              <p></p>
          }
        </form>
        <button
          className="submit"
          onClick={(e) => this.onsubmit()}>
          {(this.state.Loading) ?
            <p>pleasewait</p> :
            <p>submit</p>}
        </button>
        <button
          onClick={(e) => { this.props.history.push('/list'); }}>
          Cancel
        </button>
      </div>
    );

  }

}


export default newRecord;
