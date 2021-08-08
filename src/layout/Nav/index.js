import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default () => { 
    return (
        <nav className='routesNav'>
            <NavLink activeClassName='current' exact to="/">Home</NavLink>
            <NavLink activeClassName="current" to='/music'>Music</NavLink>
            <NavLink activeClassName="current" to="/other">Other</NavLink>
        </nav>
    );
}