import React from 'react'
import { connect } from 'react-redux';
import { action } from './action'

const List = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
    <button onClick={()=>{props.dispatch({type:'INCR'})}}>+</button>
      <button onClick={() => props.dispatch({ type: 'DECR' })}>-</button>
      <button onClick={() => { props.dispatch(action()) }}>increment if odd</button>
    </div>
  )
}
const mapStateToProps = state => ({
  count: state.reducer
});

export default connect(mapStateToProps)(List)