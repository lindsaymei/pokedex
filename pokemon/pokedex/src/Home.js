// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from './utils'; 
import './styles.css';

const getTypeColor = (types) => {
  // color mappings for each type
  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dark: '#705848',
    dragon: '#7038F8',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };

  return types && types.length > 0 ? typeColors[types[0].type.name] || '#ccc' : '#ccc';
};

const Home = ({ pokemonProp: results }) => {
console.log(results);
  return (
    <div className='pokeSearch'>

    
        <div className="pokemon-list-container mt-8 flex flex-wrap justify-center cards">
            {results &&
            results.map((val) => {
            console.log(val);
                const backgroundColor = getTypeColor(val.types);
                return (
                <Link
                    to={`/pokemon/${val.name}`}
                    key={val.index}
                    className={`card container ${val.types[0].type.name}`}
                //   style={{
                //     backgroundColor,
                //     background: `linear-gradient(to top, ${backgroundColor} 50%, white 60%)`, //i am going to fix this with scss,hold please
                //   }}
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
