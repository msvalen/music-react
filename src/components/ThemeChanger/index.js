import React, { useState } from 'react';
import { useTheme } from '../../contexts/Theme';

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
        <>
         <span id="hide" onClick={()=>setHide(!hide)}><i className={"fas "+theme.current.icon}></i></span>
         {hide && 
            <>
               {renderThemeNav(theme.list)}
            </>
         }
        </>
    )
}
export default ThemeChanger;