import React, { Component} from 'react';


class Image3 extends Component{
    render(){
        let obj={borderRadius:'50%',width:250}
    return(<div>
        <img src={require('./images/3.jfif')} style={obj} />
        <h4>Lion</h4>
        </div>
    );}
}

export default Image3;