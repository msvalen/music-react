

import React, { useState } from 'react';
//import data from '../data/recomendations.json';

const badwords = ['bad','dog'];

const data=[
    "MGMT",
    "Kerokero Bonito"
 ]

const RecomendationForm = ({updateList}) => {
  const [groups, setGroups] = useState(data);  
  const [groupInput, setGroupInput] = useState('');

    function handleFormSumbit(e){
        e.preventDefault();
        setGroups(prev => [...prev, groupInput]);
        setGroupInput("");
        updateList(groups);
    }

    function handleInput(e){
        if(!badwords.includes(e.target.value)) 
        {setGroupInput(e.target.value);}
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