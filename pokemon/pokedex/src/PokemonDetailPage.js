// PokemonDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PokemonDetailPage.css'; // Import the new CSS file

const PokemonDetailPage = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const getTypeColor = (type) => {
    // Add color mappings for each type
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
  
    return typeColors[type] || '#ccc'; // Default to gray if type not found
  };

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
        setPokemonDetails(null);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  return (
    <div className="pokemon-details-container">
      {pokemonDetails ? (
        <>
          <div className="pokemon-image-container">
            <img
              src={pokemonDetails.sprites.front_default}
              alt={pokemonDetails.name}
              className="pokemon-image"
            />
          </div>
          <div className="pokemon-info">
            <h2>{pokemonDetails.name}</h2>
            <div className="stat-box">
              <p>Pokedex Number: {pokemonDetails.id}</p>
            </div>
            <div className="type-box" style={{ backgroundColor: getTypeColor(pokemonDetails.types[0].type.name) }}>
              <p>Type: {pokemonDetails.types.map((type) => type.type.name).join(', ')}</p>
            </div>
            <div className="stat-box">
              <p>HP: {pokemonDetails.stats.find((stat) => stat.stat.name === 'hp').base_stat}</p>
            </div>
            <div className="stat-box">
              <p>Attack: {pokemonDetails.stats.find((stat) => stat.stat.name === 'attack').base_stat}</p>
            </div>
            <div className="stat-box">
              <p>Defense: {pokemonDetails.stats.find((stat) => stat.stat.name === 'defense').base_stat}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetailPage;