import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  let monster = props.monster;
  return (
    <div className='card-container'>
      <img alt='avatar' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
      <h3>{monster.name}</h3>
      <p>{monster.email}</p>
    </div>
  )
}