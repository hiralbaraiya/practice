import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions/actions';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class Edit extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        mobile: '',
        address: [],
      },
      modal: false,
    }
  }

  componentWillMount() {
    if (this.props.user) {
      console.log(this.props.user, 'will')
      this.setState({ user:{...this.props.user }})
    }
  }

  handelChange = (e) => {
    this.setState({ user: { ...this.state.user, [e.target.id]: e.target.value } })
  }

  handelSubmit = (e) => {
    console.log(this.props, 'submit')
    e.preventDefault();
    this.props.dispatch(editUser({ id: this.props.match.params.id, ...this.state.user }))
    this.props.history.push('/')
  }

addAddress=()=>{
  this.setState({user:
    {...this.state.user,address:[...this.state.user.address,this.state.tempadd]}}
    ,()=>{this.setState({modal:!this.state.modal})})
}

editAdd=(e)=>{
  this.setState({user:
    {...this.state.user,
      address:Object.assign([],this.state.user.address,{[e.target.id]:e.target.value})}}
    )
}

  render() {
    const { firstName, lastName, mobile, address } = this.state.user
    return (
      <div >
        <Modal isOpen={this.state.modal} toggle={() => this.setState({ modal: !this.state.modal })} className={this.props.className}>
          <ModalBody>
            <div className='input-field'>
              <label htmlFor='address' >Adress</label>
              <input type='text' id='adress' onChange={(e)=>this.setState({tempadd:e.target.value})}></input>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addAddress}>Add</Button>
            <Button color="secondary" onClick={() => this.setState({ modal: !this.state.modal })}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <form onSubmit={this.handelSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Edit</h5>
          <div className='input-field'>
            <label htmlFor='firstName'>FirstName</label>
            <input type='text' id='firstName' onChange={this.handelChange} value={firstName}></input>
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>LastName</label>
            <input type='text' id='lastName' onChange={this.handelChange} value={lastName}></input>
          </div>
          <div className='input-field'>
            <label htmlFor='mobile'>Mobile</label>
            <input type='number' id='mobile' onChange={this.handelChange} value={mobile}></input>
          </div>
          {address&&address.map((address,index)=>{
            return(
              <div className='input-field' key={index}>
              <label htmlFor={`address${index+1}`}>Address{index+1}</label>
              <input type='text' id={index} onChange={this.editAdd} value={address}></input>
            </div>
            )
          })}
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0 button' onClick={() => { console.log('submit') }}>Submit</button>
          </div>
        </form>
        <div>
          <button className='btn pink lighten-1 z-depth-0 address' onClick={() => this.setState({ modal: !this.state.modal })}>Add adress</button>
        </div>
        <div className='red-text center'>
          {!this.props.user ? <p>no user found</p> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  return {
    user: state.users[id - 1]
  }
}

export default connect(mapStateToProps)(Edit)