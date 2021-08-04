

import React, { useState, useEffect } from 'react';
//import data from '../data/recomendations.json';

const badwords = ['Ed Sheeran', 'Selena Gomez', 'Justin  Bieber'];

const data=[
    'Justin Bieber'
 ]

const RecomendationForm = ({updateList}) => {
    const [groups, setGroups] = useState(data);  
    const [groupInput, setGroupInput] = useState('');

    useEffect(() => {
        updateList(groups);
      }, [groups])

    function handleFormSumbit(e){
        e.preventDefault();
        setGroups(prev => [...prev, groupInput]);
        setGroupInput("");        
        localStorage.setItem('recomendations',groups);
    }

    function handleInput(e){
        if(badwords.join(' ').toLocaleLowerCase().includes((e.target.value).toLocaleLowerCase())) setGroupInput(e.target.value);
    }

    return (
        <form onSubmit = {handleFormSumbit} >
            <label htmlFor='groupName'>
            Recomend me a group/band:
            </label>
            <input name='groupName' type='text' placeholder='La ROSALIA ;)' value={groupInput} onChange={handleInput}/>
            <button type='submit'>Send</button>
        </form>
        
    );
}

export default RecomendationForm;