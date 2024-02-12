import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import About from './About'
import Home from './Home'
import './App.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function App() {

  const [pokemonsData, setPokemonsData] = useState([]);
  const [inputSearch, setInputSearch] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemonDetails, index) => {
          // console.log(res.results.pokemonData)
          return { ...pokemonDetails, index: index + 1 };
        });
        setPokemonsData({ ...data, results })
      });

  }, []);

  useEffect(() => {
    if (!inputSearch) {
      setFilteredPokemon([]);
      return;
    }

    setFilteredPokemon(() =>
      pokemonsData.results?.filter((pokemon) => pokemon.name.includes(inputSearch))
    );
  }, [pokemonsData.results, inputSearch]);

  return (
    <BrowserRouter>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link to="/">
            <header className="text-4xl text-yellow-700">Pokemon Picker</header>
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Enter Pokemon here"
            type="text"
            className="mt-10 p-2 border-blue-500 border-2"
          />
        </div>
      </div>

      <Routes>
        <Route path="/about/:pokemonId" element={<About />}>
        </Route>
        {filteredPokemon &&
          <Route path="/" element=
            {<Home pokemonProp={filteredPokemon} />}>
          </Route>
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;