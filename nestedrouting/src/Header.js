import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Header.css';

const Header=()=>{
    return(
       <nav className="header">
           <NavLink to="/part2" className="link">Part2</NavLink>
           <NavLink to="/part1" className="link">Part1</NavLink>
           <NavLink to="/" className="link">Home</NavLink>
       </nav>
    );
}

export default Header;