import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component{
render(){
    return(
<div>
<ul>
<li><NavLink to='/part1/user1' style={{textDecoration:'none'}}>User1</NavLink></li>
<li><NavLink to="/part1/user2" style={{textDecoration:'none'}}>User2</NavLink></li>
<li><NavLink to="/part1/user3" style={{textDecoration:'none'}}>User3</NavLink></li>
<li><NavLink to="/part1/user4" style={{textDecoration:'none'}}>User4</NavLink></li>
</ul>
</div>
    );
}

}
export default Sidebar;