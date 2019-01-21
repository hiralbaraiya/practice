import React, { Component} from 'react';


class Image2 extends Component{
    render(){
        let obj={borderRadius:'50%',width:250}
    return(<div>
        <img src={require('./images/1.jfif')} style={obj} />
        <h4>Paris</h4>
        </div>
    );}
}

export default Image2;