import React, { Component } from 'react';
import '../Css/App.css';
import { updateValues, getUser } from '../Fake';

class newRecord extends Component {

  constructor(props) {

    super(props);
    this.state = { data: { name: '', job: '' }, isLoading: false, Loading: false };
    this.validate = this.validate.bind(this);

  }

  onChange(e, val) {

    let obj = { ...this.state.data };
    obj[val] = e.target.value;
    this.setState({ data: obj });

  }

  async onsubmit() {
    this.validate();
    this.setState({ isLoading: true });
    await updateValues(this.state.data);
    this.setState({ isLoading: false })
    this.props.history.push('/list')
  }
  async componentWillMount() {

    let id = this.props.match.params.id
    if (id !== 'new') {
      let page = Math.ceil(this.props.match.params.id / 3);
      let val = (this.props.match.params.id % 3);
      let param = ((val === 0) ? val + 2 : val - 1);
      this.setState({ Loading: true });
      let res = await getUser(page);
      let temp = res.data.data[param]
      this.setState({ data: { name: temp.first_name, job: temp.last_name, avatar: temp.avatar }, Loading: false });
    }

  }
  componentDidUpdate(prevprops) {
    if (this.props !== prevprops) {
      this.setState({ data: { name: '', job: '' } })
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
          <input type='text' value={val.name} placeholder='enter first name' onChange={(e) => this.onChange(e, 'name')}></input>
          <br></br>
          <label>Job:</label>
          <br></br>
          <input type='text' value={val.job} placeholder='enter last name' onChange={(e) => this.onChange(e, 'job')}></input>
          <p></p>
          {
            (id !== 'new') ? (this.state.Loading ? <p>loading</p> :
              <img src={val.avatar} alt='user'></img>) :
              <p></p>
          }
        </form>
        <button className="submit" onClick={(e) => this.onsubmit()}>{this.state.isLoading ? <p>pleasewait</p> : <p>submit</p>}</button>
        <button onClick={(e) => { this.props.history.push('/list') }}>Cancel</button>
      </div>
    );

  }

}


export default newRecord;
