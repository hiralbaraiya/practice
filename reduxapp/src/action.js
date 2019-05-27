export const action =()=>{
    return (dispatch,getState)=>{
        if(getState().reducer%2!==0)
        dispatch({type:'INCR'})
    }
}