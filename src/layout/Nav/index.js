import React from 'react';
import { NavLink } from 'react-router-dom';
//import './style.css';

export default () => { 
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/music" activeClassName="current">Music</NavLink>
            <NavLink to="/other" activeClassName="current">Other</NavLink>
        </nav>
    );
}