// Home.js

import React ,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home({ pokemonProp: results }) {
  console.log(results);
  
  //to do: attach types to the cards, maybe filter by type
  return (
    <div>
      <div className="cards">
        {results.map((val) => (
        <div className='hoverCont'>
          <div className='card container'>
            <Link to={`/pokemon/${val.name}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${val.index}.png`}
                alt=""
                className="pfp row"
              />
              <p className="name">{val.name}</p>
            </Link>
          
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
