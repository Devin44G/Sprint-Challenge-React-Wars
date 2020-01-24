import React, {useState, useEffect} from 'react';
import CharCards from './CharacterCards';
import axios from 'axios';
import './StarWars.css';

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

  return (
    <div>
      <h1>Starwars Character Info</h1>
      <div className="card-cont">
      {charData.map(char => {
        return(
          <CharCards card={char} key={char.name} />
        )
      })}
      </div>
    </div>
  );
}

export default DataList;
