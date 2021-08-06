import React from 'react';
import {AlbumCard} from '..';

const  GroupCard = (data) => {
    return (
        <div>
          <h2>{data.name}</h2>
          <h3>{data.genre}</h3>
          <p>{data.introduction}</p>
          <h4>My favorite songs of this group:</h4>
          { <AlbumCard albums = {data.albums}/> }
        </div>
    );    
}
export default GroupCard;