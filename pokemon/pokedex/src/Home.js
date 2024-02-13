// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home({ pokemonProp: results }) {
  console.log(results);
  return (
    <div>
      <div className="cards">
        {results &&
          results.map((val) => (
            <div className="card container" key={val.index}>
              <Link to={`/pokemon/${val.name}`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${val.index}.png`}
                  alt=""
                  className="pfp row"
                />
                <p className="name">{val.name}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
