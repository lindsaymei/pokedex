// PokemonDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetailPage = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

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
    <div>
      {pokemonDetails ? (
        <div>
          <h2>{pokemonDetails.name}</h2>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
            style={{ width: '150px', height: '150px' }}
          />
          <p>Pokedex Number: {pokemonDetails.id}</p>
          <p>Type: {pokemonDetails.types.map((type) => type.type.name).join(', ')}</p>
          <p>HP: {pokemonDetails.stats.find((stat) => stat.stat.name === 'hp').base_stat}</p>
          <p>Attack: {pokemonDetails.stats.find((stat) => stat.stat.name === 'attack').base_stat}</p>
          <p>Defense: {pokemonDetails.stats.find((stat) => stat.stat.name === 'defense').base_stat}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetailPage;
