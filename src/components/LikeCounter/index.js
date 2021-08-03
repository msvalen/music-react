import React, { useState } from 'react';

const LikeCounter = () => {
  const [ like, setLike] = useState('♡');
  const changeState = () => setLike((previous) => (previous == '♡')? previous = '♥': previous='♡');

  return (
    <div>
      <button onClick={changeState}>{like}</button>
    </div>
  );
}

export default LikeCounter;
