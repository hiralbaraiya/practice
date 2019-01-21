import React, { Component} from 'react';


class Image4 extends Component{
    render(){
        let obj={borderRadius:'50%',width:250}
    return(<div>
        <img src={require('./images/4.jfif')} style={obj} />
        <h4>Moon</h4>
        </div>
    );}
}

export default Image4;