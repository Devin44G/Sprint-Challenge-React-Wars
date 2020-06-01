import React from 'react';
import './StarWars.css';
import styled from 'styled-components';

function CharCards(props) {

  let Card = styled.div`
    background-color: rgba(150, 119, 54, .7);
    margin: 5px 2px;
    padding: 20px;
    width: 230px;
    border-radius: 5px;
  `;
  let CardInfo = styled.div`
    border: solid 1px black;
    border-radius: 5px;
  `;

  return (
    <Card>
      <CardInfo>
        <h2>{props.card.name}</h2>
        <p>Gender: {props.card.gender.toUpperCase()}</p>
        <p>Birth Year: {props.card.birth_year}</p>
      </CardInfo>
    </Card>
  );
}

export default CharCards;
