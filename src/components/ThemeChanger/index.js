import React, { useState } from 'react';
import { useTheme } from '../../contexts/Theme';
import style from './style.css'

const ThemeChanger = () => {
    const theme = useTheme();
    const [hide, setHide ]= useState(false);
    
    const renderThemeNav = (data) => {
        return data.map((p,i) => {
            return(
            <label key={i} >
                <i className={"fas "+p.icon}></i>
                <input type='radio' name='theme' value={p.color} checked={p == theme.current} onChange={()=>theme.select(p)} />
            </label>
            )
        })
    }

    return (
        <div className='themeChanger'>
            <span id="hide" onClick={()=>setHide(!hide)}><i className={"fas "+theme.current.icon}></i></span>
            <br></br>
            {hide && 
                <div className = 'menu'>
                    {renderThemeNav(theme.list)}
                </div>
            }
        </div>
    )
}
export default ThemeChanger;