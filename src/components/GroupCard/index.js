import React from 'react';
import {SongCard} from '..';

const  GroupCard = (data) => {
    return (
        <div>
          <h2>{data.name}</h2>
          <h3>{data.genre}</h3>
          <p>{data.introduction}</p>
          <h4>My favorite songs of this group:</h4>
          { <SongCard songs = {data.songs}/> }
        </div>
    );    
}
export default GroupCard;