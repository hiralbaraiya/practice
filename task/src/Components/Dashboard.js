import React from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Dashboard = (props) => {
  const { users } = props
  return (
    <React.Fragment style={{border:'2px solid black'}}>
      <Row >
            <Col style={{width:'60%'}}><b >User</b></Col>
            <Col ><b>Action</b></Col>
          </Row>
      {users && users.map((user) => {
        return (
          <Row key={user.id}>
            <Col style={{width:'60%'}}><span >{user.firstName} {user.lastName}</span></Col>
          <Col> <NavLink to={`/edit/${user.id}`} >Edit</NavLink></Col>
          </Row>
        )
      })}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Dashboard)