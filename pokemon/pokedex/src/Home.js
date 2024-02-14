// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home({ pokemonProp: results }) {
  return (
    <div className="pokemon-list-container mt-8 flex flex-wrap justify-center">
      {results &&
        results.map((val) => (
            //to do: fix styling
        <div className='hoverCont'>
          <Link to={`/pokemon/${val.name}`} key={val.index} className="card container m-4">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val.index}.png`}
              alt=""
              className="pfp row"
            />
            <p className="name">{val.name}</p>
          </Link>
          </div>
        ))}
    </div>
  );
}
