import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import PokemonDetailPage from './PokemonDetailPage';
import SortBy from './SortBy';
import './App.css';
import './styles.css';

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('index');

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

    let sortedResults = [...pokemonsData.results];

    switch (sortCriteria) {
      case 'index':
        sortedResults.sort((a, b) => a.index - b.index);
        break;
      case 'name':
        sortedResults.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'hp':
        sortedResults.sort((a, b) => getStatValue(a, 'hp') - getStatValue(b, 'hp'));
        break;
      case 'attack':
        sortedResults.sort((a, b) => getStatValue(a, 'attack') - getStatValue(b, 'attack'));
        break;
      case 'defense':
        sortedResults.sort((a, b) => getStatValue(a, 'defense') - getStatValue(b, 'defense'));
        break;
      default:
        sortedResults.sort((a, b) => a.index - b.index);
    }

    if (inputSearch) {
      sortedResults = sortedResults.filter((pokemon) => pokemon.name.includes(inputSearch));
    }

    setFilteredPokemon(sortedResults);
  }, [sortCriteria, pokemonsData.results, inputSearch]);

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  return (
    <BrowserRouter className="searchCont container">
      <div className="p-14 flex flex-col items-center filterCont">
        <Link to="/">
          <img src="/PokemonLogo.png" alt="Pokemon Logo" style={{ width: '15vw' }} className='logo'/>
        </Link>
        <div className="items-center mt-4">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Enter Pokemon here"
            type="text"
            className="p-2 border-blue-500 border-2 row search"
          />
          <SortBy onSelectSort={handleSortChange} className="sort"/>
        </div>
      </div>

      <div className="mt-8"> 
      <Routes>
        <Route path="/about/:pokemonId" element={<About />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetailPage />} />
        <Route path="/" element={<Home pokemonProp={filteredPokemon} />} />
      </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

const getStatValue = (pokemon, statName) => {
  const stat = pokemon.stats && pokemon.stats.find((s) => s.stat.name === statName);
  return stat ? stat.base_stat : 0;
}