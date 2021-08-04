import React, { useState, useEffect } from 'react';



//recomendations.map((l,i) => {<li key={i}>{l}</li>})
const RecomendationList = ({recomendations}) => {
  const [groups, setGroups] = useState(recomendations);
  const [ statusMessage, setStatusMessage ] = useState('Loading');

    useEffect(() => {
      setGroups(recomendations);
    }, [recomendations])
    
    function update(){
        return groups.map((l,i) => <li key={i}>{l}</li>)
    }
   return (
    <ul>
      {(groups)? update() : statusMessage}
    </ul>
  );
}

export default RecomendationList;