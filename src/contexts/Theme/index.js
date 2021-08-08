import React, {useState, useContext} from 'react';
import style from './style.css';

const ThemeContext = React.createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }){
    const [ current, setCurrent ] = useState({
        color:'dark',
        icon:'fa-moon',
    });

    const list = [
        {
            color:'nyan',
            icon: 'fa-cat'
        }, {
            color:'dark',
            icon:'fa-moon',
        },{
            color: 'light',
            icon: 'fa-sun'
        },{
            color:'sepia',
            icon: 'fa-camera-retro'
        }]

    const select = (themeName) =>setCurrent(themeName);

    return (
        <ThemeContext.Provider value={{ list, select, current }} >
            { children }
        </ThemeContext.Provider>
    )
}