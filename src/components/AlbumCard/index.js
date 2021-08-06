import React from 'react';
import './style.css';


import {LikeCounter} from  '..';

const renderSongs = (data) => {
  return data.map((p,i) => <li key={i}>{p.name}</li>)
}

const renderRows = (data) => {
  return data.map((p,i) => <tr key={i}><td><img className='album' src={p.img} /></td><td>{p.name}</td><td><ul>{renderSongs(p.songs)}</ul></td><td><LikeCounter/></td></tr>)
}

const AlbumCard = (data) => {
  return (
    <table style={{ border: "1px solid black", textAlign: "center" }}>
      <thead>
        <tr>
          <th></th>
          <th>Album</th>
          <th>Songs</th>
        </tr>
      </thead>
      <tbody>           
      { renderRows(data.albums) }
      </tbody>
    </table>
  );   
}
  
export default AlbumCard;