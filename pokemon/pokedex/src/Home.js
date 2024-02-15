// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home({ pokemonProp: results }) {
  return (
    <div className="mt-8 cards col">
      {results &&
        results.map((val) => (
        <div className='hoverCont'>
          <Link to={`/pokemon/${val.name}`} key={val.index} className="card container">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${val.index}.png`}
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
