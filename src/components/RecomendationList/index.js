import React, { useState } from 'react';



//recomendations.map((l,i) => {<li key={i}>{l}</li>})
const RecomendationList = (recomendations) => {

    function update(){
        console.log(recomendations);
        return recomendations.map((l,i) => {<li key={i}>{l}</li>})
    }
   return (
    <ul>
      {
      update
      }
    </ul>
  );
}

export default RecomendationList;