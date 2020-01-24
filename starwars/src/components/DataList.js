import React, {useState, useEffect} from 'react';
import CharCards from './CharacterCards';
import axios from 'axios';
import './StarWars.css';
import styled from 'styled-components';

function DataList() {
// SETTING CHARACTER STATE
  const [charData, setCharData] = useState([]);

// SETTING UP USEEFFECT & GETTING API DATA THROUGH AXIOS
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
          .then(res => {
            setCharData(res.data.results);
            console.log(res.data.results);
          });
  }, []);

// STYLES
  let CardCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <div>
      <h1>Starwars Character Info</h1>
      <CardCont>
      {charData.map(char => {
        return(
          <CharCards card={char} key={char.name} />
        )
      })}
      </CardCont>
    </div>
  );
}

export default DataList;
