// src/SearchBar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async (inputValue) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
      const pokemonList = response.data.results.map((pokemon) => pokemon.name);
      const filteredList = pokemonList.filter(
        (pokemon) => pokemon.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
      setSuggestions(filteredList);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const onSuggestionsFetchRequested = ({ value }) => getSuggestions(value);

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const onChange = (event, { newValue }) => setValue(newValue);

  const inputProps = {
    placeholder: 'Search for Pokemon',
    value,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default SearchBar;
