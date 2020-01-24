import React from 'react';
import './StarWars.css';

function CharCards(props) {

  return (
    <div className="card">
      <div className="card-info">
        <h2>{props.card.name}</h2>
        <p>Gender: {props.card.gender.toUpperCase()}</p>
        <p>Birth Year: {props.card.birth_year}</p>
      </div>
    </div>
  );
}

export default CharCards;
