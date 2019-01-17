import React, { } from 'react';
import {NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    const styleobj={textDecoration:'none',paddingRight:10,float:'right',paddingTop:10,fontSize:40};
   return(
           <div class="header">
           <h1 style={{float:'left'}}>React</h1>
            <NavLink to="/Form2" style={styleobj}>Login</NavLink>
        <NavLink to="/Form1" style={styleobj} >Signin</NavLink>
        <NavLink to='/Body' style={styleobj}>Home</NavLink>
        </div>);
}

export default Header;