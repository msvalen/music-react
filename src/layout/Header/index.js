import React from 'react';
import ThemeChanger from '../../components/ThemeChanger';
import styles from './style.css';

export default () => {
    return (

        <div className='header'> 
            <h1>Personal Playlist</h1>
            <ThemeChanger/>
        </div>
    )
}