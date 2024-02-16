// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './About';
import Home from './Home';
import PokemonDetailPage from './PokemonDetailPage';
import SortBy from './SortBy';
import axios from 'axios'; // Import axios for fetching detailed Pokemon information
import './App.css';
import './styles.css';

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('index');
  const [showContinueButton, setShowContinueButton] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=300')
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemonDetails, index) => {
          return { ...pokemonDetails, index: index + 1 };
        });
        setPokemonsData({ ...data, results });
      });
  }, []);

  useEffect(() => {
    if (!pokemonsData.results) {
      return;
    }
  
    const fetchAndSortPokemonDetails = async () => {
      const pokemonDetailsArray = await Promise.all(
        pokemonsData.results.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          return response.data;
        })
      );
  
      let sortedResults = [...pokemonDetailsArray];
  
      switch (sortCriteria) {
        case 'index':
          sortedResults.sort((a, b) => a.id - b.id);
          break;
        case 'name':
          sortedResults.sort((a, b) => a.name.localeCompare(b.name));
          break;
        // Include each Pokémon type as a case
        case 'normal':
        case 'fire':
        case 'water':
        case 'grass':
        case 'electric':
        case 'ice':
        case 'fighting':
        case 'poison':
        case 'ground':
        case 'flying':
        case 'psychic':
        case 'bug':
        case 'rock':
        case 'ghost':
        case 'dark':
        case 'dragon':
        case 'steel':
        case 'fairy':
          sortedResults = sortedResults.filter((pokemon) =>
            pokemon.types.some((type) => type.type.name === sortCriteria)
          );
          break;
        default:
          sortedResults.sort((a, b) => a.id - b.id);
      }
  
      if (inputSearch) {
        sortedResults = sortedResults.filter((pokemon) => pokemon.name.includes(inputSearch));
      }
  
      setFilteredPokemon(sortedResults);
    };
  
    fetchAndSortPokemonDetails();
  }, [sortCriteria, pokemonsData.results, inputSearch]);

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleContinueButtonClick = () => {
    setShowContinueButton(false);
  };

  return (
    //do not remove header class for UX reasons
    
      <BrowserRouter>
      <div className="p-14 flex flex-col items-center relative header"> 
        {showContinueButton && (
          <section className='hero'>
            <img src="/PokemonLogo.png" alt="Pokemon Logo" className="logo-image" />
            <img src="/pika.gif" alt="Pikachu" className="pikachu-image" />
            <button onClick={handleContinueButtonClick} className="continue-button">
              Continue
            </button>
          </section>
        )}
        {!showContinueButton && (
          <>
            <Link to="/">
              <img className="headerLogo" src="/PokemonLogo.png" alt="Pokemon Logo" style={{ width: '350px' }} />
            </Link>
            <div className="flex items-center mt-4 filterCont">
              <input
                onChange={(e) => setInputSearch(e.target.value)}
                placeholder="Enter Pokemon here"
                type="text"
                className="p-2 border-blue-500 border-2"
              />
              <SortBy onSelectSort={handleSortChange} />
            </div>
          </>
        )}
      </div>

      {!showContinueButton && (
        <div className="scroll-box mt-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  pokemonProp={filteredPokemon}
                  showContinueButton={showContinueButton}
                />
              }
            />
            <Route path="/about/:pokemonId" element={<About />} />
            <Route
              path="/pokemon/:pokemonName"
              element={
                <PokemonDetailPage
                  hideHeader={true} // Pass a prop to hide the header
                />
              }
            />
            <Route path="/pokemon" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>

  
    
  );
}

export default App;
