import React, { Component} from 'react';


class Image1 extends Component{
    render(){
        let obj={borderRadius:'50%',width:250}
    return(
        <div>
        <img src={require('./images/2.jpg')} style={obj} />
        <h4>Pyramid</h4>
        </div>
    );}
}

export default Image1;