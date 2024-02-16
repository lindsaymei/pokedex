// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from './utils'; 
import './styles.css';



const Home = ({ pokemonProp: results }) => {
console.log(results);
  return (
    <div className='pokeSearch'>

    
        <div className="pokemon-list-container mt-8 flex flex-wrap justify-center cards">
            {results &&
            results.map((val) => {
            console.log(val);
                return (
                <Link
                    to={`/pokemon/${val.name}`}
                    key={val.index}
                    className={`card container ${val.types[0].type.name}`}

                >
                    <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val.id}.png`}
                    alt=""
                    className="pfp"
                    />
                    <div className="name">
                    {capitalizeFirstLetter(val.name)}
                    </div>
                </Link>
                );
            })}
        </div>
    </div>
  );
};

export default Home;
