import React from 'react';

import LikeCounter from  './LikeCounter';

const renderRows = (data) => {
    return data.map((p,i) => <tr key={i}><td>{p.name}</td><td><img className='album' src={p.img} /></td><td><LikeCounter/></td></tr>)
  }

const  SongsCard = (data) => {
    return (
        <table style={{ border: "1px solid black", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            { renderRows(data.songs) }
          </tbody>
        </table>
      );   
}
export default SongsCard;