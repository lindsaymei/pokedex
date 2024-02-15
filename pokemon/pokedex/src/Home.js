// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from './utils';
import './styles.css';



const Home = ({ pokemonProp: results }) => {
  return (
    <div className="pokemon-list-container mt-8 flex flex-wrap">
      {results &&
        results.map((val) => {
          return (
            <Link
              to={`/pokemon/${val.name}`}
              key={val.index}
              className="card container"
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val.index}.png`}
                alt=""
                className="pfp row"
              />
              <div className="name">
                {capitalizeFirstLetter(val.name)}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
